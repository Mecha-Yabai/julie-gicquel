const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/julie-gicquel/" // note the trailing slash
      : "/",
  transpileDependencies: true,
  lintOnSave: false,
});
