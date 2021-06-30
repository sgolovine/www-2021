import axios from "axios"
import { useEffect, useState } from "react"

const useGuestbook = () => {
  const [message, setMessage] = useState<string>("")
  const [shouldFetchGuestbook, setShouldFetchGuestbook] =
    useState<boolean>(true)
  const [guestbookLoading, setGuestbookLoading] = useState<boolean>(false)
  const [guestbookData, setGuestbookData] = useState<string>("")

  const [parsedGuestbookData, setParsedGuestbookData] = useState<string[]>([])

  const [guestbookState, setGuestbookState] = useState<
    "pre" | "submitting" | "post"
  >("pre")

  const [showError, setShowError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    // Add a date to the end of the URL so axios never caches it.
    const url = `https://api.github.com/gists/${
      process.env.GATSBY_GUESTBOOK_GIST_ID
    }?rand=${new Date().toString()}`

    if (shouldFetchGuestbook) {
      setShouldFetchGuestbook(false)
      setGuestbookLoading(true)
      axios.get(url).then(resp => {
        setGuestbookLoading(false)
        setGuestbookData(
          resp.data.files[process.env.GATSBY_GUESTBOOK_FILENAME as string]
            .content
        )
      })
    }
  }, [shouldFetchGuestbook])

  const updateMessage = (newMessage: string) => {
    setShowError(false)
    setErrorMessage("")
    setMessage(newMessage)
  }

  const submitMessage = async () => {
    setGuestbookState("submitting")

    if (message.length > 160) {
      setShowError(true)
      setErrorMessage("Message can only be up to 160 characters!")
      setGuestbookState("pre")
      return
    }
    // Submit the message here
    const resp = await axios({
      method: "POST",
      url: "/.netlify/functions/updateGuestbook",
      validateStatus: status => status >= 200 && status < 401,
      data: {
        userMessage: message,
      },
    })
    if (resp.status === 201) {
      setGuestbookState("post")
      setShouldFetchGuestbook(true)
    }
  }

  useEffect(() => {
    const splitData = guestbookData.split("\n")
    const withoutLines = splitData.reduce((acc: string[], item: string) => {
      if (item) {
        return [...acc, item]
      }
      return acc
    }, [])
    setParsedGuestbookData(withoutLines)
  }, [guestbookData])

  return {
    guestbookState,
    message,
    updateMessage,
    submitMessage,
    guestbookData,
    guestbookLoading,
    parsedGuestbookData,
    showError,
    errorMessage,
  }
}

export default useGuestbook
