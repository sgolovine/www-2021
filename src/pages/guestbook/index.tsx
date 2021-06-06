import { PageProps } from "gatsby"
import React, { useEffect } from "react"
import { Button } from "~/components/common/Button"
import { TextArea } from "~/components/common/Input"
import { Header } from "~/components/common/Typography"
import useAnalytics from "~/hooks/useAnalytics"
import useGuestbook from "~/hooks/useGuestbook"

const GuestbookPage = ({ location }: PageProps) => {
  const {
    message,
    updateMessage,
    submitMessage,
    guestbookLoading,
    guestbookState,
    parsedGuestbookData,
    showError,
    errorMessage,
  } = useGuestbook()

  const analytics = useAnalytics()

  useEffect(() => {
    analytics.trackPage({
      title: "Guestbook",
      href: location.href,
    })
  }, [location])

  return (
    <>
      <Header>GuestBook</Header>
      <p>
        {guestbookState === "post"
          ? "Thank you for signing the guestbook"
          : "Sign the guestbook!"}
      </p>
      <div className="py-4 flex flex-col">
        <TextArea
          value={message}
          onChange={(newText: string) => updateMessage(newText)}
          placeholder="Your message"
          maxLength={160}
        />
        <p className="text-sm">{message.length}/160</p>
        {showError && <p className="text-sm text-red-500">{errorMessage}</p>}
        <div className="flex flex-row justify-end my-2">
          {guestbookState !== "post" && (
            <Button
              onClick={submitMessage}
              title={guestbookState === "submitting" ? "Loading..." : "Sign"}
            />
          )}
        </div>
        <hr className="my-6" />
        <div className="flex flex-col flex-wrap">
          {guestbookLoading ? (
            <pre>Loading...</pre>
          ) : (
            parsedGuestbookData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border p-3 my-2 hover:shadow rounded"
                >
                  <p className="mb-4" key={`gb-item-${index}-${item[0]}`}>
                    {item}
                  </p>
                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

// ts-prune-ignore-next
export default GuestbookPage
