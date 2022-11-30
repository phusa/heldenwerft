// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ params}: Parameters<PageServerLoad>[0]) => {
    
  // TODO: dynamic slug
  // TODO move to gql file
  // TODO secure slug against injections
  console.log(params.slug);
const query = `query {
    pages(filters: { Slug: { eq: "${params.slug}" } }) {
      data {
        id
        attributes {
          Title
          Slug
          Body {
            __typename
            ... on ComponentElementHero {
              Title
              Description
            }
            ... on ComponentElementCard {
              Header
              Body
            }
          }
        }
      }
    }
  }`;

  // TODO move url to env, use API token
    const response =await fetch('http://127.0.0.1:1337/graphql',{
 			method: 'POST',
 			headers: {
                'Content-Type':'application/json'
 			},
 			body: JSON.stringify({
 				query
 			})
 		});
 
    const responseJson = await response.json()

    // TODO secure against empty result / decent error page
    return(responseJson.data.pages.data[0].attributes);



};