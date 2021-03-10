import { Context } from 'koa'
const actionIndex = async (ctx: Context) => {
    ctx.body = await ctx.render('index', {
        data: [{ name: 'nihao' }, { name: 'tahao' }]
    })
}
export default {
    actionIndex
};