export function stripHttp(url: string) {
  return url.replace("https://", "").replace("http://", "");
}
