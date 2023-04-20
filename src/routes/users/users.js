import productActions from '../../action/users'

exports.searchName = (ctx) => {
    console.log(productActions.searchName(ctx.params.name))
    ctx.body = productActions.searchName(ctx.params.name)

    return ctx
}
