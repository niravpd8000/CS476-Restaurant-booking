const envType = process.env.REACT_APP_ENV || "development";

const types = {
    development: {
        URL: "http://localhost:8080/api/",
    },
    staging: {
        BASE_URL: "https://stage.test.com/",
    },
    production: {
        BASE_URL: "https://prod.test.com/",
    }
};

export const config = types[envType];
