import React from 'react'
import "./RestaurantCard.scss";
import {Card} from 'antd';

const {Meta} = Card;
const RestaurantCard = props => {
    const {data, onClick} = props;
    return (
        <Card
            onClick={props.onClick}
            style={{width: "100%", maxWidth: "350px"}}
            className={"card-shadow"}
            cover={
                <img
                    width={350}
                    height={185}
                    alt="example"
                    src={data?.image_url}
                />
            }
        >
            <Meta
                title={data.name}
                description={data.description}
            />
        </Card>
    )
};

export default RestaurantCard
