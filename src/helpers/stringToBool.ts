// Converts strings to boolean values
// Used for .env variables since those always
// Come thru as strings
export function strToBool(str: string | null | undefined) {
  if (str === "true") {
    return true
  }
  return false
}
