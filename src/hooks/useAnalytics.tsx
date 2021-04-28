import { createInstance, useMatomo } from "@datapunt/matomo-tracker-react"
import {
  ANALYTICS_BASE_URL,
  ANALYTICS_DISABLED,
  ANALYTICS_SITE_ID,
  ANALYTICS_HEARTBEAT_ENABLED,
  ANALYTICS_HEARTBEAT_INTERVAL,
  ANALYTICS_LINK_TRACKING_ENABLED,
} from "~/defines/analytics"

interface TrackPageArgs {
  title: string
  href: string
}

interface TrackActionArgs {
  category: string
  action: string
}

export const matomoInstance = createInstance({
  urlBase: ANALYTICS_BASE_URL,
  siteId: ANALYTICS_SITE_ID,
  disabled: ANALYTICS_DISABLED,
  heartBeat: {
    active: ANALYTICS_HEARTBEAT_ENABLED,
    seconds: ANALYTICS_HEARTBEAT_INTERVAL,
  },
  linkTracking: ANALYTICS_LINK_TRACKING_ENABLED,
})

const useAnalytics = () => {
  const { trackPageView, trackEvent } = useMatomo()

  const trackPage = ({ title, href }: TrackPageArgs) => {
    trackPageView({
      documentTitle: title,
      href,
    })
  }

  const trackAction = ({ category, action }: TrackActionArgs) => {
    trackEvent({
      category,
      action,
    })
  }

  return { trackPage, trackAction }
}

export default useAnalytics
