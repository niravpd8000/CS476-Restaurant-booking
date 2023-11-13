const envType = process.env.REACT_APP_ENV || "development";

const types = {
    development: {
        BASE_URL: "http://localhost:8080/api/",
    },
    staging: {
        BASE_URL: "https://stage.test.com/",
    },
    production: {
        BASE_URL: "https://cs-476-backend-niravpd8000.vercel.app/api/",
    }
};

export const config = types[envType];
