export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616b32d9cb0711a1140ed372",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pwokuff1",
                  apiId: "71280cd4-a008-4516-906b-1ad15ed61f35",
                },
                {
                  buildHookId: "616b32d95652e57664516898",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9mft4ssg",
                  apiId: "1ca6748d-8c9a-4eb4-8f83-5bd9d94d509c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/armstrongl/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9mft4ssg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
