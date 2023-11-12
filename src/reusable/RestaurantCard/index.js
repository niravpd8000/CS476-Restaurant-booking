import React from 'react'
import "./RestaurantCard.scss";
import {Card} from 'antd';
import {Tooltip, Typography} from "@mui/material";

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
                title={data?.name}
                description={<Tooltip title={data?.description}><Typography variant={"subtitle1"} noWrap={true}>{data?.description}</Typography></Tooltip>}
            />
        </Card>
    )
};

export default RestaurantCard
