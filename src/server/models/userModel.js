const saveUser = (ctx,params) => {
  return ctx.db.user.create(params);
};

const findUser = (ctx, params) => {
    return ctx.db.user.findOne(params);
};

const updateUser = (ctx, params) => {
    return ctx.db.user.updateOne({name:params.name},params);
};

export default{
    saveUser,
    findUser,
    updateUser
}