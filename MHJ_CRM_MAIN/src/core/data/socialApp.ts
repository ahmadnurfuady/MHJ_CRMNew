import type { Tabs } from '@/types/common'
import type { AccordionTabs, Friend, MyProfile, Photos, UserPost } from '@/types/socialApp'

export const socialAppTab: Tabs[] = [
  {
    id: 1,
    title: 'Timeline',
    value: 'timeline',
  },
  {
    id: 2,
    title: 'About',
    value: 'about',
  },
  {
    id: 3,
    title: 'Friends',
    value: 'friends',
  },
  {
    id: 4,
    title: 'Photos',
    value: 'photos',
  },
]

export const myProfile: MyProfile = {
  name: 'ElANA',
  profile: 'user/1.jpg',
  designation: 'General Manager',
  introduction: `<span class="mb-2 d-block">About Me :</span>
                    <p> Hi, I’m elana, I’m 30 and I work as a web designer for the “Daydreams” Agency in pier 56. </p>
                    <span class="mb-2 d-block">Favorite TV Shows :</span>
                    <p> Breaking Good, RedDevil, People of Interest, The Running Dead,  Found, American Guy. </p>
                    <span class="mb-2 d-block">Favorite Music Bands :</span>
                    <p> Breaking Good, RedDevil, People of Interest, The Running Dead,  Found, American Guy. </p>`,
  message: 4,
  notification: 6,
  totalLikes: 890,
  thisWeekLikes: 35,
  postImage: 'social-app/timeline-3.png',
  likedBy: [
    { name: 'Johny Waston', profile: 'user/3.jpg' },
    { name: 'Andew Jon', profile: 'user/5.jpg' },
    { name: 'ELANA', profile: 'user/1.jpg' },
    { name: 'Bucky Barnes', profile: 'user/2.jpg' },
    { name: 'Jason Borne', profile: 'user/8.jpg' },
    { name: 'Comeren Diaz', profile: 'user/11.png' },
  ],
  socialNetworks: [
    { icon: 'fa-brands fa-facebook-f', platformClass: 'fb', platformName: 'Facebook' },
    { icon: 'fa-brands fa-x-twitter', platformClass: 'twitter mx-2', platformName: 'twitter' },
    { icon: 'fa-brands fa-dribbble', platformClass: 'dribble', platformName: 'dribble' },
  ],
  latestPhotos: [
    { image: 'social-app/post-1.png' },
    { image: 'social-app/post-2.png' },
    { image: 'social-app/post-3.png' },
    { image: 'social-app/post-4.png' },
    { image: 'social-app/post-5.png' },
    { image: 'social-app/post-6.png' },
    { image: 'social-app/post-7.png' },
    { image: 'social-app/post-8.png' },
    { image: 'social-app/post-9.png' },
  ],
  hobbiesInterest: [
    {
      id: 1,
      title: 'Hobbies',
      description:
        'I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.',
    },
    {
      id: 2,
      title: 'Favourite Music Bands / Artists',
      description: 'Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.',
    },
    {
      id: 3,
      title: 'Favourite TV Shows',
      description:
        'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.',
    },
    {
      id: 4,
      title: 'Favourite Books',
      description:
        'The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.',
    },
    {
      id: 5,
      title: 'Favourite Movies',
      description: 'Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.',
    },
    {
      id: 6,
      title: 'Favourite Writers',
      description:
        'Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.',
    },
    {
      id: 7,
      title: 'Favourite Games',
      description:
        'The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.',
    },
    {
      id: 8,
      title: 'Other Interests',
      description: 'Swimming, Surfing, Smalabo Diving, Anime, Photography, Tattoos, Street Art.',
    },
  ],
  eductionEmployment: [
    {
      id: 1,
      title: 'The New College of Design',
      year: '2001 - 2006',
      description:
        'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.',
    },
    {
      id: 2,
      title: 'Digital Design Intern',
      year: '2006-2008',
      description:
        'Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.',
    },
    {
      id: 3,
      title: 'Rembrandt Institute',
      year: '2008',
      description: 'Five months Digital Illustration course. Professor: Leonardo Stagg.',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      year: '2001 - 2006',
      description:
        'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.',
    },
    {
      id: 5,
      title: 'The Digital College',
      year: '2010',
      description:
        '6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle',
    },
    {
      id: 6,
      title: 'The New College of Design',
      year: '2008 - 2013',
      description: 'UI/UX Designer for the “Daydreams” agency.',
    },
  ],
  activityLog: [
    {
      icon: 'user-plus',
      activity: 'Posts can be created, edited, or deleted.',
      date: '25 Jan',
    },
    {
      icon: 'thumbs-up',
      activity: 'Engagement metrics for a post, such as shares, comments, or likes.',
      date: '25 Jan',
    },
    {
      icon: 'thumbs-up',
      activity: 'Posts that have been reported or flagged.',
      date: '25 Jan',
    },
    {
      icon: 'user-plus',
      activity:
        'User profile modifications (such as changing bios, personal information, or profile photos).',
      date: '25 Jan',
    },
    {
      icon: 'user-plus',
      activity: 'If your app allows verified profiles, it will update the verification status.',
      date: '25 Jan',
    },
    {
      icon: 'user-plus',
      activity: 'Friend requests were sent and accepted.',
      date: '25 Jan',
    },
    {
      icon: 'message-square',
      activity: "The user's password was successfully altered.",
      date: '25 December',
    },
    {
      icon: 'message-square',
      activity: 'The user looked over the logs of recent activities.',
      date: '25 December',
    },
    {
      icon: 'user-plus',
      activity: 'Alerts about users who have been unfriended or are new connections.',
      date: '25 December',
    },
    {
      icon: 'user-plus',
      activity: 'User enrolled in the group "Developer Team".',
      date: '25 December',
    },
    {
      icon: 'message-square',
      activity: 'Activity logs that the user exported to a CSV file.',
      date: '25 December',
    },
    {
      icon: 'message-square',
      activity: "The user's inactive session ended.",
      date: '25 December',
    },
    {
      icon: 'thumbs-up',
      activity: 'New event that the user added to the calendar.',
      date: '8 September',
    },
    {
      icon: 'message-square',
      activity: 'The user changed the location settings to reflect New York.',
      date: '8 September',
    },
    {
      icon: 'message-square',
      activity: 'A new functionality for mobile alerts.',
      date: '8 September',
    },
    {
      icon: 'message-square',
      activity: "The user's inactive session ended.",
      date: '8 September',
    },
    {
      icon: 'message-square',
      activity: 'The phone number has been updated to (555) 123-4567.',
      date: '8 September',
    },
    {
      icon: 'user-plus',
      activity: 'Andew Jon became friends with comeren Diaz.',
      date: '8 September',
    },
    {
      icon: 'thumbs-up',
      activity: 'Participation in group chats, such as entering or exiting a group.',
      date: '6 June',
    },
    {
      icon: 'user-plus',
      activity: 'Messages sent or received (only timestamps and other metadata, not content).',
      date: '6 June',
    },
    {
      icon: 'thumbs-up',
      activity: 'Log of the alerts that users have received.',
      date: '6 June',
    },
    {
      icon: 'user-plus',
      activity: 'Records of suggested stuff that was watched.',
      date: '6 June',
    },
    {
      icon: 'user-plus',
      activity: 'Views, comments, and reactions on stories are examples of interaction metrics.',
      date: '6 June',
    },
    {
      icon: 'message-square',
      activity: 'The user disregarded a system alert for a fresh upgrade.',
      date: '6 June',
    },
  ],
}

export const friends: Friend[] = [
  {
    id: 1,
    name: 'Bucky Barnes',
    profile: 'user/2.png',
    email: 'bucky@gmail.com',
    status: 'online',
    isFollower: true,
    isFollowing: false,
    lastActivityTime: '20 min',
    userProfile: 'Aliya Steele',
  },
  {
    id: 2,
    name: 'Sarah Loren',
    profile: 'user/10.jpg',
    email: 'sarah@gmail.com',
    status: 'busy',
    isFollower: false,
    isFollowing: true,
  },
  {
    id: 3,
    name: 'Jason Borne',
    profile: 'user/6.jpg',
    email: 'jasonb@gmail.com',
    status: 'offline',
    isFollower: true,
    isFollowing: false,
    lastActivityTime: '1 hour',
    userProfile: 'Max Burton',
  },
  {
    id: 4,
    name: 'Comeren Diaz',
    profile: 'user/8.jpg',
    email: 'comere@gmail.com',
    status: 'offline',
    isFollower: false,
    isFollowing: true,
    lastActivityTime: '',
    userProfile: '',
  },
  {
    id: 5,
    name: 'Andew Jon',
    profile: 'user/14.png',
    email: 'andrewj@gmail.com',
    status: 'online',
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 6,
    name: 'Johny Waston',
    profile: 'user/4.jpg',
    email: 'johny@gmail.com',
    status: 'busy',
    isFollower: false,
    isFollowing: true,
    lastActivityTime: '1 days',
    userProfile: 'Dalary Ayala',
  },
  {
    id: 7,
    name: 'Johny William',
    profile: 'user/3.png',
    email: 'johnyw@gmail.com',
    status: 'offline',
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 8,
    name: 'Brock Lee',
    profile: 'user/3.jpg',
    email: 'brock@gmail.com',
    status: 'busy',
    isFollower: false,
    isFollowing: true,
    lastActivityTime: '2 days',
    userProfile: 'Clark Byrd',
  },
  {
    id: 9,
    name: 'Gracie Ryan',
    profile: 'user/3.png',
    email: 'graciew@gmail.com',
    status: 'online',
    isFollower: true,
    isFollowing: false,
  },
]

export const userPost: UserPost[] = [
  {
    id: 1,
    userName: 'ELANA',
    userProfile: 'user/1.jpg',
    postDate: 'January, 12,2024',
    postImage: 'social-app/timeline-1.png',
    description:
      'She is a certified personal trainer and nutritionist who uses her blog as a place to share cooking ideas, training photos, and inspirational messages for other fitness fans.',
    comment: 10,
    share: 20,
    comments: [
      {
        id: 1,
        userName: 'ELANA',
        userProfile: 'user/1.jpg',
        comment:
          'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
        time: '1 Year',
      },
      {
        id: 2,
        userName: 'Alexendra Dhadio',
        userProfile: 'user/2.png',
        comment:
          'yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)',
        time: '1 Month',
        isReply: true,
      },
      {
        id: 3,
        userName: 'Olivia Jon',
        userProfile: 'user/3.png',
        comment:
          'i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus',
        time: '15 Days',
        isReply: true,
      },
      {
        id: 4,
        userName: 'ELANA',
        userProfile: 'user/1.jpg',
        comment:
          'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
        time: '1 Year',
      },
    ],
  },
  {
    id: 2,
    userName: 'ELANA',
    userProfile: 'user/1.jpg',
    postDate: 'January, 12,2019',
    postImage: 'social-app/timeline-2.png',
    description:
      'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
    comment: 10,
    share: 20,
    comments: [
      {
        id: 1,
        userName: 'ELANA',
        userProfile: 'user/1.jpg',
        comment:
          'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
        time: '1 Year',
      },
      {
        id: 2,
        userName: 'ELANA',
        userProfile: 'user/1.jpg',
        comment:
          'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
        time: '1 Year',
      },
    ],
  },
]

export const photos: Photos[] = [
  {
    id: 1,
    userName: 'Johan Deo',
    description:
      "An admin theme is a visually beautiful and practical design template created especially for a website's or application's backend.",
    srcUrl: 'lightgallry/01.jpg',
    previewUrl: 'big-lightgallry/01.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 2,
    userName: 'Dev John',
    description:
      'Effectively manage users with our user-friendly dashboard, which includes customisable widgets and real-time data metrics.',
    srcUrl: 'lightgallry/02.jpg',
    previewUrl: 'big-lightgallry/02.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 3,
    userName: 'Gwen Rice',
    description:
      'With just a few clicks, create thorough reports that provide insightful information about your business activities.',
    srcUrl: 'lightgallry/03.jpg',
    previewUrl: 'big-lightgallry/03.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 4,
    userName: 'Comeren Diaz',
    description:
      'With a personalised activity feed that includes posts, images, and updates, you can stay in touch with friends and follow trends.',
    srcUrl: 'lightgallry/04.jpg',
    previewUrl: 'big-lightgallry/04.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 5,
    userName: 'Leo Macias',
    description:
      'Customise your accounts with cover photographs, biographies, and profile pictures to express who you are.',
    srcUrl: 'lightgallry/05.jpg',
    previewUrl: 'big-lightgallry/05.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 6,
    userName: 'Sarah Loren',
    description:
      'Use our built-in live streaming function to go live and share experiences with your followers in real time.',
    srcUrl: 'lightgallry/06.jpg',
    previewUrl: 'big-lightgallry/06.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 7,
    userName: 'Andew Jon',
    description:
      'Gather and handle user reviews straight from the administrative dashboard to ensure ongoing development.',
    srcUrl: 'lightgallry/07.jpg',
    previewUrl: 'big-lightgallry/07.jpg',
    likes: '2.4K',
    comment: 575,
  },
  {
    id: 7,
    userName: 'Bucky Barnes',
    description:
      'With scheduled backup and simple restore options for important data, you can guarantee data security.',
    srcUrl: 'lightgallry/08.jpg',
    previewUrl: 'big-lightgallry/08.jpg',
    likes: '2.4K',
    comment: 575,
  },
]

export const socialAppLeftPanelAccordion: Tabs[] = [
  {
    id: 1,
    title: 'My Profile',
    value: 'my_profile',
  },
  {
    id: 2,
    title: 'Mutual Friends',
    value: 'mutual_friends',
  },
  {
    id: 3,
    title: 'Activity Feed',
    value: 'activity_feed',
  },
]

export const socialAppRightPanelAccordion: AccordionTabs[] = [
  {
    id: 1,
    title: 'Profile Intro',
    value: 'profile_intro',
    class: 'col-xl-12 xl-50 box-col-6 order-xxl-i col-lg-6',
  },
  {
    id: 2,
    title: 'Followers',
    value: 'followers',
    class: 'col-xl-12 xl-30 box-col-6 order-xxl-iii col-lg-4 col-md-6',
  },
  {
    id: 3,
    title: 'Followings',
    value: 'followings',
    class: 'col-xl-12 xl-30 box-col-6 order-xxl-iv col-lg-4 col-md-6',
  },
  {
    id: 4,
    title: 'Latest Photos',
    value: 'latest_photos',
    class: 'col-xl-12 xl-40 box-col-6 order-xxl-v col-lg-4',
  },
  {
    id: 5,
    title: 'Friends',
    value: 'friends',
    class: 'col-xl-12 box-col-6 order-xxl-vi',
  },
]
