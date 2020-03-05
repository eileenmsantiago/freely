import React from 'react'
import Heading from '../Heading/Heading'
import Text from '../Text/Text'

const Section = (props) => {
    return(
        <section className="section">
            <div className="row">
                <div className="col-md-6 section__heading">
                    <Heading level="h2">
                        {props.title}
                    </Heading>
                </div>
                <div className="col-md-6 section__right">
                    <Text size="md" weight="light" color="grey">
                        {props.content}
                    </Text>
                </div>
            </div>
            {props.children}
        </section>
    )
}

export default Section;