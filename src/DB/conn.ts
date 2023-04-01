import { ConnectionOptions, DataSource, createConnection } from "typeorm";
import { Product } from "../Entity/product.entity";

const conn: ConnectionOptions = {
  type: "sqlite",
  database: "./src/data/" + String(process.env.DB_NAME) + ".sqlite",
  synchronize: true,
  logging: true,
  entities: [Product],
};

export const dataSource: DataSource = new DataSource(conn);

export default createConnection(conn);
