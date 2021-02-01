import { fail } from "../utils/responseHandle";
import { Context } from 'koa'
class ErrorHandler {
  static error(app:any, log:any){
    app.use(async (ctx:Context, next:any) => {
      try {
        await next();
      } catch (error) {
        ctx.body = fail(-1, "请求失败", error.errors || error);
        log.error(ctx.body);
      }
    });
    // 处理页面的 404
    app.use(async (ctx:Context, next:any) => {
      await next();
      if (ctx.status === 404) {
        // 公益 404
        ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://yoursite.com/yourPage.html" homePageName="回到我的主页"></script>`;
      }
    });
  }
}

export default ErrorHandler;
