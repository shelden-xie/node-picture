import { Context } from 'koa'
import { paramsConf, voidConf } from '../types/type'

// 查询列表
const getBookList: voidConf = async (ctx: Context, params: paramsConf) => {
  let pageSize = params.pageSize || 10
  let page = params.page || 1
  delete params.page
  delete params.pageSize
  return ctx.db.book.find(params).limit(+pageSize).skip(+pageSize * (+page - 1)).sort({ createTime: '-1' });
};
// 添加新种类
const BookAdd: voidConf = (ctx: Context, params: paramsConf) => {
  return ctx.db.book.create(params)
};

// 修改
const BookModify: voidConf = (ctx: Context, params: paramsConf) => {
  return ctx.db.book.updateOne({ _id: params.id }, params)
};

// 删除
const BookDelete: voidConf = (ctx: Context, params: paramsConf) => {
  return ctx.db.book.deleteOne({ _id: params.id })
};
// 获取文档数量
const BookCount: voidConf = (ctx: Context, params: paramsConf) => {
  return ctx.db.book.find(params).countDocuments()
};
export default {
  getBookList,
  BookAdd,
  BookModify,
  BookDelete,
  BookCount
};
