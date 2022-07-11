import { ContentContainer, Layout, PageHeader } from "~/components/layout"
import { getSiteData } from "~/services/api/siteData"
import { NextPageWithLayout, StaticProps } from "./_app"

/**
 * Displays the version from package.json
 * And displays the latest commit from git.
 */

function makeGithubLink(commit?: string) {
  return `https://github.com/sgolovine/sunnygolovine.com/commit/${commit ?? ""}`
}

interface DebugPageProps {
  version?: string
  commit?: string
  githubLink?: string
}

const Page: NextPageWithLayout<DebugPageProps> = ({
  version,
  commit,
  githubLink,
}) => (
  <>
    <PageHeader title="Debug Information" />
    <ContentContainer>
      <div className="mb-4">
        <p className="text-sm font-bold text-brand-yellow">Version</p>
        <p className="text-lg font-medium font-mono p-2">{version ?? ""}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-bold text-brand-yellow">Commit</p>
        <p className="text-lg font-medium font-mono p-2">{commit ?? ""}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-bold text-brand-yellow">Github Link</p>
        <a href={githubLink} className="text-lg font-medium font-mono p-2">
          Link
        </a>
      </div>
    </ContentContainer>
  </>
)

Page.getLayout = page => <Layout pageTitle="Debug Information">{page}</Layout>

export const getStaticProps = async (): StaticProps<DebugPageProps> => {
  const { debug } = getSiteData(["debug"])
  return {
    props: {
      version: debug?.version,
      commit: debug?.commit,
      githubLink: makeGithubLink(debug?.commit),
    },
  }
}

export default Page
