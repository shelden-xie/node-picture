import { Context } from 'koa'
import { paramsLoginApi } from '../types/type'


const saveUser = (ctx: Context, params: paramsLoginApi): Promise<void> => {
    return ctx.db.user.create(params);
};

const findUser = (ctx: Context, params: paramsLoginApi): Promise<void> => {
    return ctx.db.user.findOne(params);
};

const updateUser = (ctx: Context, params: paramsLoginApi): Promise<void> => {
    return ctx.db.user.updateOne({ name: params.name }, params);
};

export default {
    saveUser,
    findUser,
    updateUser
}