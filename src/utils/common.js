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
            top: "60px",
        }
    });
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validateMobileNumber = (mobileNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobileNumber).replace(/[-\s()]/g, ''));
};

export const isPasswordComplex = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar
    );
}
export const validateCanadianPostalCode = (postalCode) => {
    const re = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

    return re.test(postalCode);
};


function isValidString(str) {
    if (str.trim() === '') {
        return false;
    }

    if (/^\d/.test(str)) {
        return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(str)) {
        return false;
    }

    return true;
}

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

export const confirmDelete = (title, onConfirm, onCancel) => {
    confirm({
        title: title || 'Do you Want to delete these items?',
        icon: <ExclamationCircleOutlined/>,
        // content: content || 'Some descriptions',
        onOk() {
            onConfirm();
        },
        onCancel() {
            if (onCancel)
                onCancel();
            console.log('Cancel');
        },
    });
};

export const addSecondTODate = (second) => {
    return moment().add(second, "second")._d
};

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

export const getRestIdFromToken = () => {
    var token = getFromStorage("accessToken");
    return token ? parseJwt(token)?.restaurantId : null;
};

export const isRestaurantOwner = () => {
    var token = getFromStorage("accessToken");
    return !!(token && parseJwt(token)?.restaurantId);
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

export const cartItemValueExtract = (data) => {
    if (typeof data !== 'object' || data === null) {
        console.error('Data is not an object.');
        return '';
    }

    const values = [];

    for (const key in data) {
        const item = data[key];

        if (item.type === 'text') {
            values.push(item.value);
        } else if (item.type === 'checkbox-group' || item.type === 'radio-group') {
            const selectedValues = item.values.filter(val => val.selected);
            const selectedValueString = selectedValues.map(val => val.value).join(', ');
            values.push(selectedValueString);
        }
    }

    return values.filter(value => value).join(', ');
};


export const createDisabledTime = (timeRange, isTable) => {
    const format = 'h:mma';

    const startMoment = moment(timeRange.startTime, format);
    const endMoment = moment(timeRange.endTime, format);
    if (isTable)
        endMoment.subtract(30, 'minutes');
    else
        endMoment.subtract(15, 'minutes');
    const duration = moment.duration(timeRange?.estimate_time, 'minutes')
    return {
        disabledHours: () => {
            const hours = Array.from({length: 24}, (_, i) => i);
            const currentHour = duration.hours() ? moment().add(duration.hours() || 0, 'hours').hours() : moment().hours();
            if (currentHour >= endMoment.hours()) {
                return hours;
            }

            return hours.filter((hour) => hour < currentHour || hour < startMoment.hours() || hour > endMoment.hours());
        },

        disabledMinutes: (selectedHour) => {
            const currentMoment = moment().add(timeRange?.estimate_time || 0, 'minutes');
            const currentHour = currentMoment.hours();
            const endHour = endMoment.hours();
            const endMinutes = endMoment.minutes();
            const selectedHourIsCurrentHour = selectedHour === currentHour;

            if (selectedHourIsCurrentHour) {
                const currentMinute = currentMoment.minutes();
                const startMinute = startMoment.minutes();

                return Array.from({length: 60}, (_, i) => i).filter((minute) => minute < Math.max(currentMinute, startMinute));
            } else if (selectedHour < startMoment.hours() || selectedHour > endMoment.hours() || selectedHour < currentHour) {
                return Array.from({length: 60}, (_, i) => i);
            } else if (selectedHour === endHour) {
                console.log("coming here", endMinutes)
                return Array.from({length: 60}, (_, i) => i).filter((minute) => minute > endMinutes);
            } else {
                return [];
            }
        },
    };
};
