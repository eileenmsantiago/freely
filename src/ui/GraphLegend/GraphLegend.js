import React from 'react';
import Text from '../../ui/Text/Text';

const GraphLegend = (props) => {

    console.log(props.items);
    return (
        <div className="row">
            {
                props.items.map(legendItem => {
                    return (
                        <div className="graph-legend__item col-md-6">
                            <div className={`graph-legend__bullet graph-legend__bullet--color-${legendItem.color}`}>
                            </div>
                            <div className="graph-legend__text">
                                <Text size="sm" weight="regular">{legendItem.category}</Text>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default GraphLegend;