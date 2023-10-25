import React from 'react'
import InputBox from "../../../reusable/InputBox";
import Overview from "./Overview";
import {Col, Row} from "antd";

const Forms = (props) => {
    const {
        tab,
        loading,
        errorMsg,
        error,
        currentTab,
        onChangeState,
        organizationData,
    } = props;

    const handleChange = (e) => {
        let {name, value} = e.target ? e.target : e;
        onChangeState(prevState => ({
            ...prevState,
            [name]: value
        }));
        // onChangeState(state);
    };


    return (
        <Row className="organization">
            <Col xs={24}>
                {currentTab !== 1 && <InputBox
                    loading={loading}
                    title={tab[currentTab].label}
                >
                    {currentTab === 0 &&
                        <Overview errorMsg={errorMsg} error={error === currentTab}
                                  organizationData={organizationData}
                                  onChange={handleChange}/>}
                </InputBox>}
            </Col>
        </Row>
    );
};
export default Forms;