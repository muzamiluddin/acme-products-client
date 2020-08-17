const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "http://localhost:3003/v1/",
      changeOrigin: true,
    })
  );
};
