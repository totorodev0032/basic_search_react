import React from 'react';
import './card.styles.css';


export const Card = (props) => {
    return(
        <div className = "card-container">
        <img className = "monsterimg" alt = "monster" src = {`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h1 className = "monster_name"> {props.monster.name}</h1>
        </div>
    )
}