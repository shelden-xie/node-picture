import path from 'path';
import { configApi } from '../types/type'

let config = {
  port: 3000,
  viewsDir: path.join(__dirname, "../../src", "web"),
  staticDir: path.join(__dirname, '../', 'assets'),
  token: {
    secret: 'node_picture_shelden',
    expireIn: '1h'
  }
};

// 开发环境
if (process.env.NODE_ENV === "development") {
  const devConfig = {
    port: 3000,
    cache: false,
    dbUrl: 'mongodb://127.0.0.1:27017/Picture',
    redis: {
      url: '127.0.0.1',
      port: 6379,
      password: ''
    }
  };
  config = { ...config, ...devConfig };
}

// 线上环境
if (process.env.NODE_ENV === "production") {
  const proConfig = {
    port: 80,
    cache: "memory",
    dbUrl: 'mongodb://127.0.0.1:27017/Picture'
  };
  config = { ...config, ...proConfig };
}

export default config as configApi;