import Koa from "koa";
import render from "koa-swig"; //模板渲染
import staticServe from "koa-static"; //
import co from "co";
import initController from "./controllers";
import config from "./config";
import DB from "./db";
import log4js from "log4js";
import log4json from "./utils/log4_json";
import proxy from "./middlewares/proxy"; //代理所有DB中间件
import koaBody from "koa-body"; //处理post参数
import parameter from "koa-parameter"; //参数校验
import cors from "koa2-cors"; //允许客户端跨域访问
import compress from "koa-compress"; //开启服务端Gzip压缩功能
import helmet from "koa-helmet"; //设置Http头保障应用程序安全
import verifyTokens from "./middlewares/vetifyUser"; //验证路由token中间件
import { historyApiFallback } from "koa2-connect-history-api-fallback"; //koa2支持SPA应用程序,加白名单
//错误处理
import errorHander from "./middlewares/errorHandler";
//初始化koa实例
const app = new Koa();
//获取日志
const logger = log4js.getLogger("globalError");

// 初始化模板配置
app.context.render = co.wrap(
  render({
    cache: config.cache,
    writeBody: false
  })
);

// 初始化中间件
app.use(staticServe(config.staticDir)); //配置访问静态资源
app.use(historyApiFallback({ index: "/", whiteList: ["/api"] }));
app.use(proxy); //代理数据库
app.use(koaBody()); //处理post请求
app.use(parameter(app)); //开启全局参数校验
app.use(cors()); //开启跨域
app.use(compress({ threshold: 2048 })); //当数据超过2kb的时候进行压缩
app.use(helmet.contentSecurityPolicy()); //默认使用多种策略，可以具体某一项配置
log4js.configure(log4json);

//初始化连接数据库
DB.connect();

// 错误处理
errorHander.error(app, logger);

// 验证token
verifyTokens(app);

//初始化路由
initController(app);

app.listen(config.port, () => {
  console.log(`this server is running at http://localhost:${config.port}`);
});
