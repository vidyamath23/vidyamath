const {renderPage} = require('../helpers/common');

const loginin_signin = async (req, res)=>{
    const pageConfig = {
        title: 'Login_signin dfdsf', 
    };

    const template = 'pages/loginin_signin/loginin_signin';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = loginin_signin;
