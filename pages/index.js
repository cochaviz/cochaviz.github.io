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
    console.log(a.frontmatter.date, b.frontmatter.date);
    return a.frontmatter.date - b.frontmatter.date;
  });
  // posts = posts.slice(0, 5);

  // Automate?
  const projects = [
    {
      name: "dotfiles",
      url: "https://www.github.com/cochaviz/dotfiles",
      description:
        "Linux configuration, and hidden files (neovim, .zshrc, etc.)",
    },
    {
      name: "course_os",
      url: "https://github.com/rellermeyer/course_os",
      description: "Toy kernel for ARM, written by students of TU Delft",
    },
    {
      name: "acamdemic_markdown",
      url: "https://github.com/cochaviz/academic_markdown",
      description:
        "A workflow for doing academic writing with Markown (and VSCode)",
    },
    {
      name: "battlesnake",
      url: "https://github.com/cochaviz/battlesnake",
      description: "Repo containing my battlesnakes 🐍",
    },
    {
      name: "dotfield",
      url: "https://github.com/cochaviz/dotfield",
      description: "Flutter package which generates a field of dots ",
    },
    {
      name: "bunkernet",
      url: "https://github.com/cochaviz/bunkernet",
      description:
        "Personal website containing projects, guides, and other blog posts (very meta)",
    },
  ];

  return {
    props: {
      projects,
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

export default function Home({ projects, posts }) {
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

      <h1>
        Hi! My name is{" "}
        <span className="text-accent-1-light dark:text-accent-1-dark">
          Zohar
        </span>{" "}
        👨‍💻
      </h1>
      <p>
        I&apos;m a graduate computer science and engineering student at Delft
        University of Technology, specializing in the field of Cyber Security
        and AI systems. I have experience as a software developer, student
        researcher, SOC analyst, and a trainer, but I have always wanted to be a
        teacher, or at least had the desire to communicate what I&apos;ve
        learned and with that learn from others.
      </p>
      <p>
        I love learning and communication, and I hope this website reflects
        that. Here I collect stuff about what I&apos;ve learned, useful
        resources and show off some cool stuff I&apos;ve made. Feel free to have
        a look around and{" "}
        <a href="mailto:cochaviz@bunkernet.dev">tell me what you think! </a>
      </p>

      <h2>Recent Posts</h2>
      <p>
        The most recent articles. Check the archive for more! (Not actually a
        thing now, but I hope it will be at some point.)
      </p>

      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/post/${slug}`}>
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
        <li className="text-gray-500 dark:text-gray-400">older...</li>
      </ul>

      <h2>Projects</h2>
      <p>
        Here you can find the projects I&apos;m mosts proud of! (this is just a
        proxy for the pinned projects from my{" "}
        <a href="https://www.github.com/cochaviz">github profile</a>)
      </p>

      <ul>
        {projects.map(({ name, url, description }) => (
          <li key={name}>
            <a href={url}>{name}</a>
            <p className="italic p-0 m-0 text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
