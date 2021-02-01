import mongoose from 'mongoose'
//2.创建Schema（模型对象）
let Schema = mongoose.Schema;

let bookSchema = new Schema({
  name: String,
  password: String,
  createdAt: String,
  lastLoginAt: String
});

let UserModel = mongoose.model("user", bookSchema);

export default UserModel;
