const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const template = path.resolve('src/templates/blog-template.js')

    const result = await graphql(`
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
              excerpt
            }
          }
        }
      }
    `)

    result.data.allMarkdownRemark.edges.map(edge => {
        createPage({
            path: edge.node.frontmatter.path,
            component: template
        })
    })
}