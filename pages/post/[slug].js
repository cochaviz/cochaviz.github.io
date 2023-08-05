import Head from "next/head";
import Script from "next/script";

import fs from "fs";
import matter from "gray-matter";

import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import figure from "markdown-it-image-figures";
import anchor from "markdown-it-anchor";
import emojis from "markdown-it-emoji";
import toc from "markdown-it-toc-done-right";
import tasks from "markdown-it-tasks";
import footnotes from "markdown-it-footnote";
import copy from "../../public/static/js/copy_button";

/***
 * This method renders footnote anchor.
 * @return a tag with an href
 ***/
function render_footnote_anchor(tokens, idx, options, env, slf) {
  var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

  if (tokens[idx].meta.subId > 0) {
    id += ":" + tokens[idx].meta.subId;
  }

  /* ↩ with escape code to prevent display as Apple Emoji on iOS */
  return ' <a href="#fnref' + id + '" class="no-underline">¶</a>';
}

/***
 * This method renders footnote caption
 * @return number of the current footnote
 ***/
function render_footnote_caption(tokens, idx /*, options, env, slf*/) {
  var n = Number(tokens[idx].meta.id + 1).toString();

  if (tokens[idx].meta.subId > 0) {
    n += ":" + tokens[idx].meta.subId;
  }
  return n;
}

const md = markdownIt({ html: true })
  .use(highlightjs)
  .use(emojis)
  .use(figure, {
    figcaption: true,
  })
  .use(anchor)
  .use(toc)
  .use(tasks, { enabled: true })
  .use(copy, { iconAlt: "copy" })
  .use(footnotes);

md.renderer.rules.footnote_anchor = render_footnote_anchor;
md.renderer.rules.footnote_caption = render_footnote_caption;

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

        {/* MathJax */}
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
        ></script>
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
      <article dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}
