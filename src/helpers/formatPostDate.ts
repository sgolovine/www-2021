export function formatPostDate(date?: string | Date | null) {
  if (date) {
    return new Date(date).toLocaleDateString()
  }
  return ""
}
