// add this file to .gitignore



console.log(process.env);
console.log(process.CLIENTID);

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
