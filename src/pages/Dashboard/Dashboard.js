import React, {Component} from 'react';
import Heading from '../../ui/Heading/Heading';
import Nav from '../../ui/Nav/Nav';
import Text from '../../ui/Text/Text';
import Section from '../../ui/Section/Section';
import SpendingCard from '../../ui/SpendingCard/SpendingCard';
import Button from '../../ui/Button/Button';
import GraphLegend from '../../ui/GraphLegend/GraphLegend';
import SummaryCard from '../../ui/SummaryCard/SummaryCard';
import SpendingSection from '../../ui/SpendingSection/SpendingSection';

const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="side-nav">
                    <div className="side-nav__contents">
                        <div className="side-nav__logo">
                            <a href="index.html"><img src="/assets/Logo.svg" alt="Freely logo"/></a>
                        </div>
                        <div className="side-nav__cards">
                            <SummaryCard title="Budget" subTitle="March 2020" value="$550"/>
                            <SummaryCard title="Total Monthly Spent" subTitle="Spent so far" value="$440.74"/>
                        </div>
                        <div className="side-nav__helper">
                            <a href="index.html"><img src="/assets/Image-card.svg" alt="card illustration"/></a>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="top-logo">
                        <div className="top-logo__img">
                            <a href="index.html"><img src="/assets/Logo.svg" alt="Freely logo"/></a>
                        </div>
                    </div>
                    <div className="nav-folder">        
                        <Nav></Nav>
                    </div>
                    <div className="main-folder">   
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="overview__container">
                                    <Section title="Overview" content="March Budget">
                                        <div className="row">
                                            <div className="col-md-6 overview__info-container">
                                                <Heading level="h3">Budget</Heading>
                                                <Text size="lg" weight="medium" color="black">$550</Text>
                                            </div>
                                            <div className="col-md-6 overview__info-container">
                                                <Heading level="h3">Total Spent</Heading>
                                                <Text size="lg" weight="medium" color="black">$440.74</Text>
                                            </div>
                                        </div>
                                    </Section>
                                </div>
                                <div className="spendings__container">
                                    <Section title="Spendings" content={Button}>
                                        <SpendingSection title="Yesterday" spendings={
                                            [
                                                {
                                                    iconCategory:"restaurant",
                                                    title:"Chatime",
                                                    category:"Dining Out",
                                                    date:"Mar 7, 2020",
                                                    value:"$5.75"
                                                },
                                                {
                                                    iconCategory:"gym",
                                                    title:"Barry’s Bootcamp",
                                                    category:"Gym & Fitness",
                                                    date:"Mar 7, 2020",
                                                    value:"$30"
                                                }
                                            ]
                                        }/>
                                        <SpendingSection title="Last Week" spendings={
                                            [
                                                {
                                                    iconCategory:"subscriptions",
                                                    title:"Spotify",
                                                    category:"Subscriptions",
                                                    date:"Mar 1, 2020",
                                                    value:"$4.99"
                                                },
                                                {
                                                    iconCategory:"home",
                                                    title:"Rent",
                                                    category:"Home",
                                                    date:"Mar 1, 2020",
                                                    value:"$400"
                                                }
                                            ]
                                        }/>
                                        <div className="options">
                                            <Text size="sm" weight="medium" color="black"><a href="index.html" className="options__text-link">View more</a></Text>
                                        </div>
                                    </Section>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <Section title="Categories">
                                    <div className="categories">
                                        <div className="categories__donut">
                                            <img src="/assets/info-donut.svg" alt="infographic of a donut graph"/>
                                        </div>
                                        <div className="categories__legend">
                                            <GraphLegend items={
                                                [
                                                    {
                                                        color: "yellow",
                                                        category: "Grocery"
                                                    },
                                                    {
                                                        color: "green",
                                                        category: "Home"
                                                    },
                                                    {
                                                        color: "purple",
                                                        category: "Transportation"
                                                    },
                                                    {
                                                        color: "red",
                                                        category: "Dining Out"
                                                    },
                                                    {
                                                        color: "blue",
                                                        category: "Fitness"
                                                    },
                                                    {
                                                        color: "pink",
                                                        category: "Subscriptions"
                                                    }

                                                ]
                                            }/>
                                        </div>
                                    </div>
                                </Section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;