import type { PageServerLoad } from './$types';
import { Client } from '$lib/client';

export const load: PageServerLoad = async ({ params }) => {

  let project = Client(
    `query {
      projects (filters: { Slug: { eq: "${params.slug}" } }) {
        data {
          id
          attributes {
            Name
            Slug
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
                  formats
                }
              }
            }
            Media {
              data {
                id
                attributes {
                  url
                  formats
                }
              }
            }
            Organisations {
              data {
                attributes {
                  Name
                  Description
                  Logo {
                    data {
                      attributes {
                        url
                        formats
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }`
  );

  return(project);
};