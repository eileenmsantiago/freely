import React, {Component} from 'react';
import Card from '../../ui/Card/Card';
import Heading from '../../ui/Heading/Heading';
import Nav from '../../ui/Nav/Nav';
import Text from '../../ui/Text/Text';
import Section from '../../ui/Section/Section';

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

const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="side-nav">
                    <div className="side-nav__logo">
                        <img src="/assets/Logo.svg" alt="Freely logo" />
                    </div>
                    <SummaryCard title="Budget" subTitle="March 2020" value="$550"/>
                    <SummaryCard title="Total Monthly Spent" subTitle="Spent so far" value="$440.74"/>
        
                </div>
                <div className="main-content">
                    <div className="nav-folder">        
                        <Nav></Nav>
                    </div>
                    <div className="main-folder">   
                        <div className="row">
                            <div className="col-md-6">
                                <Section title="Overview">
                                    <div className="row">
                                        <div className="col-md-6 overview__info-container">
                                            <Heading level="h3">Budget</Heading>
                                            <Text size="lg" weight="bold" color="grey">$550</Text>
                                        </div>
                                        <div className="col-md-6 overview__info-container">
                                            <Heading level="h3">Total Spent</Heading>
                                            <Text size="lg" weight="bold" color="grey">$440.74</Text>
                                        </div>
                                    </div>
                                </Section>
                                
                                <Section title="Spendings"></Section>
                            </div>
                            <div className="col-md-6">
                                <Section title="Categories"></Section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;