const {renderPage} = require('../helpers/common');

const signin_signup = async (req, res)=>{
    const pageConfig = {
        title: 'About Page dfdsf', 
    };

    const template = 'pages/signin_signup/signin_signup';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = signin_signup;
