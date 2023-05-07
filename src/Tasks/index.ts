import cron from "node-cron";

const tasks = () => {
  cron.schedule("0 * * * *", () => {});
};

export default tasks;
