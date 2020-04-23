import React from 'react'
import Layout from "../components/layout";
import { graphql } from 'gatsby'

const blog = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
    return (
      <Layout>
        <div>
            <h1>{frontmatter.title}</h1>
            <span>{frontmatter.author}</span>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        </Layout>
    )
}

export const page = graphql`
query($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path}}) {
          frontmatter {
            title
            date
            path
            author
          }
          html
        }
  }`

export default blog