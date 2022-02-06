export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62003655bc4e7f4b8d8d7506',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ug5vnjnm',
                  apiId: '08a231b7-821e-424b-b4ed-13bdbef8ed15'
                },
                {
                  buildHookId: '62003656f7fd3ac874ab0ebb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-sv34otek',
                  apiId: '84a23db2-1de4-417c-95c1-f000b4c1a6ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hinzed1127/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-sv34otek.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
