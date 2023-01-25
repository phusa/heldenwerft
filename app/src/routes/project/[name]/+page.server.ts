import type { PageServerLoad } from './$types';
import { Client } from '$lib/client';

export const load: PageServerLoad = async ({ params }) => {

  let project = Client(
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
                  formats
                }
              }
            }
            Testimonials {
              Name
              Testimonial
              Avatar {
                data {
                  attributes {
                    url
                    formats
                  }
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