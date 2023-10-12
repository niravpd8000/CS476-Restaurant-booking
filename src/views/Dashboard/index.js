import React from 'react'
import RestaurantCard from "../../reusable/RestaurantCard";
import {Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();

    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
        <div className="dashboard-wrapper mb-4">
            <div className="card-container mb-3">
                <Row>
                    {
                        x.map(i =>
                            <Col key={i} lg={4} md={6} sm={6} xs={12}>
                                <RestaurantCard onClick={()=>history.push("/meals")}/>
                            </Col>
                        )
                    }
            </Row>
        </div>
        </div>
</>
)
};

export default Dashboard
