import Head from 'next/head';

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  let posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // sort by most recent post
  posts = posts.sort(function(a, b) {
    return -a.frontmatter.date.localeCompare(b.frontmatter.date);
  });
  posts = posts.slice(0, 4)

  // Automate?
  const projects = [
    { name: "dotfiles", url: "https://www.github.com/cochaviz/dotfiles", description: "Linux configuration, and hidden files (neovim, .zshrc, etc.)" },
    { name: "course_os", url: "https://github.com/rellermeyer/course_os", description: "Toy kernel for ARM, written by students of TU Delft" },
    { name: "gopy", url: "https://github.com/cochaviz/gopy", description: "Go game written in python, without any dependecies " },
    { name: "battlesnake", url: "https://github.com/cochaviz/battlesnake", description: "Repo containing my battlesnakes 🐍" },
    { name: "dotfield", url: "https://github.com/cochaviz/dotfield", description: "Flutter package which generates a field of dots " },
    { name: "bunkernet", url: "https://github.com/cochaviz/bunkernet", description: "Personal website containing projects, guides, and other blog posts " },
  ];

  return {
    props: {
      projects,
      posts,
    },
  };
}

export default function Home({ projects, posts }) {
  return (
    <div className="p-4">
      <Head>
        <title>bunkernet</title>
        <meta property="og:title" content="bunkernet.dev - portfolio website and blog" key="title" />
        <meta property="og:description"
          content="Hi! My name is Zohar, and on this website I share cool things I have built of learned about! \
              Check out some of my blog posts or projects"
          key="description" />
        <meta property="og:image" content="https://en.gravatar.com/userimage/210058707/cdb57864a558eca6d7f37cfe9eedec27.png?size=200" />
      </Head>

      <h1>Hi!</h1>
      <p>
        My name is Zohar, I&apos;m a computer science and engineering student at Delft University of Technology.
        Academically I&apos;m very interested in algorithms and collaborative AI, among other things.
        When I&apos;m not studying I love to make projects about anything that seems interesting at the moment.
      </p>
      <p>
        Here I collect stuff about what I&apos;ve learned, useful resources
        and show off some cool stuff I&apos;ve made. Feel free to have a look around and tell me
        what you think!
      </p>

      <h1 className="pt-8">Recent Posts</h1>
      <p>
        Most recent blog posts. Check the archive for more!
      </p>

      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/post/${slug}`}>
              <a>
                {frontmatter.date} --//-- {frontmatter.title}
              </a>
            </Link>
            <br />
            {frontmatter.tags.map((tag) => (
              <p className="inline italic p-0 text-gray-400">#{tag} </p>
            ))}
          </li>
        ))}
        <li><a>older...</a></li>
      </ul>

      <h1 className="pt-8">Projects</h1>
      <p>
        Here you can find the projects I&apos;m mosts proud of!
        (this is just a proxy for the pinned projects from my <a href="https://www.github.com/cochaviz">github profile</a>)
      </p>

      <ul>
        {projects.map(({ name, url, description }) => (
          <li key={name}>
            <a href={url}>{name}</a>
            <p className="p-0 text-gray-400">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
