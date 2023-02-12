import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

const Item = (props) => {
    return (<div>
        {props.itemName}
    </div>)
}

const createLetterKey = (item) => {
    return(<Item 
        key={item.n0}
        itemName={item.itemName}
    />)
}

const PlannerCell = (props) => {
    const [foodItems, setFoodItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/getFoodItems/0`);
            setFoodItems(response.data);
        }
        fetchData();
    }, []);

    console.log(foodItems)

    return (
        <div>
            <div>{foodItems.mealTime}</div>
            {foodItems.map(createLetterKey)}
        </div>)
}

export default PlannerCell;