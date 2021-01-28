// 复制代码
import mongoose from "mongoose";
import config from "../config";
import path from 'path';
import fileImport from '../utils/file-import-all';
const dbs = fileImport(path.join(__dirname));//获取所有的dbs;
// 执行连接操作设置
const settingConnect = () => {
  mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};
const connect = () => {
  settingConnect();

  mongoose.connection.on("disconnected", () => {
    settingConnect();
  });

  mongoose.connection.on("error", (err) => {
    console.error("Connect Failed: ", err);
  });

  mongoose.connection.on("open", async () => {
    console.log("🚀 Connecting MongoDB Successfully 🚀");
  });
};
export default {
    connect,
    dbs
};
