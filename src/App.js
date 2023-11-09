import React, {useEffect, useState} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import routes from "./routes";
import Header from "./containers/Header/Header";
import Unauthorised403 from "./reusable/Unauthorised403";
import Loading from "./reusable/Loading";
import {getRestIdFromToken} from "./utils/common";
import {connect} from "react-redux";

function App({authorisation}) {
    const [auth, setAuth] = useState("PUBLIC");
    useEffect(() => {
        setAuth(getRestIdFromToken() ? "ADMIN" : "PUBLIC")
    }, [authorisation.loginLoaded, authorisation])
    return (
        <BrowserRouter>
            <div className="c-app c-default-layout">
                <div className="c-wrapper">
                    <div className="layout-display-center">
                        <Header/>
                        <Loading/>
                        <div style={{marginTop: "90px"}}></div>
                        <Routes>
                            {
                                routes.filter(route => (auth === "ADMIN" ? route.auth === auth || route.auth === "PUBLIC" : route.auth === "PUBLIC")).map((route, idx) => {
                                    return route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            element={route.component}
                                        />
                                    )
                                })
                            }
                            <Route path="*" element={<Unauthorised403/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = state => {
    return {
        authorisation: state.authorisation,
    };
};

export default connect(mapStateToProps, null)(App);
