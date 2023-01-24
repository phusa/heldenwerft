import type { PageServerLoad } from './$types';
import { Client } from '$lib/client';

export const load: PageServerLoad = async ({ params }) => {
  return(Client(
    `query {
      projects (filters: { Name: { eq: "${params.name}" } }) {
        data {
          attributes {
            Name
            Summary
            Semester {
              data {
                attributes {
                  Semester
                }
              }
            }
            Students
            Category {
              data {
                attributes {
                  Category
                }
              }
            }
            Description
            Teaser {
              data {
                attributes {
                  url
                }
              }
            }
            Media {
              data {
                attributes {
                  url
                }
              }
            }
            Testimonials {
              Name
            }
            Organisations {
              data {
                attributes {
                  Name
                  Description
                }
              }
            }
          }
        }
      }
  }`
  ));
};