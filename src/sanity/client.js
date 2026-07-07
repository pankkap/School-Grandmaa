import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const client = projectId
  ? createClient({
      projectId: projectId,
      dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: '2026-07-07', // matching current local time context
    })
  : {
      fetch: async (query) => {
        console.warn('Sanity client not configured. Query skipped: ', query);
        return [];
      }
    };
