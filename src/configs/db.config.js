const env = process.env;
const fs = require("fs");
/*const { use } = require("../routes/art.route"); */
/* const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME || 'programming_languages',
    port: env.DB_PORT || 3306,
    ssl: {
      mode: 'VERIFY_IDENTITY',
      ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
    } */
const db = {
  host: "bais.mysql.database.azure.com",
  user: "tippie_art_ro",
  password: "IqGGqtsUJRf7b8L9y049W3oBXBFetC3V",
  database: "tippie_art",
  port: env.DB_PORT || 3306,
  ssl: {
    ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem"),
  },
};

module.exports = db;
