import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/layout"
import { ContentContainer } from "~/components/layout/ContentContainer"
import { LinkItem } from "~/components/links/LinkItem"
import { useData } from "~/hooks/useData"

const LinkPage: React.FC = () => {
  const { siteData } = useData()

  return (
    <>
      <Header title="Links" />
      <ContentContainer>
        <LinkItem
          title="Phone"
          href={siteData.linkedin}
          type="phone"
          icon="phone"
          showPreviewOnHover
        />
        <LinkItem
          title="Email"
          href={siteData.email}
          type="email"
          icon="email"
          showPreviewOnHover
        />
        <LinkItem
          title="Instagram"
          href={siteData.instagram}
          icon="instagram"
          showPreviewOnHover
        />
        <LinkItem
          title="Twitter"
          href={siteData.twitter}
          icon="twitter"
          showPreviewOnHover
        />
        <LinkItem
          title="Github"
          href={siteData.github}
          icon="github"
          showPreviewOnHover
        />
        <LinkItem
          title="LinkedIn"
          href={siteData.linkedin}
          icon="linkedin"
          showPreviewOnHover
        />
        <LinkItem
          title="The Practical Dev"
          href={siteData.dev_to}
          icon="devto"
          showPreviewOnHover
        />
      </ContentContainer>
    </>
  )
}

export default withNewLayout(LinkPage)