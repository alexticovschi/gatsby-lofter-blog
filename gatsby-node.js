const path = require('path');

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  const ArticleContent = path.resolve('src/templates/ArticleContent.jsx');

  return graphql(`
    {
        allArticle {
          edges {
            node {
              id
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
        component: ArticleContent,
        context: { articleId: article.node.id }
      })
    })
  })
}