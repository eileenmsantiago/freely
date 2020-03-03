import React from 'react'
import Heading from '../Heading/Heading'

const Section = (props) => {
    return(
        <section className="section">
            <div className="section__heading">
                <Heading level="h2">
                    {props.title}
                </Heading>
            </div>
            {props.children}
        </section>
    )
}

export default Section;