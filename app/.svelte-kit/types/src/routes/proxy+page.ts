// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ data }) {
    const res = await fetch('http://localhost:1337/api/projects');
    const data = await res.json();
   
    return { data };
  }