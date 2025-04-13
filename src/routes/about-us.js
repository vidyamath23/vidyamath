const {renderPage} = require('./../helpers/common');

const aboutUs = async (req, res)=>{
    const pageConfig = {
        title: 'About Page dfdsf', 
    };

    const template = 'pages/about-us/about-us';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = aboutUs;
