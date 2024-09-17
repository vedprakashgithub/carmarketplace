/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://car-marketplace_owner:CL2vDubq6jhi@ep-patient-boat-a58lrfkw.us-east-2.aws.neon.tech/car-marketplace?sslmode=require',
    }
  };