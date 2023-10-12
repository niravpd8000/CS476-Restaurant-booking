import React from 'react'
import NotFound from "../../assets/images/NotFound404.png"

const PageNotFound = (props) => {
    return (
        <div className="mt-100" align="center">
            <img onClick={() => props.history.push("/dashboard")} className="img-fluid" src={NotFound} alt={"404"}/>
        </div>
    )
};

export default PageNotFound

