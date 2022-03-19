import Head from 'next/head';

import fs from 'fs';
import matter from 'gray-matter';

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

  // filter out wip posts
  posts = posts.filter(function(e) {
    return !e.frontmatter.tags.includes('wip')
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

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>bunkernet</title>
        <meta property="og:title" content="bunkernet.dev - portfolio website and blog - 404" key="title" />
        <meta property="og:description"
          content="Hi! My name is Zohar, and on this website I share cool things I have built of learned about! \
              However, you'll find nothing here. Only errors...'"
          key="description" />
        <meta property="og:image" content="https://en.gravatar.com/userimage/210058707/cdb57864a558eca6d7f37cfe9eedec27.png?size=200" />
      </Head>

      <h1 className='border-red-600'><n className="text-red-600">4 oh... 4</n></h1>
      <p>
        Ohno, seems like you've gotten lost my friend. Or maybe, you have found something you did not know you were looking for!
        In that case, let me tell you a story...
      </p>
      <div className='p-8 text-center'>
        <p className='text-center'>
          all about how,
          My life got flipped-turned upside down,
          And I'd like to take a minute, just sit right there,
          I'll tell you how I became the prince of a town called Bel Air.
        </p>
        <p className='text-center'>
          In West Philadelphia, born and raised
          On the playground is where I spent most of my days.
          Chillin' out, maxin', relaxin all cool,
          And all shootin' some B-ball outside of the school.
        </p>
        <p className='text-center'>
          When a couple of guys who were up to no good,
          Started makin' trouble in my neighborhood.
          I got in one little fight and my mom got scared,
          And said "You're movin' with your auntie and uncle in Bel Air."
        </p>
        <p className='text-center'>
          I whistled for a cab, and when it came near,
          The license plate said "fresh" and it had dice in the mirror.
          If anything I could say that this cab was rare,
          But I thought "Nah forget it, Yo home to Bel Air."
        </p>
        <p className='text-center pb-10'>
          I pulled up to the house about seven or eight,
          and I yelled to the cabby "Yo homes, smell ya later."
          Looked at my kingdom, I was finally there,
          To sit on my throne as the Prince of Bel Air.
        </p>
        <a href="https://www.lyricsondemand.com/tvthemes/freshprinceofbelairlyrics.html">credits</a>
      </div>
    </div>
  );
}
