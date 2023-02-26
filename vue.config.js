module.exports = {
  devServer: {
    proxy: "http:/bibekshakya.com"
  }
};
 // if you get CORS error then add this file and replace  http:/bibekshakya.com with localhost:8080  in axios get url
// cors error occur due to data fetched from different site and displayed on diff site
