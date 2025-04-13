const express = require('express');
let apiRoute = express();
const fs = require('fs');

apiRoute.get(["/", "/*"], async (req, res)=>{
    customRoute(req);
    try {
        let urlPath = req.path;
        const modulePath = `${urlPath}.js`;
        if(
            urlPath.indexOf("/_") != 0 && fs.existsSync(`${__dirname}${modulePath}`)
        )
        {
            const routerMethod = require(`.${modulePath}`);
            await routerMethod(req, res);
        }
        else{
            res.status(404).render('pages/404', {});
        }
    } catch (e) {
        console.log("error", e);
        res.status(404).send('something went wrong');
    }
});
module.exports = apiRoute;

const customRoute = (req)=>{
    if(req.path=='/' || req.path == "/newhome"){
        req.url = '/home';
    }
};