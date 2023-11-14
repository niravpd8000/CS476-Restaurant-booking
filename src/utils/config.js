const envType = process.env.REACT_APP_ENV || "development";

const types = {
    development: {
        BASE_URL: "https://cs-476-backend-maab.vercel.app/api/",
    },
    staging: {
        BASE_URL: "https://stage.test.com/",
    },
    production: {
        BASE_URL: "https://cs-476-backend-maab.vercel.app/api/",
    }
};

export const config = types[envType];
