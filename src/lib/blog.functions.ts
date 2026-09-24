// Server functions for the WordPress blog. These always run on the server,
// so the browser never talks to cms.revlyn.io directly.
import { createServerFn } from "@tanstack/react-start";
import { getPostBySlug, getPosts } from "./wordpress";

export const fetchBlogPosts = createServerFn({ method: "GET" }).handler(async () => {
  return getPosts(1, 50);
});

export const fetchBlogPost = createServerFn({ method: "GET" })
  .validator((slug: string) => {
    if (typeof slug !== "string" || !/^[a-z0-9-]{1,200}$/i.test(slug)) throw new Error("Invalid slug");
    return slug;
  })
  .handler(async ({ data: slug }) => {
    return getPostBySlug(slug);
  });
