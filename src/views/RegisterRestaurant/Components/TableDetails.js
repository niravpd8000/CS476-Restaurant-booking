import React, {useState} from 'react'
import {deleteFromArray, uniqueArray} from "../../../utils/common";
import IdLabel from "../../../reusable/IdLabel";
import OrgModal from "./OrgModal";
import LightBlueButton from "../../../reusable/LightBlueButton";
import Cross from "../../../assets/icons/Cross.svg";

const TableDetails = (props) => {
    const [selectedWH, setSelectedWH] = useState(["Italian", "Mexican"]);
    const [modalVisible, setModalVisible] = useState(false)
    const handleChange = (value) => {
        setSelectedWH(uniqueArray([...selectedWH, value]));
        setModalVisible(false)
    };

    const onClickDelete = (item) => {
        let array = [...selectedWH];
        array = deleteFromArray(array, item);
        setSelectedWH(array);
    };

    return (
        <div>
            <OrgModal onCancel={() => setModalVisible(false)} visible={modalVisible} onSubmit={handleChange}/>
            <div className="text-black fs-15 mb-10">Add Food Categories:</div>
            {selectedWH.map((item, key) => {
                return (<IdLabel key={key} label={item} label2={<img onClick={() => onClickDelete(item)}
                                                                     className="ml-1 cursor-pointer" src={Cross}/>}/>)
            })}
            <LightBlueButton onClick={() => setModalVisible(true)}>Add New category</LightBlueButton>


        </div>
    )
};

export default TableDetails
