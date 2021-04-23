// import { useMatomo } from "@datapunt/matomo-tracker-react";
// import { useRouter } from "next/router";

interface TrackProps {
  // the "layout" page should be used for any items that are not part of a single page
  page:
    | "home"
    | "blog"
    | "links"
    | "resume"
    | "contact"
    | "guestbook"
    | "layout"
  // a descriptive string of what the user is doing
  action: string
}

interface PageProps {
  title: string
}

export const useAnalytics = () => {
  // const router = useRouter();

  // const {
  //   trackEvent: matomo_trackEvent,
  //   trackPageView: matomo_trackPageView,
  // } = useMatomo();

  const trackPageView = ({ title }: PageProps) => {
    console.log("tracking page view stub > ", title)
    // console.log(
    //   JSON.stringify({
    //     documentTitle: title,
    //     href: `https://sunnygolovine.com${router.pathname}`,
    //   })
    // );
    // matomo_trackPageView({
    //   documentTitle: title,
    //   href: `https://sunnygolovine.com${router.pathname}`,
    // });
  }

  const trackEvent = ({ page, action }: TrackProps) => {
    console.log("track event >", page, action)
    // matomo_trackEvent({
    //   category: page,
    //   action,
    // });
  }

  return {
    trackPageView,
    trackEvent,
  }
}
