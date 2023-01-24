import type { PageServerLoad } from './$types';
import { Client } from '$lib/client';

export const load: PageServerLoad = async ({ params }) => {
  return(Client(
    `query {
      projects {
        data {
          attributes {
            Slug
            Name
            Summary
            Teaser {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
  }`
  ));
};