import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import SelectMenu from "../../../reusable/SelectMenu";
import CustomModal from "../../../reusable/CustomModal";
import "../../../reusable/CustomModal/Modal.scss";

const FilterModal = (props) => {
    const {
        visible,
        onCancel,
        crewList,
        projectOptions,
        vendorList,
        fetchFilterData,
        getCrews,
        filter,
        setFilter
    } = props;
    const [filterLocal, setFilterLocal] = useState({});
    useEffect(() => {
        setFilterLocal({...filter});
    }, [filter]);
    return (
        <CustomModal title="Filter" visible={visible} onClose={onCancel} onClickSubmit={() => {
            // fetchFilterData({page: 1, pageSize: 10, ...filter});
            setFilter({...filter, ...filterLocal});

            onCancel()
        }} className="filter-modal">
            <Row>
                <Col xs={6}>
                    <SelectMenu value={filterLocal?.projectId}
                                label="Project"
                                placeholder="Select Project"
                                onChange={(e) => {
                                    setFilterLocal(prevState => ({...prevState, projectId: parseInt(e.target.value)}))
                                }}
                                options={projectOptions}/>
                </Col>
                {global.isVendorDefault && <Col xs={6}>
                    <SelectMenu label="Vendor" placeholder="Select Vendor" options={vendorList || []}
                                value={filterLocal?.vendorId}
                                onChange={(e) => {
                                    getCrews(e.target.value);
                                    setFilterLocal(prevState => ({
                                        ...prevState,
                                        vendorId: parseInt(e.target.value),
                                        crewId: null
                                    }))
                                }}/>
                </Col>}
                <Col xs={6}>
                    <SelectMenu label="Crew" placeholder="Select Crew" options={crewList || []}
                                value={filterLocal?.crewId}
                                onChange={(e) => {
                                    setFilterLocal(prevState => ({...prevState, crewId: parseInt(e.target.value)}))
                                }}/>
                </Col>
            </Row>
        </CustomModal>
    )
};

export default FilterModal;
