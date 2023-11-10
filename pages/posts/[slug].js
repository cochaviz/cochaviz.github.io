import Head from "next/head";

import fs from "fs";
import matter from "gray-matter";

import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import markedFootnote from "marked-footnote";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

marked
  .use(markedKatex())
  .use(markedFootnote())
  .use(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

/***
 * This method returns an object with required parameter 'slug'
 * @return paths with fallback set to 'false'
 ***/
export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

/***
 * This method pre-renders a page at build time using the props returned from the function (i.e., 'frontmatter' and 'content')
 * @return props: 'frontmatter' and 'content'
 ***/
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.metaTitle} key="title" />
        <meta
          property="og:description"
          content={frontmatter.metaDesc}
          key="description"
        />
        <meta property="og:image" content={frontmatter.metaImg} key="image" />

        <meta name="twitter:card" content="summary_large_image" />

        {/* MathJax
        <script
          dangerouslySetInnerHTML={{
            __html: `
            MathJax = {
              tex: {
                inlineMath: [['$', '$']]
              },
              svg: {
                fontCache: 'global'
              }
            };
            console.log("Loaded MathJax config");
        `,
          }}
        />
        <script
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        ></script> */}
      </Head>
      <a
        className="text-5xl font-sans no-underline fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50 bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark px-3 pb-2 border-2"
        href="#TOP"
      >
        ↑
      </a>
      <h1>{frontmatter.title}</h1>
      {frontmatter.abstract != null && (
        <abstract>
          <h3 className="no-underline">Abstract</h3>{" "}
          <p>{frontmatter.abstract}</p>
        </abstract>
      )}
      {content.includes("[[toc]]") && (
        <abstract>
          <h3 className="no-underline">Table of Contents</h3>{" "}
        </abstract>
      )}
      <article dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </div>
  );
}
