import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import routes from "./routes";
import Header from "./containers/Header/Header";
import Unauthorised403 from "./reusable/Unauthorised403";
import Loading from "./reusable/Loading";

function App() {
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
                                routes.map((route, idx) => {
                                    return route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            element={route.component}
                                        />
                                    )
                                })
                            }
                            <Route path="*" element={<Unauthorised403 />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
