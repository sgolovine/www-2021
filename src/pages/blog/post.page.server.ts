export async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        testVariable: "onBeforeRender test",
      },
    },
  }
}
