import React from "react";
import Layout from "../components/layout"

const ArticleTemplate = (props) => {
  return (
    <Layout>
      <div>{props.pageContext.title}</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus accusantium eveniet. Sunt, doloremque iure. Laboriosam repellat ratione quidem, dolores unde id, necessitatibus mollitia earum tempore ex ab, architecto deserunt eos magni sit reprehenderit excepturi dolorem explicabo voluptates incidunt provident minima doloremque cum? Ducimus dolor blanditiis dolore. Odit voluptate pariatur, eos corrupti hic suscipit at.</p>
    </Layout>
  )
}

export default ArticleTemplate;