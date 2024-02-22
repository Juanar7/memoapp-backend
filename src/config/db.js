import { createPool } from "mysql2/promise";

export const conn = createPool({
  host:'localhost',
  port: 3306,
  user: 'root',
  password:'root123',
  database: 'memoapp_db',
}
);

