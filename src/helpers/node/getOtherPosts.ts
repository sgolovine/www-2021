/**
 * This gets "Other Posts"
 * Other post are seen in two places on the site:
 * 1. Home Page - These are the recent posts you see
 * 2. Blog Page- Articles at the bottom of the page.
 */
import fs from "fs/promises"
import { remotePostsMapPath } from "~/defines/paths.node"
import { OtherPosts, PostType } from "~/model/Posts"
import { fetchBlogPostList } from "./fetchBlogPostList.node"

/**
 *
 * @param currentSlug optional slug of the current post the
 * user is viewing. If passed, will remove the item from the list
 * of recent posts if it exists.
 */
export async function getOtherPosts(currentSlug?: string): Promise<OtherPosts> {
  const allLocalPosts = await fetchBlogPostList()
  const remotePostMapRaw = await fs.readFile(remotePostsMapPath, "utf-8")
  const remotePostsMap = JSON.parse(remotePostMapRaw)

  const localPosts = currentSlug
    ? allLocalPosts.filter(post => post.slug !== currentSlug)
    : allLocalPosts

  const sorted = [...localPosts, ...remotePostsMap.posts]
    .sort((a, b) => -new Date(a.date) - -new Date(b.date))
    .slice(0, 5)
    // TODO: This is a little janky and should be refactored.
    .map(item => ({ ...item, postType: item.postType ?? PostType.RemotePost }))

  return sorted
}
