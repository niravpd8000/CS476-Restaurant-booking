import React, {useEffect, useState} from 'react'
import InputBox from "../../reusable/InputBox";
import Overview from "./Components/Overview";
import LocationAndContact from "./Components/LocationAndContact";
import Warehouses from "./Components/TableDetails";

const Organizations = (props) => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <>
            <div className="organization">
                <InputBox
                    loading={false}
                    title={"Edit manu"}
                >
                    {currentTab === 0 &&
                        <Overview errorMsg={""} error={false} onChange={() => {
                        }}/>}
                    {currentTab === 1 &&
                        <LocationAndContact errorMsg={""} error={false} onChange={() => {
                        }}/>}
                    {currentTab === 2 &&
                        <Warehouses errorMsg={""} error={false} onChange={() => {
                        }}/>}
                </InputBox>
            </div>
        </>
    )
};
export default Organizations;
