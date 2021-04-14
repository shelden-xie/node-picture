import bcrypt from "bcryptjs"; //密码加密库
import config from "../config";
import jwt from "jsonwebtoken"; //登录验证
// 获取token
export const getToken = (payload={}) => {

  return jwt.sign(payload, config.token.secret, {
    expiresIn: config.token.expireIn,
  });
};

// 验证token
export const verifyToken = (token: string) => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token.replace(/Bearer /, ''), config.token.secret, function (err,decoded) {
        err ? resolve({expire:true}) : resolve(decoded);
      });
    } catch (e) {
      resolve({expire:true});
    }
  });
};

// 异步密码加密
export const encryptPasswordAsync = (pwd: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err: Object, salt: string) {
      //10,密码加密的迭代次数
      err && reject(err);
      bcrypt.hash(pwd, salt, function (err: Object, hash: string) {
        // 把hash值赋值给password变量
        err ? reject(err) : resolve(hash);
      });
    });
  });
};

// 异步密码验证
export const verifyPasswordAsync = (pwd1: string, pwd2: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pwd1, pwd2, function (err:Object, res: boolean) {
      err ? reject(err) : resolve(res);
    });
  });
};
