import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import routes from "./routes";
import Header from "./containers/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="c-app c-default-layout">
                <div className="c-wrapper">
                    <div className="layout-display-center">
                        <Header/>
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
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
