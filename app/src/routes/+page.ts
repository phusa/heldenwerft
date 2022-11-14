export async function load() {
    //const response = await fetch('http://127.0.0.1:1337/api/projects');
    const response = await fetch('http://127.0.0.1:1337/api/pages?filters\[Slug\][$eq]=home&populate=deep');
    const result = await response.json();
    return {
        data: result.data
    }
}
