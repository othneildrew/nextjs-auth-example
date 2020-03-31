
require('dotenv').config()

module.exports = {
    env: {
        // Reference variables from .env to make available
        APP_SECRET: process.env.APP_SECRET,
    },
}