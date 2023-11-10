import Head from "next/head";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  let posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // filter out wip posts
  posts = posts.filter(function (e) {
    return (
      process.env.NODE_ENV == "development" ||
      !e.frontmatter.tags.includes("wip")
    );
  });

  // sort by most recent post
  posts = posts.sort(function (a, b) {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return {
    props: {
      posts,
    },
  };
}

export function printTags(frontmatter) {
  return frontmatter.tags.map((tag) => (
    <p
      key={tag}
      className="inline italic p-0 m-0 text-neutral-500 dark:text-neutral-400"
    >
      #{tag}{" "}
    </p>
  ));
}

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>cochaviz</title>
        <meta
          property="og:title"
          content="cochaviz.dev - portfolio website and blog"
          key="title"
        />
        <meta
          property="og:description"
          content="Hi! My name is Zohar, and on this website I share cool things I have built of learned about! \
              Check out some of my blog posts or projects"
          key="description"
        />
        <meta
          property="og:image"
          content="https://www.bunkernet.dev/meta-image.png"
          key="image"
        />
      </Head>

      <h1>All Posts</h1>
      <p>Here, you&apos;ll find all the posts I&apos;ve made. Enjoy! :)</p>

      <h2>Posts</h2>

      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              <a>
                [{frontmatter.date}] -{" "}
                {frontmatter.tags.includes("wip") ? "[WIP]" : ""}{" "}
                {frontmatter.title}
              </a>
            </Link>
            <div>
              {frontmatter.tags.map((tag) => (
                <p
                  key={tag}
                  className="inline italic p-0 m-0 text-gray-500 dark:text-gray-400"
                >
                  #{tag}{" "}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
