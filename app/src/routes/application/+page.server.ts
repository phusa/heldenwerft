import type { Actions } from './$types';
import { Client } from '$lib/client';
 
export const actions = {
  default: async (event) => {
    // TODO log the user in
    console.log(event.request.formData());

    let gql = `mutation {
      createApplication (data: { Reason: "ssss"}) {
        data {
          attributes {
            Reason
          }
        }
      }
    }`;
    //Client(gql);
  }
} satisfies Actions;