import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./article.scss"

const Article = ({ title, name, summary, imgUrl, articleId }) => {
  console.log(imgUrl)
  return (
    <section className="article-sum">
      <Img fluid={imgUrl} className="article-sum__img" />

      <div className="article-sum__summary">
        <h2 className="article-sum__title">
          {title} - <small>{name}</small>
        </h2>
        <p>{summary}</p>
        <Link to={`/article/${articleId}`} className="article-sum__link-btn">Read More</Link>
      </div>
    </section>
  )
}

export default Article
