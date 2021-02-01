import { Context } from 'koa'

interface paramsApi{
 name:string
}

const saveUser = (ctx:Context, params={}) => {
    return ctx.db.user.create(params);
};

const findUser = (ctx:Context, params={}) => {
    return ctx.db.user.findOne(params);
};

const updateUser = (ctx:Context, params:paramsApi) => {
    return ctx.db.user.updateOne({ name: params.name }, params);
};

export default {
    saveUser,
    findUser,
    updateUser
}