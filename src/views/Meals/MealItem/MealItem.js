import React, {useState} from "react";

import "../AvailableMeals.scss";
import AddToCartModal from "./AddToCartModal";
import {getFromStorage, getRestIdFromToken} from "../../../utils/common";
import {Tooltip, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const MealItem = ({manuItem}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
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
                    <Tooltip title={manuItem.description}>
                        <Typography noWrap={true} className={"price"}>{manuItem.description}</Typography>
                    </Tooltip>
                </div>
                <div className={"child right-div"}><img alt="menu image" width={"110px"} height={"110px"}
                                                        src={manuItem.image_url || "https://freeiconshop.com/wp-content/uploads/edd/food-outline.png"}/>
                </div>
                {!getRestIdFromToken() ? <div className={"add-div"}>
                    <button disabled={!manuItem.available} className={"add-button"}
                            onClick={() => getFromStorage("accessToken") ? manuItem.available ? setModalVisible(true) : null : navigate('/sign-in')}
                    >{manuItem.available ? "add" : "Out of Stock"}
                    </button>
                </div> : <></>}
            </div>
        </>
    );
};

export default MealItem;
