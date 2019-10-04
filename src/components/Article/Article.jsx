import React from "react"

import "./article.scss"

const Article = ({ title, name, summary, imgUrl }) => {
  return (
    <section className="article">
      <img src={imgUrl} />
      <h2>
        {title} - <small>{name}</small>
      </h2>
      <p>{summary}</p>
    </section>
  )
}

export default Article
