import { PUBLIC_GQL_URL } from '$env/static/public';

export const Client = async (query: String) => {

    const response = await fetch(
        PUBLIC_GQL_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                query
            })
        }
    );

    const responseJson = await response.json();

    return(responseJson.data);

}