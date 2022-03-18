import Head from 'next/head';

import fs from 'fs';
import matter from 'gray-matter';

import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import figure from 'markdown-it-image-figures';
import anchor from 'markdown-it-anchor';
import emojis from 'markdown-it-emoji';
import toc from 'markdown-it-toc-done-right';

const md = markdownIt()
  .use(highlightjs)
  .use(emojis)
  .use(figure, {
    figcaption: true,
  })
  .use(anchor)
  .use(toc);

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
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
        <meta property="og:title" content={frontmatter.metaTitle} key="title" />
        <meta property="og:description" content={frontmatter.metaDesc} key="description" />
        <meta property="og:image" content={frontmatter.metaImg} key="image" />
      </Head>
      <a className="text-4xl font-mono no-underline fixed bottom-10 right-10 z-0 bg-neutral-900 px-3 py-1 border-dashed border-2"
        href="#TOP">↑</a>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}
