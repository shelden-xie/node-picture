import { Context } from 'koa'
// 查询列表
const getBookList = async (ctx: Context, params = {}) => {
  return ctx.db.book.find(params);
};
// 添加新种类
const BookAdd = (ctx: Context, params = {}) => {
  return ctx.db.book.create(params)
};

// 修改
const BookModify = (ctx: Context, params = {}) => { };

// 删除
const BookDelete = (ctx: Context, params = {}) => { };
export default {
  getBookList,
  BookAdd,
  BookModify,
  BookDelete,
};
