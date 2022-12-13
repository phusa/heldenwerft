import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load: PageServerLoad = async ({ params}) => {

  // TODO secure slug against injections
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
              Strap
              Title
              Subtitle
              Text
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentLayoutCardGrid {
              Style
              Card {
                Type
                Header
                Body
              }
            }
          }
        }
      }
    }
  }`;

    const response =await fetch(env.PUBLIC_GQL_URL,{
 			method: 'POST',
 			headers: {
                'Content-Type':'application/json'
 			},
 			body: JSON.stringify({
 				query
 			})
 		});
 
    const responseJson = await response.json();
    
    // TODO secure against empty result / decent error page
    return(responseJson.data.pages.data[0].attributes);



};