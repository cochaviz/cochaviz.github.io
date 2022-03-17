import fs from 'fs';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import figure from 'markdown-it-image-figures';
import emojis from 'markdown-it-emoji';
import Head from 'next/head';

const md = markdownIt()
  .use(highlightjs)
  .use(emojis)
  .use(figure, {
    figcaption: true,
  });

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
    <div className="prose dark:prose-invert mx-auto px-4 pt-4 sm:pt-0">
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.metaTitle} key="title" />
        <meta property="og:description" content={frontmatter.metaDesc} key="description" />
      </Head>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}
