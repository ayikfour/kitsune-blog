import { GraphQLClient } from 'graphql-request';

const NEXT_DATOCMS_API_TOKEN = '21466bedc0c117dbb34f32fe980ecd';

export function request({ query, variables }) {
   const endpoint = 'https://graphql.datocms.com/';

   const client = new GraphQLClient(endpoint, {
      headers: {
         authorization: `Bearer ${NEXT_DATOCMS_API_TOKEN}`,
      },
   });

   return client.request(query, variables);
}
