import type { PageServerLoad } from './$types';
import { Client } from '$lib/client';

export const load: PageServerLoad = async ({ params }) => {
  return(Client(
    `query {
      pages(filters: { Slug: { eq: "home" } }) {
        data {
          id
          attributes {
            Title
            Slug
          }
        }
      }
    }`
  ));
};