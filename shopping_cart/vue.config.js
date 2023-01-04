module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shop/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
