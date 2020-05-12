import { request } from './datocms';

const CONTENTS_LIMIT_QUERY = `query CONTENT_LIST_QUERY($limit: IntType) {
allContents(first: $limit, orderBy: _createdAt_DESC) {
 slug
 title
 createdAt
 _publishedAt
 author
 description
}
} 
`;

const ALL_SLUGS_QUERY = `query SLUGS_QUERY {
  allContents {
    slug
  }
}
`;

const CONTENT_BY_SLUG_QUERY = `query CONTENT_BY_SLUG_QUERY($slug: String) {
  content(filter: {slug: {eq: $slug}}) {
    slug
    title
    _publishedAt
    createdAt
    author
    content(markdown: false)
    description
    cover {
      responsiveImage {
         alt
         srcSet
         width
         title
         aspectRatio
         sizes
         src
      }
    }
  }
}
`;

export async function getAllContentsWithLimit(limit = 3) {
   const dataFetch = await request({
      query: CONTENTS_LIMIT_QUERY,
      variables: { limit: limit },
   });

   const { allContents } = dataFetch;
   return allContents;
}

/**
 * getContentPaths
 * get all available path (or slug) to route Posts[slug]
 */
export async function getContentPaths() {
   const dataFetch = await request({
      query: ALL_SLUGS_QUERY,
   });

   const { allContents } = dataFetch;

   const paths = allContents.map((content) => {
      return {
         params: {
            slug: content.slug,
         },
      };
   });

   return paths;
}

/**
 * getContentBySlug
 * get content from datocms by its slug as identifier
 */
export async function getContentBySlug(slug = '', preview) {
   const dataFetch = await request({
      query: CONTENT_BY_SLUG_QUERY,
      variables: { slug: slug },
      preview,
   });

   const { content } = dataFetch;

   return content;
}

export async function getContentPreviewBySlug(slug = '') {
   const dataFetch = await request({
      query: CONTENT_BY_SLUG_QUERY,
      variables: { slug: slug },
      preview: true,
   });

   const { content } = dataFetch;

   return content;
}
