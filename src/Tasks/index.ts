import cron from "node-cron";
import importData from "./import/importData";

const tasks = () => {
  // cron.schedule("0 0 * * *", () => {
  importData();
  // });
};

export default tasks;
