import React, {useState} from 'react'
import {deleteFromArray, uniqueArray} from "../../../utils/common";
import IdLabel from "../../../reusable/IdLabel";
import OrgModal from "./OrgModal";
import LightBlueButton from "../../../reusable/LightBlueButton";
import Cross from "../../../assets/icons/Cross.svg";

const TableDetails = ({onChange, categories}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const handleChange = (value) => {
        onChange({name: "categories", value: uniqueArray([...categories, value])});
        setModalVisible(false)
    };

    const onClickDelete = (item) => {
        let array = [...categories];
        array = deleteFromArray(array, item);
        onChange({name: "categories", value: array});

    };

    return (
        <div>
            <OrgModal onCancel={() => setModalVisible(false)} visible={modalVisible} onSubmit={handleChange}/>
            <div className="text-black fs-15 mb-10">Add Food Categories:</div>
            {categories.map((item, key) => {
                return (<IdLabel key={key} label={item} label2={<img alt="Cross" onClick={() => onClickDelete(item)}
                                                                     className="ml-1 cursor-pointer" src={Cross}/>}/>)
            })}
            <LightBlueButton onClick={() => setModalVisible(true)}>Add New category</LightBlueButton>


        </div>
    )
};

export default TableDetails
