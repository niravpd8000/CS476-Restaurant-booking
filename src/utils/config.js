const envType = process.env.REACT_APP_ENV || "development";

const types = {
    development: {
        ACCOUNT_URL: "http://localhost:3001/api/v1/",
    },
    staging: {
        BASE_URL: "https://stage.test.com/",
    },
    production: {
        BASE_URL: "https://prod.test.com/",
    }
};

export const config = types[envType];
