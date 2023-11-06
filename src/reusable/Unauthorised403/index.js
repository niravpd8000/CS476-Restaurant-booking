import React from 'react'
import Unauthorised from "../../assets/images/NotFound404.png"
import {useNavigate} from "react-router-dom";
import IdLabel from "../IdLabel";

const Unauthorised403 = (props) => {
    const navigate=useNavigate();
  return (
    <div className="mt-100" align="center">
      <img onClick={() => navigate("/dashboard")} className="img-fluid" src={Unauthorised} alt={"404"} width={700}/>
      <div><IdLabel onClick={() => navigate(-1)} className="pl-2" link={true}
                    value={<b>Go Back</b>}/></div>
    </div>
  )
};

export default Unauthorised403

