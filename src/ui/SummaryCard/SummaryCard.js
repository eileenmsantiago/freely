import React from 'react';
import Card from '../Card/Card';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';


const SummaryCard = (props) => {
    return (
        <Card>
            <Heading level="h3">{props.title}</Heading>
            <Text size="sm" color="grey">{props.subTitle}</Text>
            <div className="card-money">
                <Text size="lg" weight="bold" color="green">{props.value}</Text>
            </div>
        </Card>
    )
}
export default SummaryCard;