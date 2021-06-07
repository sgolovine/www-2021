import { PageProps } from "gatsby"
import React, { useEffect } from "react"
import BlogPostItem from "~/components/BlogPostItem"
import { Section } from "~/components/common/Section"
import { Subheader, Text } from "~/components/common/Typography"
import { WorkItem } from "~/components/WorkItem"
import useAnalytics from "~/hooks/useAnalytics"
import useBlogPosts from "~/hooks/useBlogPosts"
import { useData } from "~/hooks/useData"

const IndexPage = ({ location }: PageProps) => {
  const { siteData } = useData()
  const { recentPosts } = useBlogPosts()
  const analytics = useAnalytics()

  const recentWork = siteData.work.slice(0, 4)

  useEffect(() => {
    analytics.trackPage({
      title: "Home",
      href: location.href,
    })
  }, [location])

  return (
    <>
      <Section>
        <Subheader>About Me</Subheader>
        <Text>{siteData.about.bio}</Text>
      </Section>
      <Section>
        <Subheader>Recent Work</Subheader>
        {recentWork.map((item, index) => {
          return <WorkItem work={item} key={index} />
        })}
      </Section>
      {recentPosts && recentPosts.length > 0 && (
        <Section>
          <Subheader>Recent Posts</Subheader>
          {/* Recent Posts Placeholder */}
          {recentPosts.map(post => {
            return <BlogPostItem key={post.id} post={post} />
          })}
        </Section>
      )}
    </>
  )
}

export default IndexPage
