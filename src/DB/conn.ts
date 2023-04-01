import { ConnectionOptions, DataSource, createConnection } from "typeorm";
import { Product } from "../Entity/product.entity";

const { DB_URL } = process.env;

const conn: ConnectionOptions = {
  type: "mongodb",
  url: DB_URL,
  useNewUrlParser: true,
  logging: true,
  entities: [Product],
};

export default createConnection(conn);
