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
    let detaiTemplate = `pages/${item}/${item}-detail`;
    let getPageData = require(`${viewDataPath}/${item}.js`); // function

    if (item === "home") {
      app.get("/", (req, res) => {
        let pageData = getPageData(req);
        pageData.deviceTye = res.locals.device;
        res.render(template, { pageData });
      });
    }
    app.get(`/${item}/:slug?`, (req, res) => {
      const isDetail = !!req.params.slug;
      let pageData = getPageData(req);   
      pageData.deviceTye = res.locals.device;
      pageData.isDetail = isDetail;
       
      res.render(isDetail?detaiTemplate:template, { pageData });
    });
  });
};
module.exports = pageRouter;
