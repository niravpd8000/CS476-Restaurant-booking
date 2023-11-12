import React, {useState} from "react";

import "../AvailableMeals.scss";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";

const MealItem = ({manuItem}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className={"meal-card-edit"}>
                <div className={"child left-div"}>
                    <h3>{manuItem.name}</h3>
                    <span className={"price"}>CA$ {manuItem.price}</span>
                    <Typography noWrap={true} className={"price"}>{manuItem.description}</Typography>
                </div>
                <div className={"child right-div"}><img width={"110px"} height={"110px"}
                                                        src={manuItem.image_url || "https://freeiconshop.com/wp-content/uploads/edd/food-outline.png"}/>
                </div>
                <div className={"add-div"}>
                    <button className={"add-button"} onClick={() => navigate(`/edit-manu/${manuItem._id}`)}>edit
                    </button>
                </div>
                <div className={"availableTag"}>
                    <span
                        className={manuItem.available ? "available" : "unavailable"}>{manuItem.available ? "Available" : "Unavailable"}</span>
                </div>
            </div>
        </>
    );
};

export default MealItem;
