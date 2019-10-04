import React from "react"
import Layout from "../components/layout"

import "./articleContent.scss"

const ArticleTemplate = props => {
  const { title, author, content } = props.pageContext
  return (
    <Layout>
      <section className="article">
        <h2>
          {title} - <small>{author.name}</small>
        </h2>
        <p>{content}</p>
      </section>
    </Layout>
  )
}

export default ArticleTemplate
