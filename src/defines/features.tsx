import { strToBool } from "~/helpers/stringToBool"

export const features = {
  contactPage: strToBool(process.env.GATSBY_FEATURE_CONTACT_PAGE),
  guestbookPage: strToBool(process.env.GATSBY_FEATURE_GUESTBOOK_PAGE),
}
