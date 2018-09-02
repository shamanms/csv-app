const ObjectID = require("mongodb").ObjectID;
const csv = require('csvtojson')

module.exports = function (router) {

  const getTransactionsJson = ctx => ctx.app.transactions.find().toArray();

  router.get("/api/transactions", async (ctx) => {
    ctx.body = await getTransactionsJson(ctx)
  });

  router.post("/api/transactions", async (ctx) => {
    const filePath = ctx.request.files.file.path;
    const jsonArray = await csv().fromFile(filePath);

    ctx.body = await ctx.app.transactions.insertMany(jsonArray)
      .then(
          () => getTransactionsJson(ctx)
      );
  });

  router.delete("/api/transactions/:id", async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)};

    ctx.body = await ctx.app.transactions.deleteOne(documentQuery)
      .then(
          () => getTransactionsJson(ctx)
      );
  });

}