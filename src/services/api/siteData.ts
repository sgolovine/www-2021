import path from "path"
import fs from "fs"
import { ProjectType, SiteData, Work } from "~/model/SiteData"

const cmsRoot = path.resolve(process.cwd(), "public", "cms", "site-data")

export const getSiteData = (): SiteData => {
  const bioRawFile = fs.readFileSync(path.join(cmsRoot, "bio.json"), "utf-8")
  const contactRawFile = fs.readFileSync(
    path.join(cmsRoot, "contact.json"),
    "utf-8"
  )
  const workRawFile = fs.readFileSync(path.join(cmsRoot, "work.json"), "utf-8")

  const bioJSON = JSON.parse(bioRawFile)
  const contactJSON = JSON.parse(contactRawFile)
  const workJSON = JSON.parse(workRawFile)

  const allWork: Work[] = workJSON["work-data"]
    .map((workItem: any) => ({
      showInRecents: workItem["show-in-recent-projects"],
      name: workItem.name,
      url: workItem.url ?? false,
      description: workItem.description,
      projectType:
        workItem["project-type"] === "side-project"
          ? ProjectType.SideProject
          : ProjectType.ProfessionalProject,
    }))
    .filter(Boolean)

  return {
    bio: bioJSON.bio,
    phoneNumber: contactJSON["phone-number"],
    phoneNumberAlt: contactJSON["phone-number-alt"],
    email: contactJSON.email,
    github: contactJSON.github,
    instagram: contactJSON.instagram,
    twitter: contactJSON.twitter,
    devTo: contactJSON["dev-to"],
    website: contactJSON.website,
    linkedin: contactJSON.linkedin,
    work: allWork,
    recentWork: allWork.filter(item => item.showInRecents),
  }
}
