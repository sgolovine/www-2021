import React from "react"
import { Button } from "~/components/common/Button"
import { TextArea, TextInput } from "~/components/common/Input"
import { Section } from "~/components/common/Section"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/__legacy__/withLayout"
import { ContentContainer } from "~/components/layout/page/ContentContainer"
import useContactForm from "~/hooks/useContactForm"
import Notifier from "./Notifier"

const ContactPage: React.FC = () => {
  const { form, messageState, handleSubmit, handleClear, setFormField } =
    useContactForm()

  return (
    <>
      <Header
        title="Contact"
        additionalText="Enter your information below to send me a message. You can also email me directly at sunny@glvn.co"
      />
      <ContentContainer>
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
      </ContentContainer>
    </>
  )
}

export default withNewLayout(ContactPage)
