---
title: 'Figma Workflow'
date: '2020-01-01'
description: 'My personal workflow to manage project in Figma'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

1. **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
2. **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

```js
const CLIENT_URL =
   process.env.NODE_ENV === 'production'
      ? 'https://brianlovin.com'
      : 'http://localhost:3000';

const endpoint = `${CLIENT_URL}/api/graphql`;

const link = new HttpLink({ uri: endpoint });
const cache = new InMemoryCache();

export async function getStaticApolloClient() {
   return new ApolloClient({
      link,
      cache,
   });
}
```
