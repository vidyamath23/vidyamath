const renderPage = (params)=>{
    const {req, res, template} = params;

    data = params.pageConfig || {};
    
    if (data){
        if(template.includes('404')){
            res.status(404).render(template, data);
        }
        else{
            res.render(template, data);
        }
    }

}

module.exports = {renderPage}