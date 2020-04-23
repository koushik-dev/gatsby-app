import React from "react"
import styles from "./layout.module.css"
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>{data.site.siteMetadata.title}</h1>
        <ul className={styles.list}>
          <li>
            <Link to="/" activeStyle={{color: 'violet'}}>Home</Link>
          </li>
          <li>
            <Link to="/blog" activeStyle={{color: 'violet'}} partiallyActive="true">Blog</Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={{color: 'violet'}}>Contact</Link>
          </li>
        </ul>
      </header>
      <div className={styles.wrapper}>{children}</div>
      <footer className={styles.footer}>
        &copy;Copyrights Reserved.2020 Author{data.site.siteMetadata.author}
      </footer>
    </>
  )
}

export default Layout
