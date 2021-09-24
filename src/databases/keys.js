module.exports = {
    databaseMongo : {
        URI : `mongodb+srv://${process.env.JOSE_USER_MONGODB}:${process.env.JOSE_PWD_MONGODB}@cluster0.cv8na.mongodb.net/${process.env.JOSE_DB_NAME}?retryWrites=true&w=majority` 
    }
}