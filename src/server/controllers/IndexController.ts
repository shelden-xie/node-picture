import { Context } from 'koa'
const actionIndex = async (ctx: Context) => {
    ctx.body =  await ctx.render('index')
}
export default {
    actionIndex
};