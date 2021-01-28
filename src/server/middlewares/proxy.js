import DB from "../db";
const dbs = DB.dbs;

const proxy = async (ctx, next) => {
  ctx.db = dbs;
  await next();
};

export default proxy;
