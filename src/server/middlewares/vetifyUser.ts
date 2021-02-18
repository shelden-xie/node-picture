import config from "../config";
import koajwt from "koa-jwt"; //验证
import { Context } from 'koa'
import { fail } from "../utils/responseHandle";
import { verifyToken } from "../utils/user";
const verifyTokens = (app: any): void => {
  //把所有除login和静态资源的路由加上token认证
  app.use(koajwt({ secret: config.token.secret, passthrough: true }));
  //验证/api开头   
  // app.use(async (ctx: Context, next: any) => {
  //   if (ctx.request.url.match(/^\/api/)) {
  //     let token = ctx.headers.authorization;
  //     let userInfo = await verifyToken(token);
  //     if (!userInfo) {
  //       return (ctx.body = fail(401, "token无效,请重新登录"));
  //     }
  //     await next();
  //   } else {
  //     await next();
  //   }
  // });
};

export default verifyTokens;
