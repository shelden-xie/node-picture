import fs from "fs";
import path from "path";
/**
 * 映射 d 文件夹下的文件为模块
 */


const fileImport = (filePath:string) => {
  filePath = filePath || path.join(__dirname);
  const tree:any= {};
  let files = [];
  try {
    files = fs.readdirSync(filePath);
  } catch (error) {
    throw new Error("read is error");
  }
  files.forEach((file) => {
    if (file !== "index.js" && path.extname(file) === ".js") {
      //获取当前文件的绝对路径
      const filedir = path.join(filePath, file);
      try {
        let stats = fs.statSync(filedir);
        const isFile = stats.isFile(); //是文件
        const isDir = stats.isDirectory(); //是文件夹
        if (isFile) {
          tree[path.basename(file, ".js")] = require(path.join(filePath, file)).default
        }
        if (isDir) {
          // fileImport(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
      } catch (error) {
        throw new Error("获取文件stats失败");
      }
    }
  });
  return tree;
};

// 默认导出当前文件夹下的映射
export default fileImport;
