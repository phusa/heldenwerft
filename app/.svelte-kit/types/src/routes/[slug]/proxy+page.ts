// @ts-nocheck
import type { PageLoad } from './$types';
import { env } from '../../vars/env';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
	const url = `${env.apiUrl}/pages?filters\[Slug\][$eq]=${encodeURIComponent(
		params.slug
	)}&populate=deep`;
	try {
		const response = await fetch(url);
		if (response.ok || response.status < 400) {
			return await response.json();
		}
		return {
			status: 401,
			error: new Error('Page not found')
		};
	} catch (error) {
		return {
			status: 500,
			error: new Error('Something went wrong')
		};
	}
};
