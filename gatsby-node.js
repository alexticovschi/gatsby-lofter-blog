const path = require('path');

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  const articleTemplate = path.resolve('src/templates/ArticleContent.jsx');

  return graphql(`
    {
        allArticle {
          edges {
            node {
              summary
              title
              content
              localImage {
                publicURL
              }
              id
              author {
                name
              }
            }
          }
        }
      }
    `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allArticle.edges.forEach(article => {
      createPage({
        path: `/article/${article.node.id}`,
        component: articleTemplate,
        context: article.node
      })
    })
  })
}