export default {
  name: 'resume', // do not change
  pageTitle: 'Resume',
  icon: 'mdi-card-account-details',

  experience: {
    title: 'Experience',
    icon: 'mdi-tie',
    data: [
      {
        title: 'Blockchain Technical Solutions Architect',
        start: '01/2020',
        end: 'present',
        company: 'Sparkout Tech Solutions',
        description: 'Creating innovative solutions to tackle the issues of centralization and trust in the new web3 world.'
      },
      {
        title: 'Software Engineer',
        start: '02/2016',
        end: '01/2020',
        company: 'Wicode Infotech Private Limited',
        description: 'Designed solutions to help middle eastern enterprises solve their everyday challenges.'
      },
    ]
  },
  education: {
    title: 'Education',
    icon: 'mdi-school',
    data: [
      {
        major: 'Bachelor Of Engineering (Computer Science & Engineering)',
        start: '07/2011',
        end: '09/2015',
        institute: 'Anna University - Tamil Nadu',
        description: ''
      },
    ]
  },
  certificatesAndAwards: {
    title: 'Certificates/Awards',
    icon: 'mdi-medal',
    data: [
      {
        title: 'Corda Certified Developer',
        date: '26/04/2021',
        issuedBy: 'R3',
        description: ''
      },
      // {
      //   title: 'Best Costume',
      //   date: '19/12/2019',
      //   issuedBy: 'Marvel Comics',
      //   description: 'Got the award for the best costume ever made on Marvel Comics, gotta love it.'
      // },
    ]
  },
  // academic: {
  //   title: 'Academic',
  //   icon: 'mdi-library-shelves',
  //   data: [
  //     {
  //       title: 'Research paper on criminals.',
  //       date: '10/07/2019',
  //       issuedBy: 'MIT',
  //       description: 'Published a research paper at MIT about criminal behaviours and predictions.'
  //     },
  //   ]
  // },
  skills: [
    // {
    //   title: 'Swinging',
    //   barType: 'line',
    //   icon: 'mdi-web',
    //   items: [
    //     {
    //       title: 'Horizontally',
    //       level: 80
    //     },
    //     {
    //       title: 'Vertically',
    //       level: 90
    //     },
    //   ]
    // },
    // {
    //   title: 'Design',
    //   barType: 'line',
    //   icon: 'mdi-brush-variant',
    //   items: [
    //     {
    //       title: 'Web Design',
    //       level: 85
    //     },
    //     {
    //       title: 'Photoshop',
    //       level: 90
    //     },
    //     {
    //       title: 'After Effects',
    //       level: 80
    //     },
    //   ]
    // },
    {
      title: 'Languages',
      barType: 'dots',
      icon: 'mdi-earth',
      items: [
        {
          title: 'Tamil',
          level: 100
        },
        {
          title: 'English',
          level: 94
        },
      ]
    },
    // {
    //   title: 'Knowledge',
    //   barType: 'dots',
    //   icon: 'mdi-book-open-page-variant',
    //   items: [
    //     {
    //       title: 'Web shoot',
    //       level: 94
    //     },
    //     {
    //       title: 'Taking pictures',
    //       level: 91
    //     },
    //   ]
    // }
  ],
};
