const {renderPage} = require('./../helpers/common');

const home = async (req, res)=>{
    const pageConfig = {
        title: 'Home dfdsf', 
    };

    const template = 'pages/home/home';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = home;
