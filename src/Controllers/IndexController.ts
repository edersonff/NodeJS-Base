import { Request, Response } from "express";

export default class IndexController {
  static async index(req: Request, res: Response) {
    const upTime = process.uptime();

    res.send({
      up_time: upTime,
      message: "Hello World!",
    });
  }
}
