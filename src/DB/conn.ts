import { ConnectionOptions, createConnection } from "typeorm";
import { Product } from "../Entities/Product";

const conn: ConnectionOptions = {
  type: "sqlite",
  database: "./src/data/" + String(process.env.DB_NAME) + ".sqlite",

  synchronize: true,
  logging: true,
  entities: [Product],
};

export default createConnection(conn);
