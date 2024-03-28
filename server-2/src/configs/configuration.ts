export default () => ({
  // ** Project title
  projectTitle: process.env.TITLE_PROJECT,

  // ** Port
  port: parseInt(process.env.PORT, 10) || 3000,

  // ** Node env
  nodeEnv: parseInt(process.env.NODE_ENV) || 'production',

  // ** Database
  database: {
    uri: process.env.DB_URI,
    syncForce: process.env.DB_SYNC_FORCE === 'true',
    syncAlter: process.env.DB_SYNC_ALTER === 'true',
  },

  // ** Redis
  redisHost: process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT) || 6379,

  secretKeyJwt: process.env.SECRET_KEY_JWT || 'SECRET_KEY_JWT',
  expiresInJwt: process.env.EXPIRES_IN_JWT || 'EXPIRES_IN_JWT',

  userOracle: process.env.ORACLE_USER,
  passwordOracle: process.env.ORACLE_PASSWORD,
  connectStringOracle: process.env.ORACLE_CONNECT_STRING,
});
