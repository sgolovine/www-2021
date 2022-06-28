/**
 * This file is marked as *.node.ts, this means that it will only work
 * with files marked *.server.*
 *
 * Please make sure to not import this into anything that is not
 * a *.server.* file.
 */
import fs from "fs/promises"
import path from "path"
import { V2SiteData } from "~/model/SiteData"
import { cmsDataRoot } from "~/defines/paths.node"

export async function getSiteData(): Promise<V2SiteData> {
  const rawBioData = await fs.readFile(
    path.resolve(cmsDataRoot, "bio.json"),
    "utf-8"
  )

  const rawContactData = await fs.readFile(
    path.resolve(cmsDataRoot, "contact.json"),
    "utf-8"
  )

  const rawWorkData = await fs.readFile(
    path.resolve(cmsDataRoot, "work.json"),
    "utf-8"
  )

  const bioData = JSON.parse(rawBioData)
  const contactData = JSON.parse(rawContactData)
  const workData = JSON.parse(rawWorkData)

  const siteData: V2SiteData = {
    bio: bioData.bio,
    links: {
      github: contactData.github,
      phoneNumber: contactData["phone-number"],
      phoneNumberAlt: contactData["phone-number-alt"],
      instagram: contactData.instagram,
      twitter: contactData.twitter,
      devTo: contactData["dev-to"],
      website: contactData.website,
      email: contactData.email,
      linkedin: contactData.linkedin,
    },
    work: workData["work-data"].map((workItem: any) => ({
      name: workItem.name,
      description: workItem.description,
      type: workItem["project-type"],
      showInRecent: workItem["show-in-recent-projects"],
      url: workItem.url ?? null,
    })),
  }

  return siteData
}
