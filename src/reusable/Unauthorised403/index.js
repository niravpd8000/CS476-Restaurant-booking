import React from 'react'
import Unauthorised from "../../assets/images/Unauthorised.png"
import {IdLabel} from "../index";

const Unauthorised403 = (props) => {
    return (
        <div className="mt-100" align="center">
            <img onClick={() => props.history.push("/dashboard")} className="img-fluid" src={Unauthorised} alt={"404"}/>
            <div><IdLabel onClick={() => props.history.goBack()} className="pl-2" link={true}
                          value={<b>Go Back</b>}/></div>
        </div>
    )
};

export default Unauthorised403

