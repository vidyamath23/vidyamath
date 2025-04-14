const {renderPage} = require('./../helpers/common');

const home = async (req, res)=>{
    const pageConfig = {
        title: 'vidyamath.com',
        hero_section:{
            heading:'Thousand of career oriented courses available here',
            hero_links: [
                {
                    label: 'Library',
                    icon:'',
                    link:''
                },
                {
                    label: 'Video Tutorial',
                    icon:'',
                    link:''
                }
            ],
            hero_cards:[
                {
                    label: 'Graphic Designing',
                    duration: '3 Months Duration',
                    icon:'',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:''
                },
                {
                    label: 'Graphic Designing',
                    duration: '3 Months Duration',
                    icon:'',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:''
                },
                {
                    label: 'Graphic Designing',
                    duration: '3 Months Duration',
                    icon:'',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:''
                },
                {
                    label: 'Graphic Designing',
                    duration: '3 Months Duration',
                    icon:'',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:''
                }
            ]
        },
        technologies_tutorials:{
            heading:'Microsoft Technologies Tutorials',
            cards:[
                {
                    label: 'MS Excel',
                    duration: '1 Month',
                    icon:'',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
            ]
        },
        design_tutorials:{
            heading:'Web & Graphic Design Tutorial',
            cards:[
                {
                    label: 'MS Excel',
                    duration: '1 Month',
                    icon:'',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
            ]
        },
        bottom_info:{
            heading:`The world's largest Hindi & English Course Platform`,
            para:'Choose from over 80,000 online video courses with new additions published every month',
            cta:'Join Now',
            cta_link:'#',
        }
    };

    const template = 'pages/home/home';

   renderPage({req, res, template, pageConfig}); 
};

module.exports = home;
