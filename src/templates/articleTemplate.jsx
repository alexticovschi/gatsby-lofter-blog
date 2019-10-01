import React from "react"
import Layout from "../components/layout"

const ArticleTemplate = props => {
  const { title, author } = props.pageContext;
  return (
    <Layout>
      <section>
        <h2>{title} - <small>{author.name}</small></h2>
      </section>
    </Layout>
  )
}

export default ArticleTemplate
