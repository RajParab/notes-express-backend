module.exports = {
    HOST: "localhost",
    USER: "postgres",//add your postgres username
    PASSWORD: "1234",//add your postgres password
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };