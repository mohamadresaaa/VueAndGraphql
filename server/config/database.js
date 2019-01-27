module.exports = {
    mongodb: {
        url: process.env.MONGODB_DATABASE_URL,
        options: {
            useNewUrlParser: true
        }
    }
};