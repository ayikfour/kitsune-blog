---
title: 'Setup Next.Js with Tailwind CSS'
date: '2020-05-07'
description: 'My personal workflow to manage project in Figma'
cover: 'https://i.imgur.com/0UEM2yO.png'
coverAlt: 'Photo by Lakagigar in Flickr'
---

A week ago I've spent my time pretty much on reading @/twitter folks personal site. The blogs I've read have mainly focuses on product, design, and tech. Their blog was quite impressing, by from design or even the technology. It's all started because I read this [curated portfolio site](https://www.notion.so/Portfolios-ed4a61b228f24dd9890b2a6d5fd68b1e).

After reading many insightful blog post from people personal site, I interested to start my own blog site. I've background of designer with pretty low coding skill, so I spent my time to do research for a while to know what stack shoul I use.

And found this two site suite best for developing personal:

-  Gatsby –– focus on static generated site
-  Next.js –– can generate static but mainly used because of ssr.

Then I decided to pick Next.Js. First reasone why I choose Next is because their documentation provides clear [Learn section](https://nextjs.org/learn/basics/create-nextjs-app), and pretty much straight forward to the goals (building blog site). The second it is officialy supported by Vercel––site for serverless hosting––which provide easiest way to deploy. Third beacause of biased factor, many people I follow used next for theirs ([paco](http://paco.im/), [brianlovin](https:/brianlovin.com/), [rauchg](https://rauchg.com/)) so I decide to get along.

Here is step-by-step for configuring [Next.js](https:/nextjs.org/) project with [Tailwind CSS](https://tailwindcss.com/) for styling.

### Setup Next.js

#### Manual

if you want plain and manual setup Next.js follow this. first, create a directory for your project, then change directory to `nextjs-blog`:

```bash
mkdir nextjs-blog && cd nextjs-blog
```

<p class="code-alt">create nextjs directory</p>

and init npm. `-y` argument is to proceed with agree all command prompts question:

```bash
npm init -y
```

<p class="code-alt">init npm project</p>

then, install Next.js and React dependencies:

```bash
npm install --save next react react-dom
```

<p class="code-alt">install react, next</p>

after installing dependecies change your `package.json` file:

```javascript
{
  //other config...
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
  //...
}
```

then create new folder named `pages` and create new file inside it named `index.js`. Or just run this command at your project root directory:

```bash
mkdir pages && touch pages/index.js
```

write this code to `./pages/index.js`:

```javascript
// pages/index.js
function Home() {
   return <h1>Welcome to Next.js!</h1>;
}

export default Home;
```

#### Starter template

Or if you want to use [starter template](https://nextjs.org/learn/basics/create-nextjs-app) just run this command to create new directory with Next.js installed:

```bash
npm init next-app nextjs-blog --example "https://github.com/zeit/next-learn-starter/tree/master/learn-starter"
```

and then change directory to `nextjs-blog`:

```bash
cd nextjs-blog
```

#### Run

test running the program (I used the manual setup) by running this command:

```bash
npm run dev
```

and check your pages on [http://localhost:3000](http://localhost:3000) if you follow the manual step you should see this "Welcome to Next.js!" message:

![nextjs-blog index](https://i.imgur.com/fCNFSMk.png)

### Installing Tailwind CSS

install Tailwind CSS and PostCSS:

```bash
npm install tailwindcss postcss-preset-env --save-dev
```

then, create new file named `postcss.config.js` under your project root folder.

```bash
touch postcss.config.js
```

and write this code inside `postcss.cofig.js` file:

```javascript
// postcss.cofig.js
module.exports = {
   plugins: ['postcss-preset-env', 'tailwindcss'],
};
```

that config load our `postcss-preset-env` and `tailwindcss` installed module to our program using `postcss`.

Maybe you've come across some post that require installing `autoprefixer`. In this post, you **don't need to install** `autoprefixer` because its already bundled inside `postcss-preset-env` module.

#### Setup Tailwind CSS in global.css

Now, let's init our Tailwind CSS. Create new file named `global.css` inside `/styles` directory. And write this.

```css
/* styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* some style */
```

What's that? it's css syntax to init Tailwind CSS style into our program. You need to initiate it in the very top of the css file. And then your styling can goes below.

for further reference reading take a look at [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/)

at this point your project root directory should look like this:

```markdown
.
└── nextjs-blog
├── pages
│ └── index.js
├── styles
│ └── global.css
├── public
├── .gitignore
├── package.json
└── postcss.config.js
```

#### Setup Next.js custom App

now we need to load our css (which contain Tailwind CSS) to our Next.js App. [Based on Next.js docs](https://nextjs.org/learn/basics/assets-metadata-css/global-styles), for better usage we should import our `global.css` in custom app.js.

let's create `_app.js` file inside `/pages` directory and then write this code:

```javascript
// pages/_app.js

// import our global.css file here
import '../styles/global.css';

export default function App({ Component, pageProps }) {
   return <Component {...pageProps} />;
}
```

now, your root directory structure would look like this:

```markdown
.
└── nextjs-blog
├── pages
│ ├── \_app.js
│ └── index.js
├── styles
│ └── global.css
├── public
├── .gitignore
├── package.json
└── postcss.config.js
```

Now, our Tailwind CSS are ready to use 🥳

### Styling with Tailwind

Let's try style our apps! 😼💪 let's try to:

-  coloring our html background with purple color.
-  Set H1 colors to white. and center it.

Add this code to our `/styles/global.css'

```css
/* styles/global.css
...
tailwind declaration
...
*/

body {
   @apply bg-purple-800 mx-auto w-screen;
}

h1 {
   @apply text-white text-6xl text-center mt-64;
}
```

And if you do correctly, you [app](http://localhost:3000) would look like this

![Background changed to purple](https://i.imgur.com/kH2DGCG.png)

> **_If your index page don't change_**, try to restart the server.

### That's all, Happy styling! 🥳

Coming up next:

-  [ ] Custom theme Tailwind CSS with CSS custom properties
-  [ ] Optimizing Tailwind CSS size by purgin

### Further reading

[Next.js custom app](https://nextjs.org/docs/advanced-features/custom-app)
[Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app)
[Tailwind documentation](https://tailwindcss.com/docs)
[Get up and running with Tailwind CSS and Next.js](https://dev.to/notrab/get-up-and-running-with-tailwind-css-and-next-js-3a73)
[curated portfolio site](https://www.notion.so/Portfolios-ed4a61b228f24dd9890b2a6d5fd68b1e).
