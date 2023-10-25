import routes from "../routes";
import {message} from "antd";
import axios from "axios";
import {config} from "./config";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import confirm from "antd/es/modal/confirm";
import React from "react";
import moment from "moment";

export const setIntoStorage = info => {
    Object.keys(info).forEach(key => {
        localStorage.setItem(key, info[key]);
    });
};

export const getFromStorage = key => {
    return localStorage.getItem(key);
};

export const removeFromStorage = key => {
    return localStorage.removeItem(key);
};

export const clearStorage = () => {
    const email = localStorage.getItem("email");
    localStorage.clear();
    localStorage.setItem("email", email);
};

export const getAuthToken = () => localStorage.getItem("AuthToken");

export const getFromSession = key => {
    return sessionStorage.getItem(key);
};

export const setInToSession = (key, value) => {
    sessionStorage.setItem(key, value);
};

export const clearSession = () => {
    sessionStorage.clear();
};

export const removeFromSession = key => {
    sessionStorage.removeItem(key);
};

export const getPathByName = routeId => {
    const route = routes.find(item => item.id === routeId) || {};
    return route.path || ""
};

export const uniqueArray = (array) => {
    array = array.filter((temp2, index, self) => {
        return self.indexOf(temp2) === index;
    });
    return array
};

export const deleteFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
};

export const errorMessage = title => {
    message.error({
        content: title || "error while processing your request. ",
        style: {
            position: "absolute",
            right: "0px",
            top: "150px"
        },
    });
};

export const successMessage = data => {
    message.success({
        content: data || "success",
        style: {
            position: "absolute",
            right: "0px",
            top: "150px",
        }
    });
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export function downloadFile(api, data, name) {
    axios.post(config.BASE_URL + api, data,
        {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/json',
                'Content-Disposition': "attachment; filename=template.xlsx"
            }
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name);
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));
}

export const confirmDelete = ({title, content, onConfirm, onCancel}) => {
    confirm({
        title: title || 'Do you Want to delete these items?',
        icon: <ExclamationCircleOutlined/>,
        content: content || 'Some descriptions',
        onOk() {
            onConfirm();
        },
        onCancel() {
            onCancel();
            console.log('Cancel');
        },
    });
};

export const addSecondTODate = (second) => {
    return moment().add(second, "second")._d
};

export const validateLink = (link) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(link);
}

export const organisationId = () => {
    return getFromStorage('organisation_id')
}
export const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const downloadFile2 = (dataUrl, filename) => {
    const url = window.URL.createObjectURL(dataUrl);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = filename;
    document.body.appendChild(a);
    a.click();
};

export const firstLetterLowerCase = (text) => text[0].toLowerCase() + text.substring(1);
export const errorFieldToObject = (err) => {
    let error = {};
    if (!err[0]?.field)
        return err;
    err.forEach(item => {
        error = {...error, [firstLetterLowerCase(item?.field)]: item?.message}
    });
    return error;
}

export const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
