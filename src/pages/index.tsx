import React from "react"
import { Section } from "~/components/common/Section"
import { Subheader, Text } from "~/components/common/Typography"
import { RecentPosts } from "~/components/home/RecentPosts"
import { RecentWork } from "~/components/home/RecentWork"
import { withLayout } from "~/components/layout/withLayout"
import useBlogPosts from "~/hooks/useBlogPosts"
import { useData } from "~/hooks/useData"

const IndexPage = () => {
  const { siteData } = useData()
  const { recentPosts } = useBlogPosts()

  const recentWork = siteData.work_data.filter(
    item => item.show_in_recent_projects === true
  )

  return (
    <>
      <Section>
        <Subheader>About Me</Subheader>
        <Text>{siteData.bio}</Text>
      </Section>
      <Section>
        <Subheader>Recent Work</Subheader>
        <RecentWork recentWork={recentWork} />
      </Section>
      {recentPosts && recentPosts.length > 0 && (
        <Section>
          <Subheader>Recent Posts</Subheader>
          <RecentPosts posts={recentPosts} />
        </Section>
      )}
    </>
  )
}

export default withLayout(IndexPage)
