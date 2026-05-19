import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'brahams-foundation',
  title: 'Brahams Foundation',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Brahams Foundation')
          .items([
            S.listItem()
              .title('🗓️ Events')
              .child(S.documentTypeList('event').title('Events')),
            S.listItem()
              .title('📸 Gallery')
              .child(S.documentTypeList('galleryAlbum').title('Gallery Albums')),
            S.listItem()
              .title('📰 News')
              .child(S.documentTypeList('newsPost').title('News Posts')),
            S.listItem()
              .title('👥 Team')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem()
              .title('⚙️ Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
