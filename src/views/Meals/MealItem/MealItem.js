import React, {useState} from "react";

import "../AvailableMeals.scss";
import AddToCartModal from "./AddToCartModal";

const MealItem = ({manuItem}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <AddToCartModal visible={modalVisible} manuItem={manuItem}/>
            <div className={"meal-card"}>
                <div className={"child left-div"}>
                    <h3>{manuItem.name}</h3>
                    <span className={"price"}>CA$ {manuItem.price}</span>
                    <span className={"price"}>{manuItem.description}</span>
                </div>
                <div className={"child right-div"}><img width={"110px"} height={"110px"}
                                                        src={manuItem.image_url || "https://freeiconshop.com/wp-content/uploads/edd/food-outline.png"}/>
                </div>
                <div className={"add-div"}>
                    <button className={"add-button"} onClick={() => setModalVisible(true)}>add</button>
                </div>
            </div>
        </>
    );
};

export default MealItem;
