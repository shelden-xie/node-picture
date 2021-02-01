import mongoose from 'mongoose'
//2.创建Schema（模型对象）
let Schema = mongoose.Schema;

let bookSchema = new Schema({
  name: String,
  modifyTime: String,
  description: String,
  createTime:String,
  thumbnail: String,
});

let bookModel = mongoose.model("book", bookSchema);

export default bookModel;
