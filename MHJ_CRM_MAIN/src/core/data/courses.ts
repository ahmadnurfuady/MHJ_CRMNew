import type { Comments } from '@/types/blog'
import type { CourseFilter, CourseList } from '@/types/courses'

export const courseSidebar: CourseFilter[] = [
  {
    id: 1,
    title: 'Find Course',
    class: 'filter-cards-view animate-chk',
    button: 'Filter',
    search: true,
    details: [
      {
        id: 1,
        subTitle: 'Categories',
        class: 'checkbox-animated',
        type: 'checkbox',
        item: [
          {
            id: 1,
            title: 'Accounting',
            checkId: 'chk-ani',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 2,
            title: 'Design',
            checkId: 'chk-ani0',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 3,
            title: 'Development',
            checkId: 'chk-ani1',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 4,
            title: 'Management',
            checkId: 'chk-ani2',
            class: 'checkbox_animated',
            badge: false,
          },
        ],
      },
      {
        id: 2,
        subTitle: 'Duration',
        class: 'checkbox-animated mt-0',
        type: 'checkbox',
        item: [
          {
            id: 5,
            title: ' 0-50 hours',
            checkId: 'chk-ani6',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 6,
            title: ' 50-100 hours',
            checkId: 'chk-ani7',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 7,
            title: ' 100+ hours',
            checkId: 'chk-ani8',
            class: 'checkbox_animated',
            badge: false,
          },
        ],
      },
      {
        id: 3,
        subTitle: 'Price',
        class: 'checkbox-animated mt-0',
        type: 'radio',
        item: [
          {
            id: 8,
            title: 'All Courses',
            checkId: 'edo-ani',
            class: 'radio_animated',
            badge: false,
          },
          {
            id: 9,
            title: 'Paid Courses',
            checkId: 'edo-ani1',
            class: 'radio_animated',
            badge: false,
          },
          {
            id: 10,
            title: ' Free Courses',
            checkId: 'edo-ani2',
            class: 'radio_animated',
            badge: false,
          },
        ],
      },
      {
        id: 4,
        subTitle: 'Status',
        class: 'checkbox-animated mt-0',
        type: 'checkbox',
        item: [
          {
            id: 11,
            title: ' Registration',
            checkId: 'chk-ani3',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 12,
            title: '  Progress',
            checkId: 'chk-ani4',
            class: 'checkbox_animated',
            badge: false,
          },
          {
            id: 13,
            title: ' Completed',
            checkId: 'chk-ani5',
            class: 'checkbox_animated',
            badge: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Categories',
    class: 'collapse px-0 show',
    details: [
      {
        id: 2,
        subTitle: 'Design',
        class: 'categories',
        item: [
          {
            id: 14,
            title: 'UI Design',
            badge: true,
            badgeText: 28,
          },
          {
            id: 15,
            title: 'UX Design',
            badge: true,
            badgeText: 35,
          },
          {
            id: 16,
            title: 'Interface Design',
            badge: true,
            badgeText: 17,
          },
          {
            id: 17,
            title: 'User Experience',
            badge: true,
            badgeText: 26,
          },
        ],
      },
      {
        id: 6,
        subTitle: 'Development',
        class: 'categories pt-0',
        item: [
          {
            id: 18,
            title: 'Frontend Development',
            badge: true,
            badgeText: 48,
          },
          {
            id: 19,
            title: 'Backend Development',
            badge: true,
            badgeText: 19,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Upcoming Courses',
    class: 'upcoming-course',
    details: [
      {
        id: 20,
        title: 'UX Development',
        createdBy: 'Howard Moore',
        class: 'd-flex',
        badge: true,
        date: 18,
        month: 'Dec',
        rate: 4.5,
        rating: true,
      },
      {
        id: 21,
        title: 'Business Analyst',
        createdBy: 'Crystal Markey',
        class: 'd-flex',
        badge: true,
        date: 28,
        month: 'Dec',
        rate: 5,
        rating: true,
      },
      {
        id: 22,
        title: 'Web Development',
        class: 'd-flex',
        createdBy: 'Jerry Reel',
        badge: true,
        date: 5,
        month: 'Jan',
        rate: 4,
        rating: true,
      },
    ],
  },
]

export const courseList: CourseList[] = [
  {
    id: 1,
    image: 'faq/1.jpg',
    date: '05',
    year: 'January 2024',
    title: 'Java Language',
    createdBy: 'Paige Turner',
    hits: '15',
    description:
      'Learning new skills that will position you for success in the future is crucial as the workplace changes. Even while learning new techniques, methods, and approaches might be difficult, doing so is crucial for increasing your economic mobility and securing stable',
  },
  {
    id: 2,
    image: 'faq/2.jpg',
    date: '10',
    year: ' March 2024',
    title: 'Web Development',
    createdBy: ' Lea Odom',
    hits: '34',
    description:
      'Websites that are both aesthetically pleasing and user-friendly are the work of eb designers. They create layouts, visuals, and interactive components by fusing technical expertise with creative imagination. To make sure websites perform seamlessly across all',
  },
  {
    id: 3,
    image: 'faq/3.jpg',
    date: '9',
    year: ' April 2018',
    createdBy: 'Admin',
    hits: '0',
    title: " One line at a time, a web developer's code has the power to change the world.",
  },
  {
    id: 4,
    image: 'faq/4.jpg',
    date: '12 ',
    year: 'Oct 2019',
    createdBy: 'Admin',
    hits: '0',
    title: 'The only thing you can purchase that increases your wealth is travel.',
  },
  {
    id: 5,
    image: 'faq/1.jpg',
    date: '23',
    year: 'July 2019',
    createdBy: 'Admin',
    hits: '0',
    title: 'Live simply, move lightly, and radiate and embody light. ',
  },
  {
    id: 6,
    image: 'faq/2.jpg',
    date: '10',
    year: 'Sep 2020',
    createdBy: 'Admin',
    hits: '0',
    title: 'Your voice becomes your most powerful asset in the blogging world.',
  },
  {
    id: 7,
    image: 'faq/1.jpg',
    date: '12',
    year: 'Jan 2021',
    createdBy: 'Admin',
    hits: '0',
    title: 'Blogging is the platform to leave a digital footprint on the sands of time.',
  },
  {
    id: 8,
    image: 'faq/3.jpg',
    date: '8',
    year: 'April 2023',
    createdBy: 'Admin',
    hits: '0',
    title: "The digital era's pulse, blogging connects people's hearts and brains.",
  },
]

export const courseDetails = {
  image: 'faq/learning-1.png',
  date: 25,
  year: 'July 2018',
  createdBy: 'William Jennings',
  hits: '02',
  comment: 598,
  text: ' Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief. Internet. ',
  description: [
    {
      title:
        'Knowledge may be characterized as factual awareness or as useful skills, and it can also relate to familiarity with things or circumstances. The term "knowledge of facts," also known as "propositional knowledge," refers to a real belief that may be distinguished from an opinion or educated guess by the use of evidence. Although there is broad consensus among philosophers that it is a type of genuine belief, many philosophical debates centre on the',
    },
    {
      title:
        "Various processes can be used to create knowledge. Perception, which is the use of the five senses, is the most significant source. Many theories also regard introspection as a way of learning about one's own mental states rather than about external physical things. Memory, logical intuition, inference, and witness are some more sources that are frequently brought up. Some of these sources, according to foundationalism, are fundamental in the sense that",
    },
  ],
}

export const corsesComments: Comments[] = [
  {
    id: 1,
    image: 'blog/comment.jpg',
    name: 'Selena Levy',
    designation: 'Designer',
    hits: 2,
    comments: 598,
    description:
      'This well put-together theory urges designers to provide their works creative, clear explanations so that spectators may comprehend and, in a sense, "read" them at all times.',
  },
  {
    id: 2,
    image: 'blog/9.jpg',
    name: 'Yara Bravo',
    designation: 'Designer',
    hits: 2,
    comments: 398,
    description:
      "Web design is a broad field, thus there are many topics to discuss and factors to take into account. It suggests that the look, layout, overall ambience, content, user experience, and accessibility have all been successfully integrated. To satisfy the timeline and the clients' expectations, hundreds of different yet related jobs must be completed.",
    reply: true,
  },
  {
    id: 3,
    image: 'blog/4.jpg',
    name: 'Fox Rios',
    designation: 'Designer',
    hits: 2,
    comments: 598,
    description:
      'They meticulously plan each shot, considering factors such as lighting, angles, and props to convey the desired message effectively. Commercial photographers are adept at using their technical expertise to highlight the unique features and qualities of their subjects, often manipulating lighting and post-processing techniques to achieve the desired aesthetic.',
  },
]
