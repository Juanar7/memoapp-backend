import { createPool } from "mysql2/promise";
import config from "../config.js";

export const conn = createPool({
  host: config.db_host,
  port: config.db_port,
  user: config.db_user,
  password: config.db_password,
  database: config.db_database
}
);

