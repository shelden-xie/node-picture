import path from "path";
import router from "koa-simple-router";
import fileImport from "../utils/file-import-all";
const controllers = fileImport(path.join(__dirname)); //获取所有的controller
import { App } from '../types/type'

function initController(app: App): void {
  app.use(
    router((_: any): void => {
      _.get("/", controllers.IndexController.actionIndex);
      _.post("/login", controllers.UserController.login);
      _.post("/register", controllers.UserController.register);
      _.get("/api/userinfo", controllers.UserController.userInfo);
      _.get("/api/book/list", controllers.BookListControllers.BookListControllers);
      _.post("/api/book/add", controllers.BookListControllers.BookAddControllers);
      _.post("/api/book/update", controllers.BookListControllers.BookModifyControllers);
      _.post("/api/book/delete", controllers.BookListControllers.BookDeleteControllers);
    })
  );
}
export default initController;
