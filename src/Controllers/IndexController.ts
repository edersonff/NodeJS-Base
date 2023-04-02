import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import moment from "moment";

const prisma = new PrismaClient();
export default class IndexController {
  static async index(req: Request, res: Response) {
    const upTime = process.uptime();
    const nextImport = moment().endOf("day").diff(moment(), "seconds");

    const dbWrite: {
      ok?: boolean;
    } = await prisma.$runCommandRaw({
      ping: 1,
    });

    const dbRead: {
      ok?: boolean;
    } = await prisma.$runCommandRaw({
      ping: 1,
    });

    res.send({
      up_time: upTime,
      next_import: nextImport,
      db_connected: await prisma.$connect(),
      db_write: Boolean(dbWrite.ok) || false,
      db_read: Boolean(dbRead.ok) || false,
    });
  }
}
