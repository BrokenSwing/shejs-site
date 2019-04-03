import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "../css/footer.css"

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
                {data.site.siteMetadata.author} © {new Date().getFullYear()} 
                <div
                    style={{
                        float: `right`,
                    }}
                >
                    Powered by <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </footer>
        </>
    )}
    />
)

export default Footer