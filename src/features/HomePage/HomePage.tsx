import classNames from "classnames"
import React, { useState } from "react"
import { HomeNav } from "./components/HomeNav"
import MobileMenu from "~/components/layout/mobileMenu/MobileMenu"
import { MobileMenuButton } from "~/components/layout/mobileMenu/MobileMenuIcon"
import { LinkItem } from "~/components/links/LinkItem"
import { PostItem } from "~/components/post/PostItem"
import Punk from "./components/Punk"
import { WorkItem } from "~/components/work/WorkItem"
import {
  awesomeDevtoolsUrl,
  employerWebsiteUrl,
  locationMapsUrl,
  otherProjectsUrl,
  tiptrackUrl,
} from "./constants"
import { SiteWorkData } from "~/model/SiteData"
import { BlogPost, BlogPostType } from "~/model/BlogPost"

const sectionClasses = classNames(["py-4"])
const headingClasses = classNames([
  "my-4",
  "text-3xl",
  "font-heading",
  "font-extrabold",
  "italic",
])

export interface IndexPageProps {
  links: Record<"email" | "linkedIn" | "github" | "devTo", string>
  workItems: SiteWorkData[]
  recentPosts: BlogPost[]
}

const IndexPage: React.FC<IndexPageProps> = ({
  links,
  workItems,
  recentPosts,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <div className="max-w-3xl mx-auto my-4">
      <div className="flex md:hidden p-4 flex-row justify-end items-center">
        <MobileMenuButton
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(prevState => !prevState)}
        />
      </div>
      <div className="block md:hidden">
        {mobileMenuOpen && (
          <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
        )}
      </div>
      <div className="flex flex-row justify-center">
        <Punk />
      </div>
      <div className="my-4">
        <h1 className="text-5xl font-heading font-black italic text-center">
          Sunny Golovine
        </h1>
        <div className="hidden md:block">
          <HomeNav />
        </div>
      </div>
      <div className="px-4 md:px-0">
        <div className={sectionClasses}>
          <h2 className={headingClasses}>About Me</h2>
          <p className="text-lg">
            Hey! My name is Sunny Golovine. I&apos;m a full stack software
            engineer from{" "}
            <a className="text-brand-yellow" href={locationMapsUrl}>
              Denver, CO&nbsp;
            </a>
            specializing in Web and Mobile Development. I currently work for
            &nbsp;
            <a className="text-brand-yellow" href={employerWebsiteUrl}>
              Ascendum Solutions
            </a>
            . On the side I work on&nbsp;
            <a className="text-brand-yellow" href={tiptrackUrl}>
              TipTrack
            </a>
            ,{" "}
            <a className="text-brand-yellow" href={awesomeDevtoolsUrl}>
              AwesomeDevtools
            </a>{" "}
            and a bunch of{" "}
            <a className="text-brand-yellow" href={otherProjectsUrl}>
              other awesome projects
            </a>
            .
          </p>
        </div>
        <div className={sectionClasses}>
          <h2 className={headingClasses}>My Work</h2>
          {workItems.map((item, index) => (
            <WorkItem
              key={`work-item-${index}`}
              name={item.name}
              description={item.description}
              project_type={item.project_type}
              url={item.url}
            />
          ))}
        </div>
        <div className={sectionClasses}>
          <h2 className={headingClasses}>Recent Posts</h2>
          {recentPosts.map((post, index) => (
            <PostItem
              key={`recent-post-${index}`}
              path={post.path}
              title={post.title}
              date={post.date}
              description={post.description}
              external={post.type === BlogPostType.Remote}
            />
          ))}
        </div>
        <div className={sectionClasses}>
          <h2 className={headingClasses}>Connect With Me</h2>
          <LinkItem
            title="Email"
            href={links.email}
            type="email"
            icon="email"
            showPreviewOnHover
          />
          <LinkItem
            title="LinkedIn"
            href={links.linkedIn}
            type="linkedin"
            icon="linkedin"
            showPreviewOnHover
          />
          <LinkItem
            title="Github"
            href={links.github}
            icon="github"
            showPreviewOnHover
          />
          <LinkItem
            title="The Practical Dev"
            href={links.devTo}
            icon="devto"
            showPreviewOnHover
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
