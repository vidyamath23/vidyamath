const {renderPage} = require('./../helpers/common');

const home = async (req, res)=>{
    const pageConfig = {
        title: 'vidyamath.com',
        hero_section:{
            heading:'Thousand of career oriented courses available here',
            hero_links: [
                {
                    label: 'Library',
                    icon:'/images/book.png',
                    link:''
                },
                {
                    label: 'Video Tutorial',
                    icon:'/images/video.png',
                    link:''
                }
            ],
            hero_cards:[
                {
                    label: 'Graphic Designing',
                    duration: '3 Months Duration',
                    icon:'/images/graphic.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:''
                },
                {
                    label: 'Web Designing',
                    duration: '3 Months Duration',
                    icon:'/images/web.png',
                    bg_color:'#d201c6',
                    bg_h_color:'#000',
                    url:''
                },
                {
                    label: 'Frontend Developer',
                    duration: '3 Months Duration',
                    icon:'/images/ui.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:''
                },
                {
                    label: 'Graphic Designing',
                    duration: '3 Months Duration',
                    icon:'/images/app.png',
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
                    icon:'/images/excel.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'MS Word',
                    duration: '1 Month',
                    icon:'/images/word.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'PPT',
                    duration: '1 Month',
                    icon:'/images/ppt.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'Outlook',
                    duration: '1 Month',
                    icon:'/images/outlook.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'Acess',
                    duration: '1 Month',
                    icon:'/images/access.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                }, {
                    label: 'publisher',
                    duration: '1 Month',
                    icon:'/images/publisher.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                }   
            ]           
        },
        it_tutorials:{
           heading: 'IT Technology',
           cards:[
            {
            label: 'HTML',
            duration: '1 Month',
            icon:'/images/publisher.png',
            bg_color:'#4c18a1',
            bg_h_color:'#000',
            url:'',
            cta:'View Course'
           },
           {
            label: 'Html5',
            duration: '1 Month',
            icon:'/images/publisher.png',
            bg_color:'#4c18a1',
            bg_h_color:'#000',
            url:'',
            cta:'View Course'
           },
           {
            label: 'publisher',
            duration: '1 Month',
            icon:'/images/publisher.png',
            bg_color:'#4c18a1',
            bg_h_color:'#000',
            url:'',
            cta:'View Course'
           },
           {
            label: 'publisher',
            duration: '1 Month',
            icon:'/images/publisher.png',
            bg_color:'#4c18a1',
            bg_h_color:'#000',
            url:'',
            cta:'View Course'
           },
           {
            label: 'publisher',
            duration: '1 Month',
            icon:'/images/publisher.png',
            bg_color:'#4c18a1',
            bg_h_color:'#000',
            url:'',
            cta:'View Course'
           },{
            label: 'publisher',
            duration: '1 Month',
            icon:'/images/publisher.png',
            bg_color:'#4c18a1',
            bg_h_color:'#000',
            url:'',
            cta:'View Course'
           } 
           ]
        },
        design_tutorials:{
            heading:'Web & Graphic Design Tutorial',
            cards:[
                {
                    label: 'photoshop',
                    duration: '1 Month',
                    icon:'/images/ps.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'illustrator',
                    duration: '1 Month',
                    icon:'/images/al.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'Coreldraw',
                    duration: '1 Month',
                    icon:'/images/coral.png',
                    bg_color:'#4c18a1',
                    bg_h_color:'#000',
                    url:'',
                    cta:'View Course'
                },
                {
                    label: 'photoshop',
                    duration: '1 Month',
                    icon:'/images/xd.png',
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
