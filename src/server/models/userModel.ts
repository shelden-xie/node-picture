import { Context } from 'koa'
import { voidLoginConf, paramsLoginApi } from '../types/type'


const saveUser: voidLoginConf = (ctx: Context, params: paramsLoginApi) => {
    return ctx.db.user.create(params);
};

const findUser: voidLoginConf = (ctx: Context, params: paramsLoginApi) => {
    return ctx.db.user.findOne(params);
};

const updateUser: voidLoginConf = (ctx: Context, params: paramsLoginApi) => {
    return ctx.db.user.updateOne({ name: params.name }, params);
};

export default {
    saveUser,
    findUser,
    updateUser
}