import type { jobFilter, JobCard, JobDetails } from '@/types/jobs'

export const jobSidebarDetails: jobFilter[] = [
  {
    id: 1,
    title: 'Filter',
    button: 'Find jobs',
    search: true,
    location: true,
    details: [
      {
        id: 1,
        title: 'Full-time',
        checkId: 'full-time',
        badge: true,
        badgeText: 8688,
      },
      {
        id: 2,
        title: 'Contract',
        checkId: 'contract-based',
        badge: true,
        badgeText: 503,
      },
      {
        id: 3,
        title: 'Part-time',
        checkId: 'part-time',
        badge: true,
        badgeText: 288,
      },
      {
        id: 4,
        title: 'Internship',
        checkId: 'internship',
        badge: true,
        badgeText: 236,
      },
      {
        id: 5,
        title: 'Temporary',
        checkId: 'temporary',
        badge: true,
        badgeText: 146,
      },
      {
        id: 6,
        title: 'Commission',
        checkId: 'commission-based',
        badge: true,
        badgeText: 25,
      },
    ],
  },
  {
    id: 2,
    title: 'Location',
    button: 'All Locations',
    class: 'location-checkbox',
    details: [
      {
        id: 6,
        title: 'New York',
        countryCode: 'NY',
        checkId: 'new-york',
        badge: true,
        badgeText: 399,
      },
      {
        id: 7,
        title: 'San Francisco',
        checkId: 'san-francisco',
        countryCode: 'CA',
        badge: true,
        badgeText: 252,
      },
      {
        id: 8,
        title: 'Washington',
        checkId: 'washington',
        countryCode: 'DC',
        badge: true,
        badgeText: 226,
      },
      {
        id: 9,
        title: 'Seattle',
        checkId: 'seattle',
        countryCode: 'WA',
        badge: true,
        badgeText: 242,
      },
      {
        id: 10,
        title: 'Chicago',
        checkId: 'chicago',
        countryCode: 'IL',
        badge: true,
        badgeText: 187,
      },
    ],
  },
  {
    id: 3,
    title: 'Job Title',
    button: 'All Job Title',
    details: [
      {
        id: 11,
        title: 'UI/Ux designer',
        checkId: 'ui-ux',
        badge: true,
        badgeText: 25,
      },
      {
        id: 12,
        title: 'Graphic designer',
        checkId: 'graphic',
        badge: true,
        badgeText: 10,
      },
      {
        id: 13,
        title: 'Front end developer',
        checkId: 'front-end',
        badge: true,
        badgeText: 15,
      },
      {
        id: 14,
        title: 'PHP developer',
        checkId: 'php',
        badge: true,
        badgeText: 42,
      },
      {
        id: 15,
        title: 'React Developer',
        checkId: 'react',
        badge: true,
        badgeText: 5,
      },
    ],
  },
  {
    id: 4,
    title: 'Industry',
    button: 'All Industries',
    details: [
      {
        id: 16,
        title: 'Computer Software',
        checkId: 'computer-software',
        badge: true,
        badgeText: 14,
      },
      {
        id: 17,
        title: 'IT Engineer',
        checkId: 'it',
        badge: true,
        badgeText: 10,
      },
      {
        id: 18,
        title: 'Service industry',
        checkId: 'service-industry',
        badge: true,
        badgeText: 20,
      },
      {
        id: 19,
        title: 'Accounting',
        checkId: 'accounting',
        badge: true,
        badgeText: 34,
      },
      {
        id: 20,
        title: 'Financial Services',
        checkId: 'financial-services',
        badge: true,
        badgeText: 5,
      },
    ],
  },
  {
    id: 5,
    title: 'Specific Skills',
    button: 'All Skills',
    details: [
      {
        id: 21,
        title: 'HTML,scss & sass',
        checkId: 'html-scss-sass',
        badge: false,
      },
      {
        id: 22,
        title: 'Javascript',
        checkId: 'javascript',
        badge: false,
      },
      {
        id: 23,
        title: 'Node.js',
        checkId: 'node',
        badge: false,
      },
      {
        id: 24,
        title: 'Gulp & Pug',
        checkId: 'gulp',
        badge: false,
      },
      {
        id: 25,
        title: 'Angular.js',
        checkId: 'angular',
        badge: false,
      },
    ],
  },
]

export const jobCards: JobCard[] = [
  {
    id: 1,
    rating: 5,
    image: 'job-search/1.jpg',
    title: 'UI/UX IT Frontend Developer',
    subTitle: '(L6) Salt Lake City, UT',
    description:
      'We are seeking a creative and skilled front-end engineer or designer with experience in accessibility to join our team. Three years of experience as a frontend engineer or in a related position is a minimum requirement for the ideal applicant. To build inclusive and user-friendly digital experiences, you will closely collaborate with other skilled team members.',
    tagTitle: 'New',
    ribbon: false,
  },
  {
    id: 2,
    rating: 4,
    image: 'job-search/2.jpg',
    title: 'React/React Native Developer',
    subTitle: 'San Diego, CA',
    description:
      'Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface',
    tagTitle: 'New',
    ribbon: false,
  },
  {
    id: 3,
    rating: 3,
    image: 'job-search/3.jpg',
    title: 'Senior UX designer',
    subTitle: 'Minneapolis, MN',
    description:
      'The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards',
    tag: false,
    ribbon: true,
    ribbonIcon: 'love',
    time: '2 days ago',
  },
  {
    id: 4,
    rating: 4,
    image: 'job-search/4.jpg',
    title: 'Front end web developer',
    subTitle: 'Cisco Lelystad, Netherlands',
    description:
      'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
  },
  {
    id: 5,
    rating: 3,
    image: 'job-search/5.jpg',
    title: 'Graphic designer',
    subTitle: 'Infosys Lelystad, Netherlands',
    description:
      'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
  },
  {
    id: 6,
    rating: 3,
    image: 'job-search/6.jpg',
    title: 'Designer, CRM',
    subTitle: 'Citrix Lelystad, Netherlands',
    description:
      'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.',
    tag: false,
    ribbon: false,
    ribbonIcon: '',
    time: '3 days ago',
  },
  {
    id: 7,
    rating: 4,
    image: 'job-search/2.jpg',
    title: 'React/React Native Developer',
    subTitle: 'San Diego, CA',
    description:
      'Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive',
    tag: false,
    ribbon: true,
    ribbonIcon: 'love',
    time: '5 days ago',
  },
  {
    id: 8,
    rating: 3,
    image: 'job-search/3.jpg',
    title: 'Senior UX designer',
    subTitle: 'Minneapolis, MN',
    description:
      'The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards',
    tag: false,
    ribbon: false,
    ribbonIcon: '',
    time: '5 days ago',
  },

  {
    id: 9,
    rating: 3,
    image: 'job-search/5.jpg',
    title: 'Graphic designer',
    subTitle: 'Infosys Lelystad, Netherlands',
    description:
      'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
  },
  {
    id: 10,
    rating: 3,
    image: 'job-search/6.jpg',
    title: 'Designer, CRM',
    subTitle: 'Citrix Lelystad, Netherlands',
    description:
      'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.',
    tag: false,
    ribbon: false,
    ribbonIcon: '',
    time: '3 days ago',
  },
  {
    id: 11,
    rating: 5,
    image: 'job-search/1.jpg',
    title: 'UI/UX IT Frontend Developer',
    subTitle: '(L6) Salt Lake City, UT',
    description:
      'We are seeking a creative and skilled front-end engineer or designer with experience in accessibility to join our team. Three years of experience as a frontend engineer or in a related position is a minimum requirement for the ideal applicant. To build inclusive and user-friendly digital experiences, you will closely collaborate with other skilled team members.',
    tagTitle: 'New',
    ribbon: false,
  },
  {
    id: 12,
    rating: 3,
    image: 'job-search/2.jpg',
    title: 'React/React Native Developer',
    subTitle: 'San Diego, CA',
    description:
      'Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface',
    tagTitle: 'New',
    ribbon: false,
  },
  {
    id: 13,
    rating: 4,
    image: 'job-search/4.jpg',
    title: 'Front end web developer',
    subTitle: 'Cisco Lelystad, Netherlands',
    description:
      'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
  },
  {
    id: 14,
    rating: 3,
    image: 'job-search/3.jpg',
    title: 'Senior UX designer',
    subTitle: 'Minneapolis, MN',
    description:
      'The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards',
    tag: false,
    ribbon: true,
    ribbonIcon: 'love',
    time: '2 days ago',
  },
  {
    id: 15,
    rating: 3,
    image: 'job-search/5.jpg',
    title: 'Graphic designer',
    subTitle: 'Infosys Lelystad, Netherlands',
    description:
      'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
  },
  {
    id: 16,
    rating: 3,
    image: 'job-search/6.jpg',
    title: 'Designer, CRM',
    subTitle: 'Citrix Lelystad, Netherlands',
    description:
      'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.',
    tag: false,
    ribbon: false,
    ribbonIcon: '',
    time: '3 days ago',
  },
  {
    id: 17,
    rating: 4,
    image: 'job-search/2.jpg',
    title: 'React/React Native Developer',
    subTitle: 'San Diego, CA',
    description:
      'Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive',
    tag: false,
    ribbon: true,
    ribbonIcon: 'love',
    time: '5 days ago',
  },
  {
    id: 18,
    rating: 3,
    image: 'job-search/3.jpg',
    title: 'Senior UX designer',
    subTitle: 'Minneapolis, MN',
    description:
      'The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards',
    tag: false,
    ribbon: false,
    ribbonIcon: '',
    time: '5 days ago',
  },
]

export const jobDetails: JobDetails = {
  image: 'job-search/1.jpg',
  mainTitle: 'Product Designer (UI/UX Designer)',
  subtitle: 'Endless - United States',
  rating: 5,
  sections: [
    {
      title: 'Job Description',
      content: [
        {
          description:
            'Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final  for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.',
        },
      ],
    },
    {
      title: 'Qualifications',
      content: [
        { description: 'Have shipped multiple iOS, Android, and/or web products' },
        { description: '5+ years UI/UX experience' },
        {
          description:
            'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles',
        },
        { description: 'Ability to autonomously pursue elegant solutions to open-ended problems' },
        { description: 'Comfort with ambiguity' },
        { description: 'Proven ability to create interactive prototypes' },
        {
          description:
            'Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization',
        },
        {
          description:
            'Strong written communication skills with ability to make transparent design documentation and client-facing presentations',
        },
        {
          description:
            'Ability to create and maintain flow charts, wire frames, prototypes, and mockups.',
        },
        { description: 'Ability to effectively work on more than one project at a time' },
        { description: 'Experience conducting user research and stakeholder interviews' },
        {
          description:
            'Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.',
        },
        { description: 'Bonus Considerations' },
      ],
    },
    {
      title: 'Agency experience',
      content: [
        { description: 'Experience working with Agile development teams' },
        { description: 'Experience with RITE method usability testing' },
        {
          description:
            'Experience in visual and motion design; ability to translate UX design into high quality visuals',
        },
        { description: 'Mastery of Sketch & InVision' },
        { description: 'Knowledge of mobile or front-end web programming' },
      ],
    },
    {
      title: 'Perks',
      content: [
        { description: 'Competitive pay' },
        { description: 'Competitive medical, dental, and vision insurance plans' },
        { description: 'Company-provided 401(k) plan' },
        { description: 'Paid vacation and sick time' },
        { description: 'Free snacks and beverages' },
      ],
    },
  ],
}

export const jobCardsDetails: JobCard[] = [
  {
    id: 1,
    rating: 4,
    image: 'job-search/2.jpg',
    title: 'React/React Native Developer',
    subTitle: 'San Diego, CA',
    description:
      'Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    tagTitle: 'New',
    ribbon: false,
    class: 'col-xl-6 xl-100',
  },
  {
    id: 2,
    rating: 4,
    image: 'job-search/4.jpg',
    title: 'Front end web developer',
    subTitle: 'Cisco Lelystad, Netherlands',
    description:
      'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
    class: 'col-xl-6 xl-100',
  },
  {
    id: 3,
    rating: 3,
    image: 'job-search/5.jpg',
    title: 'Graphic designer',
    subTitle: 'Infosys Lelystad, Netherlands',
    description:
      'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
    class: 'col-xl-6 xl-100',
  },
  {
    id: 4,
    rating: 3,
    image: 'job-search/6.jpg',
    title: 'Designer, CRM',
    subTitle: 'Citrix Lelystad, Netherlands',
    description:
      'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.',
    tag: false,
    ribbon: false,
    time: '3 days ago',
    class: 'col-xl-6 xl-100',
  },
  {
    id: 5,
    rating: 3,
    image: 'job-search/3.jpg',
    title: 'Senior UX designer',
    subTitle: 'Sutherland Lelystad, Netherlands',
    description:
      'Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.',
    tag: false,
    ribbon: false,
    time: '5 days ago',
    class: 'col-xl-12',
  },
]
