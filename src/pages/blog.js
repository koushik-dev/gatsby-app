import React from 'react'
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const blog = ({ data }) => {
    
    return (
        <Layout>
            <div>
            {data.allMarkdownRemark.edges.map(edge => (
                <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
            ))}
            </div>
        </Layout>
        
    )
}

export default blog

export const result = graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                path
                author
              }
            }
          }
        }
      }
    `