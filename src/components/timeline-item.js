import React from "react"

const TimelineItem = ({ node }) => (
    <>
        <div className="cd-timeline__block js-cd-block">
            <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                
            </div>

            <div className="cd-timeline__content js-cd-content">
                <h2>{node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
                <span className="cd-timeline__date">{node.frontmatter.date}</span>
            </div>
        </div>
    </>
)

export default TimelineItem