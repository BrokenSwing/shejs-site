import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { strictEqual } from "assert";

const Footer = () => (
    <StaticQuery
        query={graphql`
            query SiteAuthorQuery {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
    `}
    render={data => (
        <>
            <footer>
                {data.site.siteMetadata.author} © {new Date().getFullYear()} Powered by <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </>
    )}
    />
)

export default Footer