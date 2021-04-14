import { Context } from 'koa'

// 定义app
export interface App {
    use: (callback: (ctx: Context, next: () => void) => Promise<void>) => void
}
// 用户信息
export type Users = {
    name?: string;
    expire?:boolean;
    [propName:string]:any; 
  };
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

// 登录参数
export interface paramsLoginApi {
    name: string,
    password: string
}