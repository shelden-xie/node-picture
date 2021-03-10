import { Context } from 'koa'
// config
export interface configApi {
    port: number,
    viewsDir: string,
    staticDir: string,
    token: {
        secret: string,
        expireIn: string | number
    },
    cache: false,
    dbUrl: string,
    redis: {
        url: string,
        port: number,
        password: string
    }
}

// 书籍列表
export interface paramsConf {
    id: string,
    page?: number | undefined,
    pageSize?: number | undefined,
    name?: string | undefined,
    description?: string | undefined,
}
// 函数类型
export interface voidConf {
    (ctx: Context, params: paramsConf): Promise<[]>
}

// 登录参数
export interface paramsLoginApi {
    name: string,
    password: string
}
// 登录函数类型
export interface voidLoginConf {
    (ctx: Context, params: paramsLoginApi): Promise<[]>
}