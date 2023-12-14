import type { PageServerLoad } from './$types';
import { Client } from '$lib/client';

export const load: PageServerLoad = async ({ params }) => {

  let page = Client(
    `query {
      pages (filters: { Slug: { eq: "${params.slug}" } }) {
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
            }
          }
        }
      }
    }`);

    return(page);
};