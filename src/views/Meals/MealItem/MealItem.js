import React from "react";

import "../AvailableMeals.scss";

const MealItem = (props) => {

    return (
        <div className={"meal-card"}>
            <div className={"child left-div"}>
                <h3>World Famous Fries [240.0 Cals]</h3>
                <span className={"price"}>CA$ 3.09</span>
            </div>
            <div className={"child right-div"}><img width={"110px"} height={"110px"}
                                                    src={"https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg"}/>
            </div>
            <div className={"add-div"}>
                <button className={"add-button"}>add</button>
            </div>
        </div>
    );
};

export default MealItem;
