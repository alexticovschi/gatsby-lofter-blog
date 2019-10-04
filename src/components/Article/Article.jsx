import React from "react"

import "./article.scss"

const Article = ({ title, name, summary }) => {
  return (
    <section className="article">
      <h2>
        {title} - <small>{name}</small>
      </h2>
      <p>{summary}</p>
    </section>
  )
}

export default Article
