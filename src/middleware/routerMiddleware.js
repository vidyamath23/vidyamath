const path = require("path");
const fs = require("fs");
const deviceMiddleware = require("./deviceMiddleware");

const pageRouter = (app) => {
  // to create dynamic route path
  const viewRoutePath = path.join(__dirname, "../../views/pages");
  const viewDataPath = path.join(__dirname, "../routes");

  // Use device middleware globally
  app.use(deviceMiddleware);

  // Get all folder names in the pages directory
  const folders = fs.readdirSync(viewRoutePath).filter((item) => {
    const fullPath = path.join(viewRoutePath, item);
    return fs.statSync(fullPath).isDirectory();
  });

  // Load all page folders and create a dynamic route for each

  folders.forEach((item) => {
    let template = `pages/${item}/${item}`;
    let pageData = require(`${viewDataPath}/${item}.js`);

    if (item === "home") {
      app.get("/", (req, res) => {
        pageData.deviceTye = res.locals.device;
        console.log(pageData);
        res.render(template, { pageData });
      });
    }
    app.get(`/${item}`, (req, res) => {
      pageData.deviceTye = res.locals.device;
      console.log(pageData);
      res.render(template, { pageData });
    });
  });
};
module.exports = pageRouter;
