import models from "../models";
import { success, getParams } from "../utils/responseHandle";
import rules from "../utils/typeParams";
// 查询列表
const BookListControllers = async (ctx) => {
  let params = getParams(ctx);
  let data = await models.BookListModels.getBookList(ctx, params);
  ctx.body = success(0, data, "获取成功");
};
// 添加新种类
const BookAddControllers = async (ctx) => {
  let params = getParams(ctx);
  await ctx.verifyParams(rules.bookAdd);
  let data = await models.BookListModels.BookAdd(ctx, params);
  ctx.body = success(0, data, "添加成功");
};

// 修改
const BookModifyControllers = (ctx) => {};

// 删除
const BookDeleteControllers = (ctx) => {};

export default {
  BookListControllers,
  BookAddControllers,
  BookModifyControllers,
  BookDeleteControllers,
};
