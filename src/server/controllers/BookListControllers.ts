import models from "../models";
import { success, getParams } from "../utils/responseHandle";
import rules from "../utils/typeParams";
import { Context } from 'koa'
// 查询列表
const BookListControllers = async (ctx: Context): Promise<void> => {
  let params = getParams(ctx);
  let { pageSize = 10, page = 1 } = params
  await ctx.verifyParams(rules.bookList)
  let total = await models.BookListModels.BookCount(ctx, params);
  let data = await models.BookListModels.getBookList(ctx, params);
  ctx.body = success(0, {
    page: +page,
    total: total,
    pageSize: +pageSize,
    data: data || []
  }, "获取成功");
};
// 添加新种类
const BookAddControllers = async (ctx: Context): Promise<void>  => {
  let params = getParams(ctx);
  await ctx.verifyParams(rules.bookAdd);
  let data = await models.BookListModels.BookAdd(ctx, params);
  ctx.body = success(0, data, "添加成功");
};

// 修改
const BookModifyControllers = async (ctx: Context): Promise<void>  => {
  let params = getParams(ctx);
  await ctx.verifyParams(rules.bookModify);
  let data = await models.BookListModels.BookModify(ctx, params);
  ctx.body = success(0, data, "修改成功");
};

// 删除
const BookDeleteControllers = async (ctx: Context): Promise<void> => {
  let params = getParams(ctx);
  await ctx.verifyParams(rules.bookDelete);
  let data = await models.BookListModels.BookDelete(ctx, params);
  ctx.body = success(0, data, "删除成功");
};

export default {
  BookListControllers,
  BookAddControllers,
  BookModifyControllers,
  BookDeleteControllers,
};
