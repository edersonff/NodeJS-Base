import request from "supertest";
// @ts-ignore
import { apiURL } from "./config.ts";

test("GET /api should return correct response", async () => {
  return request(apiURL)
    .get("/")
    .set("Accept", "application/json")
    .expect(200)
    .then((response) => {
      const { up_time, next_import, db_write, db_read } = response.body;
      expect(up_time).toBeGreaterThan(0);
      expect(next_import).toBeGreaterThan(0);
      expect(db_write).toBe(true);
      expect(db_read).toBe(true);
    });
});
