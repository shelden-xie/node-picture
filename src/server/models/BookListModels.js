
// 查询列表
const getBookList = async (ctx, params = {}) => {
  return ctx.db.book.find(params);
};
// 添加新种类
const BookAdd = (ctx,params = {}) => {
  return ctx.db.book.create(params)
};

// 修改
const BookModify = (ctx,params = {}) => {};

// 删除
const BookDelete = (ctx,params = {}) => {};
export default {
  getBookList,
  BookAdd,
  BookModify,
  BookDelete,
};
