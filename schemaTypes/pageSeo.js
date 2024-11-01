export default {
  name: 'pageSeo',
  type: 'document',
  title: 'Page SEO',
  fields: [
    {
      title: "Page Name",
      name: "pageName",
      type: "string",
      description: "The name of the page this SEO applies to (e.g., Home, About, Contact)."
    },
    {
      title: "SEO Metadata",
      name: "seoMetadata",
      type: "seoMetaFields",
    },
  ],
  preview: {
    select: {
      title: "pageName",
      subtitle: "seoMetadata.metaTitle",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Untitled Page",
        subtitle: subtitle || "No SEO Title Set",
      };
    },
  },
};
