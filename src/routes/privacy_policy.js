const {renderPage} = require('../helpers/common');

const privacy_policy = async (req, res)=>{
    const pageConfig = {
        title: 'privacy_policy  dfdsf', 
    };

    const template = 'pages/privacy_policy/privacy_policy';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = privacy_policy;
