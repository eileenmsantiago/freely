import React from 'react';
import Heading from '../Heading/Heading';
import SpendingCard from '../SpendingCard/SpendingCard';

const SpendingSection = (props) => {
    return (
        <> 
        <Heading level="h3">{props.title}</Heading>
        {
            props.spendings.map(spendingItem => {
                return (
                    <SpendingCard iconCategory={spendingItem.iconCategory} title={spendingItem.title} category={spendingItem.category} date={spendingItem.date} value={spendingItem.value}/>
                )
            })
        }
        </>
    )
}

export default SpendingSection;