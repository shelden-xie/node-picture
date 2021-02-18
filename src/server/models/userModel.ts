import { Context } from 'koa'

interface paramsApi {
    name: string,
    password: string
}

interface voidConf {
    (ctx: Context, params: paramsApi): Promise<[]>
}

const saveUser: voidConf = (ctx: Context, params: paramsApi) => {
    return ctx.db.user.create(params);
};

const findUser: voidConf = (ctx: Context, params: paramsApi) => {
    return ctx.db.user.findOne(params);
};

const updateUser: voidConf = (ctx: Context, params: paramsApi) => {
    console.log(params)
    return ctx.db.user.updateOne({ name: params.name }, params);
};

export default {
    saveUser,
    findUser,
    updateUser
}