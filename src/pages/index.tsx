import classNames from "classnames"
import React, { useState } from "react"
import { BlogItem } from "~/components/blog/BlogItem"
import { HomeNav } from "~/components/home/HomeNav"
import MobileMenu from "~/components/layout/mobileMenu/MobileMenu"
import { LinkItem } from "~/components/links/LinkItem"
import Punk from "~/components/Punk"
import { WorkItem } from "~/components/work/WorkItem"
import useBlogPosts from "~/hooks/useBlogPosts"
import { useData } from "~/hooks/useData"
import { CloseIcon } from "~/icons/Close"
import { Menu } from "~/icons/Menu"

const sectionClasses = classNames(["py-4"])
const headingClasses = classNames([
  "my-4",
  "text-3xl",
  "font-heading",
  "font-extrabold",
  "italic",
])

const locationMapsUrl: string = "https://www.google.com/maps/place/Denver,+CO"
const employerWebsiteUrl: string = "https://ascendum.com/"
const tiptrackUrl: string = "https://tiptrack.app"
const awesomeDevtoolsUrl: string = "https://awesomedevtools.com"
const otherProjectsUrl: string = "https://sunnygolovine.com/work"

const IndexPage = () => {
  const { siteData } = useData()
  const { recentPosts } = useBlogPosts()

  const workItems = siteData.work_data.filter(
    item => item.show_in_recent_projects
  )

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <div className="max-w-3xl mx-auto my-4">
      <div className="flex md:hidden p-4 flex-row justify-end items-center">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(prevState => !prevState)}
        >
          {mobileMenuOpen ? <CloseIcon /> : <Menu />}
        </button>
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
              key={index}
              name={item.name}
              description={item.description}
              project_type={item.project_type}
              url={item.url}
            />
          ))}
        </div>
        <div className={sectionClasses}>
          <h2 className={headingClasses}>Recent Posts</h2>
          {recentPosts.map(post => (
            <BlogItem
              path={post.path}
              title={post.title}
              date={post.date}
              description={post.description}
              external={post.type === "remote"}
            />
          ))}
        </div>
        <div className={sectionClasses}>
          <h2 className={headingClasses}>Connect With Me</h2>
          <LinkItem
            title="Email"
            href={siteData.email}
            type="email"
            icon="email"
            showPreviewOnHover
          />
          <LinkItem
            title="LinkedIn"
            href={siteData.linkedin}
            type="linkedin"
            icon="linkedin"
            showPreviewOnHover
          />
          <LinkItem
            title="Github"
            href={siteData.github}
            icon="github"
            showPreviewOnHover
          />
          <LinkItem
            title="The Practical Dev"
            href={siteData.dev_to}
            icon="devto"
            showPreviewOnHover
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
