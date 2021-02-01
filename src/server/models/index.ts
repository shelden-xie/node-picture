// 复制代码
import path from 'path';
import fileImport from '../utils/file-import-all';
const models = fileImport(path.join(__dirname));//获取所有的models;

export default models;
