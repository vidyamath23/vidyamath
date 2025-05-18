// routes/shadow.js
module.exports = (req) => {
  const isDetail = !!req.params.slug;

  if (isDetail) {
    return {
      title: "Box Shadow Detail",
      isDetail: true,
      detailContent: {
        heading: "This is the shadow detail view",
        description: "More info about this shadow type.",
        // Optional: use slug to fetch data
        slug: req.params.slug
      }
    };
  }

  return {
    title: "Box Shadow",
    isDetail: false,
    breadcrumb:[
      {
        label:'Home',
        link:'/'
      }
    ],
    cards: [
      {
        class: "box shadow-1 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: '/shadow/shadow-1',
      },
      {
        class: "box shadow-2 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-2',
      },
      {
        class: "box shadow-3 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-3',
      },
      {
        class: "box shadow-4 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-4',
      },
      {
        class: "box shadow-5 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-5',
      },
      {
        class: "box shadow-6 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-6',
      },
      {
        class: "box shadow-7 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-7',
      },
      {
        class: "box shadow-8 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-8',
      },
      {
        class: "box shadow-9 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-9',
      },
      {
        class: "box shadow-10 w_204 h_204 b_r10 bc_c_white p_lr60",
        link: 'shadow-10',
      },
      {
        class: "box shadow-11 w_204 h_204 b_r10 bc_c_white p_lr60",
        link: 'shadow-11',
      },
      {
        class: "box shadow-12 w_204 h_204 b_r10 bc_f9f9f9 p_lr60",
        link: 'shadow-12',
      },
    ],
  };
};
