const {renderPage} = require('../helpers/common');

const terms_condition = async (req, res)=>{
    const pageConfig = {
        title: 'Terms_condition  dfdsf', 
    };

    const template = 'pages/terms_condition/terms_condition';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = terms_condition;
