import React from 'react'
import "./RestaurantCard.scss";
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const RestaurantCard = props => {
    return (
        <Card
            onClick={props.onClick}
            style={{ width: "100%" }}
            className={"card-shadow"}
            cover={
                <img
                    alt="example"
                    src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            }
        >
            <Meta
                title="Restaurant Name"
                description="Restaurant description"
            />
        </Card>
    )
};

export default RestaurantCard
