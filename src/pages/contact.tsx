import React from "react"
import { Button } from "~/components/common/Button"
import { TextArea, TextInput } from "~/components/common/Input"
import { Section } from "~/components/common/Section"
import { Header } from "~/components/common/Typography"
import useContactForm, { MessageState } from "~/hooks/useContactForm"
import { useData } from "~/hooks/useData"
import { withMainLayout } from "~/components/layout"

interface NotifierProps {
  messageState: MessageState
}
const Error: React.FC<{ children: string }> = ({ children }) => (
  <div className="my-2 p-4 border rounded bg-red-400 border-red-600">
    <p className="font-bold">{children}</p>
  </div>
)

const Success: React.FC<{ children: string }> = ({ children }) => (
  <div className="my-2 p-4 border rounded bg-green-400 border-green-600">
    <p className="font-bold">{children}</p>
  </div>
)

const Notifier: React.FC<NotifierProps> = ({ messageState }) => {
  if (
    !messageState.show ||
    messageState.type === null ||
    messageState.message === null
  )
    return null

  const WrapperComponent = messageState.type === "error" ? Error : Success

  return <WrapperComponent>{messageState.message}</WrapperComponent>
}

const ContactPage = () => {
  const { form, messageState, handleSubmit, handleClear, setFormField } =
    useContactForm()

  const { siteData } = useData()

  return (
    <>
      <Header>Contact</Header>
      <Section>
        <p>
          Enter your information below to send me a message. You can also email
          me directly at{" "}
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
        </p>
      </Section>
      <Notifier messageState={messageState} />
      <Section>
        <div className="flex flex-col w-full">
          <TextInput
            value={form.name}
            onChange={newText => setFormField("name", newText)}
            label="Name"
            placeholder="John Doe"
          />
          <TextInput
            value={form.email}
            onChange={newText => setFormField("email", newText)}
            label="Email"
            placeholder="john_doe@gmail.com"
          />
          <TextArea
            value={form.message}
            onChange={newText => setFormField("message", newText)}
            label="Message"
            placeholder="Hey Sunny ...."
          />
          <div>
            <Button
              additionalClassNames="mr-2"
              title="Send"
              onClick={handleSubmit}
            />
            <Button title="Clear" onClick={handleClear} />
          </div>
        </div>
      </Section>
    </>
  )
}

// ts-prune-ignore-next
export default withMainLayout(ContactPage)