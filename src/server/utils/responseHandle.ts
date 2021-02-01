import { Context } from 'koa'
// 统一处理输出对象
export const success = (code = 0, data = {}, msg = "") => {
  return {
    code: code,
    data,
    msg
  };
};
// 失败
export const fail = (code = -1, msg: string, error = null) => {
  return {
    code: code,
    msg,
    error,
  };
}
// 校验是否重复
export const checkParams = (ctx: Context, params = {}) => {

}

// 获取参数
export const getParams = (ctx: Context) => {
  return Object.assign(ctx.query, ctx.request.body)
}
