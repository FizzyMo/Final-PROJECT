// add this file to .gitignore





module.exports = {
    google:{


        clientID: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET


    },
        mongodb: {
            dbURI: process.env.DBURI
        },
        session: {
            cookieKey: 'thenetninjaisawesomeiguess'
        }
};
