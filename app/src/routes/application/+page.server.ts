import type { Actions } from './$types';
import { Client } from '$lib/client';

type application = {
  currentStep: number,
  steps: [
    {
      id: number,
      title: string,
      description: string,
      selections: [
        {
          left: {
            type: [string],
							classes: string,
							title: string,
							description: string,
							elements: [
								{
									title: string,
									description: string,
									length: string,
									value: string,
								}
							]
          },
          right: {
            type: [string],
							classes: string,
							title: string,
							description: string,
							elements: [
								{
									title: string,
									description: string,
									length: string,
									value: string,
								}
							]
          }
        }
      ],
    }
  ]
};

export const actions = {
  default: async (event) => {
    // TODO log the user in
    //console.log(event.request.formData());

    console.log("test");

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