import React, {useState} from "react";

import "../AvailableMeals.scss";
import AddToCartModal from "./AddToCartModal";

const MealItem = ({manuItem}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            {manuItem.available && <AddToCartModal
                onCancel={() => setModalVisible(false)}
                visible={modalVisible} manuItem={manuItem}/>
            }
            <div className={"meal-card"}>
                <div className={"child left-div"}>
                    <h3>{manuItem.name}</h3>
                    <span className={"price"}>CA$ {manuItem.price}</span>
                    <span className={"price"}>{manuItem.description}</span>
                </div>
                <div className={"child right-div"}><img alt="menu image" width={"110px"} height={"110px"}
                                                        src={manuItem.image_url || "https://freeiconshop.com/wp-content/uploads/edd/food-outline.png"}/>
                </div>
                <div className={"add-div"}>
                    <button disabled={!manuItem.available} className={"add-button"}
                            onClick={() => manuItem.available ? setModalVisible(true) : null}
                    >{manuItem.available ? "add" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default MealItem;
