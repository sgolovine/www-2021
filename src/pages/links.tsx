import React from "react"
import { Header } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
import { LinkItem } from "~/components/links/LinkItem"
import { useData } from "~/hooks/useData"

const LinkPage = () => {
  const { siteData } = useData()

  return (
    <>
      <Header>Links</Header>
      <div>
        <LinkItem
          title="Phone"
          href={siteData.linkedin}
          type="phone"
          icon="phone"
        />
        <LinkItem
          title="Email"
          href={siteData.email}
          type="email"
          icon="email"
        />
        <LinkItem
          title="Instagram"
          href={siteData.instagram}
          icon="instagram"
        />
        <LinkItem title="Twitter" href={siteData.twitter} icon="twitter" />
        <LinkItem title="Github" href={siteData.github} icon="github" />
        <LinkItem title="LinkedIn" href={siteData.linkedin} icon="linkedin" />
        <LinkItem
          title="The Practical Dev"
          href={siteData.dev_to}
          icon="devto"
        />
      </div>
    </>
  )
}

export default withMainLayout(LinkPage)
