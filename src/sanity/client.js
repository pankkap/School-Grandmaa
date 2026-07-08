import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const client = projectId
  ? createClient({
      projectId: projectId,
      dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
      useCdn: false, // disable cache to fetch fresh portal edits instantly
      token: import.meta.env.VITE_SANITY_WRITE_TOKEN, // include write token for admin portal upload operations
      apiVersion: '2026-07-07',
    })
  : {
      fetch: async (query) => {
        console.warn('Sanity client not configured. Query skipped: ', query);
        return [];
      }
    };
