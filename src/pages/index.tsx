import { PageProps } from "gatsby"
import React, { useEffect } from "react"
import BlogPostItem from "~/components/BlogPostItem"
import { ProjectCard } from "~/components/ProjectCard"
import { Section } from "~/components/common/Section"
import { Subheader, Text } from "~/components/common/Typography"
import useAnalytics from "~/hooks/useAnalytics"
import useBlogPosts from "~/hooks/useBlogPosts"
import { useData } from "~/hooks/useData"

const IndexPage = ({ location }: PageProps) => {
  const { siteData } = useData()
  const { recentPosts } = useBlogPosts()
  const analytics = useAnalytics()

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
        <Subheader>Recent Projects</Subheader>
        {siteData.projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
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
