import request from "supertest";
// @ts-ignore
import { apiURL } from "./config.ts";

test("GET /api should return correct response", async () => {
  return request(apiURL)
    .get("/products")
    .set("Accept", "application/json")
    .expect(200)
    .then((response) => {
      expect(response.body.up_time).toBeGreaterThan(0);
      expect(response.body.next_import).toBeGreaterThan(0);
      expect(response.body.db_write).toBe(true);
      expect(response.body.db_write).toBe(true);
    });
});
