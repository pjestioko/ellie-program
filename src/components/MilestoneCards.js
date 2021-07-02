import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../firebase';
import './MilestoneCards.css';

function MilestoneCards() {
    const [milestone, setMilestone] = useState([]);

    useEffect(() => {

        const unsubscribe = database
            .collection("milestone")
            .onSnapshot((snapshot) =>
                setMilestone(snapshot.docs.map((doc) => doc.data()))
            );

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <div className="milestones__section">
                <div className="milestones__wrapper">
                    <div className="tinderCards__cardContainer">
                        <h1 className="milestones__heading">Swipe for my Milestones!</h1>
                        {milestone.map(stone => (
                            <TinderCard
                                className="swipe"
                                key={stone.description}
                                preventSwipe={['up', 'down']}
                            >
                                <div
                                    style={{ backgroundImage: `url(${stone.url})` }}
                                    className="card"
                                >
                                    <h4>{stone.description}</h4>
                                </div>
                            </TinderCard>
                        ))}
                    </div>
                </div>
                <div className="tinderCards__spacer" />
            </div>
        </div>
    )
}

export default MilestoneCards;