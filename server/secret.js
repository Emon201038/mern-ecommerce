require("dotenv").config();

const port = process.env.PORT || 3004;

const dbUrl =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/practice2";

const jwtActivationKey =
  process.env.JWT_ACTIVATION_KEY || "ELKRHGFDVKJ54986LKJG";

const smtpUserName = process.env.SMTP_USERNAME || "emon201038@gmail.com";

const smtpPassword = process.env.SMTP_PASSWORD || "kmnqctitymszorwr";

const clientUrl = process.env.CLIENT_URL;

module.exports = {
  port,
  dbUrl,
  jwtActivationKey,
  smtpUserName,
  smtpPassword,
  clientUrl,
};