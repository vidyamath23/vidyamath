const {renderPage} = require('../helpers/common');

const contact_us = async (req, res)=>{
    const pageConfig = {
        title: 'contact_us  dfdsf', 
    };

    const template = 'pages/contact_us/contact_us';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = contact_us;
