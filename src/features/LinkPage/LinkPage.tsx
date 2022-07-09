import React from "react"
import { ContentContainer, PageHeader } from "~/components/layout"
import { LinkItem } from "~/components/links/LinkItem"

export type LinkPageProps = Record<
  "phone" | "email" | "instagram" | "twitter" | "github" | "linkedin" | "devto",
  string
>

const LinkPage: React.FC<LinkPageProps> = ({
  phone,
  email,
  instagram,
  twitter,
  github,
  linkedin,
  devto,
}) => (
  <>
    <PageHeader title="Links" />
    <ContentContainer>
      <LinkItem
        title="Phone"
        href={phone}
        type="phone"
        icon="phone"
        showPreviewOnHover
      />
      <LinkItem
        title="Email"
        href={email}
        type="email"
        icon="email"
        showPreviewOnHover
      />
      <LinkItem
        title="Instagram"
        href={instagram}
        icon="instagram"
        showPreviewOnHover
      />
      <LinkItem
        title="Twitter"
        href={twitter}
        icon="twitter"
        showPreviewOnHover
      />
      <LinkItem title="Github" href={github} icon="github" showPreviewOnHover />
      <LinkItem
        title="LinkedIn"
        href={linkedin}
        icon="linkedin"
        showPreviewOnHover
      />
      <LinkItem
        title="The Practical Dev"
        href={devto}
        icon="devto"
        showPreviewOnHover
      />
    </ContentContainer>
  </>
)

export default LinkPage
