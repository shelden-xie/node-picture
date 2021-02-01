import DB from "../db";
const dbs = DB.dbs;
import { Context } from 'koa'

const proxy = async (ctx: Context, next: any) => {
  ctx.db = dbs;
  await next();
};

export default proxy;
