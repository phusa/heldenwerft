import { env } from '$env/dynamic/public';

export const Client = async (query: String) => {

    const response = await fetch(
        env.PUBLIC_GQL_URL,
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