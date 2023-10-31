import React from "react";

import "../AvailableMeals.scss";

const MealItem = ({manuItem}) => {

    return (
        <div className={"meal-card"}>
            <div className={"child left-div"}>
                <h3>{manuItem.name}</h3>
                <span className={"price"}>CA$ {manuItem.price}</span>
                <span className={"price"}>{manuItem.description}</span>
            </div>
            <div className={"child right-div"}><img width={"110px"} height={"110px"}
                                                    src={manuItem.image_url}/>
            </div>
            <div className={"add-div"}>
                <button className={"add-button"}>add</button>
            </div>
        </div>
    );
};

export default MealItem;
