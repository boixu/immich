import proxyflare from "@flaregun-net/proxyflare-for-pages"

// `PagesFunction` is from @cloudflare/workers-types
export const onRequest: PagesFunction[] = [
  (context) =>
    proxyflare({
      config: {
        global: { debug: true },
        routes,
      },
    })(context),
  // other Pages plugins and middleware
]

const routes: Route[] = [
  {
    from: {
      pattern: "photos.home31.pw/api",
      alsoMatchWWWSubdomain: true,
    },
    to: { url: "https://lumin.home31.pw/api" },
  },
  {
    from: {
      pattern: "photos.home31.pw/.well-known/immich",
      alsoMatchWWWSubdomain: true,
    },
    to: { url: "https://lumin.home31.pw/.well-known/immich" },
  },

]
