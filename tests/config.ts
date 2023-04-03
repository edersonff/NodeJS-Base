import { config } from "dotenv";

config();

export const apiURL = `http://localhost:${process.env.PORT}/api`;
