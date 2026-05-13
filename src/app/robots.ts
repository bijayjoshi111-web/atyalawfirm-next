import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://www.atyalawfirm.com.np/sitemap.xml", // replace with your actual domain
  };
}
