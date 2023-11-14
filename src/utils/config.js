const envType = process.env.REACT_APP_ENV || "development";

const types = {
    development: {
        BASE_URL: "https://cs476backend23-cb6e8cd4b7e0.herokuapp.com/api/",
    },
    staging: {
        BASE_URL: "https://stage.test.com/",
    },
    production: {
        BASE_URL: "https://cs-476-backend-niravpd8000.vercel.app/api/",
    }
};

export const config = types[envType];
