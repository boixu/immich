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
    from: { pattern: "photos.home31.pw/api/*" },
    to: {
      url: "lumin.home31.pw/api",
      cors: {
        origin: true,
        methods: "*",
        exposedHeaders: [],
        allowedHeaders: [],
        credentials: true,
        maxAge: 3600,
      }
    }
  },
  {
    from: { pattern: "photos.home31.pw/.well-known/immich" },
    to: { url: "lumin.home31.pw/.well-known/immich" }
  },
  {
    from: { pattern: "photos.home31.pw/custom.css" },
    to: { url: "lumin.home31.pw/custom.css" }
  }
]

