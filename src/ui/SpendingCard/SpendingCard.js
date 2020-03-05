import React from 'react'
import Card from '../Card/Card';
import Text from '../Text/Text';



const SpendingCard = (props) => {
    return (
        <Card>
            <div className="card-container">
                <div className="card-container__icon">
                    <img src={`/assets/category-icon-${props.iconCategory}.svg`} alt="icon"/>
                </div>
                <div className="card-container__description">
                    <span>
                        <Text size="md" weight="medium">{props.title}</Text>
                    </span>
                    <br></br>
                    <span>
                        <Text size="sm" weight="light" color="grey">{props.category}</Text>
                    </span>
                </div>
                <div className="card-container__details">
                    <span>
                        <Text size="sm" weight="medium" color="grey">{props.date}</Text>
                    </span>
                    <br></br>
                    <span>
                        <Text size="sm" weight="light" color="grey">{props.value}</Text>
                    </span>
                </div>
            </div>
        </Card>
    )
}
export default SpendingCard;