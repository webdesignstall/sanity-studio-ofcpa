import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {table} from '@sanity/table'
import {seoMetaFields} from 'sanity-plugin-seo'

export default defineConfig({
  name: 'default',
  title: 'ofcpa',

  // projectId: 'unsvh2cy',
  projectId: 'unsvh2cy',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), table(), seoMetaFields()],

  schema: {
    types: schemaTypes,
  },
})
