import {
  getToken,
  verifyToken,
  encryptPasswordAsync,
  verifyPasswordAsync,
} from "../utils/user";
import { success, fail, getParams } from "../utils/responseHandle";
import models from "../models";
import dayjs from "dayjs";
import { Context } from 'koa'
import{ Users } from '../types/type'

// 登录controller
const login = async (ctx: Context) => {
  let params = getParams(ctx);
  let times = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  let users = await models.userModel.findUser(ctx, { name: params.name });
  if (!users) {
    return (ctx.body = fail(10600, "用户名错误"));
  }
  let vetify = await verifyPasswordAsync(params.password, users.password);
  if (!vetify) {
    return (ctx.body = fail(10600, "密码错误！"));
  }
  let token = await getToken({ name: params.name });
  await models.userModel.updateUser(ctx, {
    ...params,
    lastLoginAt: times,
  }); //更新登录时间
  ctx.body = success(0, { token: token }, "登录成功");
};

// 注册controller
const register = async (ctx: Context) => {
  let params = getParams(ctx);
  let times = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  let users = await models.userModel.findUser(ctx, { name: params.name });
  if (users) {
    return (ctx.body = fail(10600, "用户名存在！"));
  }
  let hashpwd = await encryptPasswordAsync(params.password);
  let Params = Object.assign({}, params, {
    password: hashpwd,
    createdAt: times,
    lastLoginAt: times,
  });
  await models.userModel.saveUser(ctx, Params);
  ctx.body = success(0, {}, "注册成功");
};

const userInfo = async (ctx: Context) => {
  const usersInfo = await verifyToken(ctx.headers.authorization);
    if ((usersInfo as Users).expire) {
      return (ctx.body = fail(100403, "用户登录已过期，请重新登陆"));
    }
    let data = await models.userModel.findUser(ctx, { name: (usersInfo as Users).name });
    ctx.body = success(0, data, "请求成功");
};
export default {
  login,
  register,
  userInfo,
};
