import { primaryColor } from './common';
export const projectDetailsTab = [
    {
        id: 1,
        title: 'Summary',
        value: 'summary',
        icon: 'project-search',
    },
    {
        id: 2,
        title: 'Status',
        value: 'status',
        icon: 'project-target',
    },
    {
        id: 3,
        title: 'Finance',
        value: 'finance',
        icon: 'project-badget',
    },
    {
        id: 4,
        title: 'Team',
        value: 'team',
        icon: 'project-users',
    },
    {
        id: 5,
        title: 'Attachment',
        value: 'attachment',
        icon: 'stroke-files',
    },
    {
        id: 6,
        title: 'Activity',
        value: 'activity',
        icon: 'stroke-activity',
    },
];
export const projectDetailsHeader = {
    title: 'Dashboard',
    description: 'Create a brand logo design for a admin.',
    projectStatus: 'In Progress',
    createdDate: '10 Jul, 2024',
    dueDate: '10 Aug, 2024',
    allTask: 24,
    customers: [
        { profile: 'dashboard/user/1.jpg', name: 'Marley Ford' },
        { profile: 'dashboard/user/2.jpg', name: 'Gray Curran' },
        { name: 'Andrew' },
        { profile: 'dashboard/user/4.jpg', name: 'Yarrow  Wix' },
        { profile: 'dashboard/user/7.jpg', name: 'Sarah Wilson' },
        { name: 'Marley Ford' },
        { profile: 'dashboard/user/9.jpg', name: 'Richard Taylor' },
        { profile: 'dashboard/user/11.jpg', name: 'Linda Brown' },
        { profile: 'dashboard/user/12.jpg', name: 'Jessica Anderson' },
        { profile: 'dashboard/user/8.jpg', name: 'Thomas Jones' },
        { name: 'Gray Curran' },
        { name: 'Sarah Wilson' },
        { name: 'Linda Brown' },
    ],
};
export const projectDetails = {
    projectSummary: {
        summary: {
            title: 'Project Summary',
            description: "The proposal's project summary is among its most crucial sections. It is probably the first thing a reviewer will look at, so here is your best chance to catch their attention.",
            sortDescription: 'Due date exceeded for 24 projects',
            creationDate: '14 March, 2024',
            dueDate: '30 April, 2024',
            priority: 'High',
            status: 'In progress',
            resource: {
                title: 'Projects Webflow',
                fileSize: '678 KB',
                fileType: 'PDF',
                file: '../files/text_file.pdf',
            },
            chartSeries: [70, 80, 92],
            chartDetails: {
                chart: {
                    type: 'radialBar',
                    stacked: false,
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: true,
                                offsetY: -10,
                            },
                            value: {
                                offsetY: -5,
                                fontSize: '12px',
                            },
                            total: {
                                show: true,
                                fontSize: '11px',
                                fontFamily: 'Rubik, sans-serif',
                                fontWeight: 500,
                                label: '80%',
                                formatter: () => 'Completed',
                            },
                        },
                        barLabels: {
                            enabled: true,
                            useSeriesColors: false,
                            fontSize: '12px',
                            formatter: function (seriesName, opts) {
                                return (seriesName + ':  ' + (opts?.w?.globals?.series?.[opts?.seriesIndex] ?? ''));
                            },
                        },
                    },
                },
                colors: ['#006666', '#FE6A49', '#FFAE1A'],
                labels: ['Pending', 'In Progress', 'Completed'],
                legend: {
                    show: false,
                },
                responsive: [
                    {
                        breakpoint: 1675,
                        options: {
                            chart: {
                                offsetX: 10,
                            },
                        },
                    },
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                show: false,
                            },
                        },
                    },
                ],
            },
        },
        todoList: [
            {
                id: 1,
                title: 'Establish a project plan',
                description: 'Divide the project manageable phases',
            },
            {
                id: 2,
                title: 'Gathering Info',
                description: 'Establish a budget for project costs',
            },
            {
                id: 3,
                title: 'Track & keep an eye on progress',
                description: 'Development task',
            },
            {
                id: 4,
                title: 'Project Termination',
                description: 'Records and files for upcoming use',
            },
        ],
        pendingProject: [
            {
                id: 1,
                projectName: 'Terraform',
                projectHeadName: 'Eleanor Pena',
                projectHeadEmail: 'Elea.pena@crzq7.edu',
                projectHeadProfile: 'dashboard/user/3.jpg',
                priority: 'High',
                dueDate: '15,May 2024',
                status: 'In Progress',
                color: 'success',
            },
            {
                id: 2,
                projectName: 'GearVibe',
                projectHeadName: 'Mae Golden',
                projectHeadEmail: 'mae.golden@crz3q.edu',
                projectHeadProfile: 'dashboard/user/2.jpg',
                priority: 'Medium',
                dueDate: '10,June 2024',
                status: 'Pending',
                color: 'warning',
            },
            {
                id: 3,
                projectName: 'CloudCraze',
                projectHeadName: 'Emily Park',
                projectHeadEmail: 'emily.park@crezq4.edu',
                projectHeadProfile: 'dashboard/user/1.jpg',
                priority: 'Low',
                dueDate: '16,May 2024',
                status: 'Pending',
                color: 'warning',
            },
            {
                id: 4,
                projectName: 'PrimePulse',
                projectHeadName: 'Jacob Jones',
                projectHeadEmail: 'jacob.jonesl@crzd3.edu',
                projectHeadProfile: 'dashboard/user/4.jpg',
                priority: 'High',
                dueDate: '02,Nov 2024',
                status: 'In Progress',
                color: 'success',
            },
            {
                id: 5,
                projectName: 'ShiftSwift',
                projectHeadName: 'Robert Fox',
                projectHeadEmail: 'robert.fox@crzs2.edu',
                projectHeadProfile: 'dashboard/user/9.jpg',
                priority: 'Medium',
                dueDate: '06,Dec 2024',
                status: 'In Progress',
                color: 'success',
            },
            {
                id: 6,
                projectName: 'Solar Sphere',
                projectHeadName: 'Eriko Fonsa',
                projectHeadEmail: 'eriko.fonsa@crzq8.edu',
                projectHeadProfile: 'dashboard/user/4.jpg',
                priority: 'High',
                dueDate: '17,Feb 2024',
                status: 'In Progress',
                color: 'success',
            },
            {
                id: 7,
                projectName: 'Grow Green',
                projectHeadName: 'Cody Fisher',
                projectHeadEmail: 'cody.fisher@crz3r.edu',
                projectHeadProfile: 'dashboard/user/5.jpg',
                priority: 'Low',
                dueDate: '06,Mar 2024',
                status: 'Pending',
                color: 'warning',
            },
            {
                id: 8,
                projectName: 'Green Horizon',
                projectHeadName: 'Alexis Taylor',
                projectHeadEmail: 'alexis.taylor@crzf8.edu',
                projectHeadProfile: 'dashboard/user/6.jpg',
                priority: 'High',
                dueDate: '03,Apr 2024',
                status: 'In Progress',
                color: 'success',
            },
        ],
        taskOverviewChart: {
            title: 'Task Overview',
            sortDescription: 'All 209 Task Completed',
            series: [
                {
                    name: 'Incomplete',
                    data: [78, 55, 55, 22, 22, 37, 37, 51, 51, 32, 32, 18],
                },
                {
                    name: 'Completed',
                    data: [3, 22, 42, 42, 33, 32, 18, 18, 48, 48, 70, 70],
                },
            ],
            chartOptions: {
                chart: {
                    type: 'area',
                    height: 363,
                    toolbar: {
                        show: false,
                    },
                    dropShadow: {
                        enabled: true,
                        top: 8,
                        left: 0,
                        blur: 6,
                        // color: ["#7366FF", "#54BA4A"],
                        opacity: 0.4,
                    },
                },
                stroke: {
                    // curve: "monotoneCubic",
                    lineCap: 'butt',
                    width: 2,
                },
                xaxis: {
                    type: 'category',
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'July',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    tickAmount: 12,
                    labels: {
                        style: {
                            colors: 'var(--chart-text-color)',
                            fontSize: '12px',
                            fontFamily: 'Rubik, sans-serif',
                            fontWeight: 400,
                        },
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                grid: {
                    show: true,
                    borderColor: 'rgba(230, 233, 235, 1)',
                    strokeDashArray: 3,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                },
                yaxis: {
                    min: 0,
                    max: 95,
                    tickAmount: 6,
                    labels: {
                        style: {
                            colors: 'rgba(82, 82, 108, 0.8)',
                            fontSize: '12px',
                            fontFamily: 'Rubik, sans-serif',
                            fontWeight: 400,
                        },
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                colors: [primaryColor, '#65c15c'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: 'vertical',
                        shadeIntensity: 0,
                        inverseColors: true,
                        opacityFrom: 0,
                        opacityTo: 0,
                        stops: [0, 100],
                    },
                },
                markers: {
                    discrete: [
                        {
                            seriesIndex: 0,
                            dataPointIndex: 3,
                            fillColor: '#7064F5',
                            strokeColor: 'var(--white)',
                            size: 5,
                        },
                        {
                            seriesIndex: 1,
                            dataPointIndex: 3,
                            fillColor: '#54BA4A',
                            strokeColor: 'var(--white)',
                            size: 5,
                        },
                    ],
                    hover: {
                        size: 6,
                        sizeOffset: 0,
                    },
                },
                responsive: [
                    {
                        breakpoint: 1875,
                        options: {
                            xaxis: {
                                tickAmount: 6,
                            },
                        },
                    },
                    {
                        breakpoint: 1661,
                        options: {
                            chart: {
                                height: 345,
                            },
                        },
                    },
                    {
                        breakpoint: 1400,
                        options: {
                            chart: {
                                height: 225,
                            },
                        },
                    },
                ],
            },
        },
        recentActivity: {
            title: 'Recent Activity',
            date: '23, April 2024',
            activities: [
                {
                    date: '24',
                    day: 'Su',
                    activity: [
                        {
                            id: 1,
                            title: 'Make a new landing page',
                            customerName: 'Cody Fisher',
                            time: '02:00',
                            createdTime: '10 min ago',
                        },
                        {
                            id: 2,
                            title: 'Client visit',
                            customerName: 'Marvin Lie',
                            time: '05:00',
                            createdTime: '12 min ago',
                        },
                        {
                            id: 3,
                            title: 'Email marketing automation',
                            customerName: 'Emily Park',
                            time: '08:00',
                            createdTime: '18 min ago',
                        },
                    ],
                },
                {
                    date: '25',
                    day: 'Mo',
                    activity: [
                        {
                            id: 1,
                            title: 'Marketing and client meeting',
                            customerName: 'Caleb Riv',
                            time: '08:00',
                            createdTime: '11 min ago',
                        },
                        {
                            id: 2,
                            title: 'Make a creating an account profile',
                            customerName: 'Nareha Ail',
                            time: '10:00',
                            createdTime: '18 min ago',
                        },
                        {
                            id: 3,
                            title: 'Web development and ui/ ux design',
                            customerName: 'Sneha Shah',
                            time: '13:00',
                            createdTime: '22 min ago',
                        },
                        {
                            id: 4,
                            title: 'Brand Logo design',
                            customerName: 'Manish Pie',
                            time: '15:30',
                            createdTime: '28 min ago',
                        },
                    ],
                },
                {
                    date: '26',
                    day: 'Tu',
                    activity: [
                        {
                            id: 1,
                            title: 'Social media graphic design & ads',
                            customerName: 'Caryl Kauth',
                            time: '02:45',
                            createdTime: '02 min ago',
                        },
                        {
                            id: 2,
                            title: 'Website usability testing',
                            customerName: 'Alexis Taylor',
                            time: '07:30',
                            createdTime: '05 min ago',
                        },
                        {
                            id: 3,
                            title: 'SEO optimization',
                            customerName: 'Eriko Fonsa',
                            time: '11:50',
                            createdTime: '08 min ago',
                        },
                    ],
                },
                {
                    date: '27',
                    day: 'We',
                    activity: [
                        {
                            id: 1,
                            title: 'Analyzing competitor strategies',
                            customerName: 'Jacob Jones',
                            time: '01:20',
                            createdTime: '06 min ago',
                        },
                        {
                            id: 2,
                            title: 'Lead generation',
                            customerName: 'Lily Mccoy',
                            time: '03:00',
                            createdTime: '12 min ago',
                        },
                        {
                            id: 3,
                            title: 'Prototypes for user feedback',
                            customerName: 'Robert Fox',
                            time: '07:50',
                            createdTime: '18 min ago',
                        },
                        {
                            id: 4,
                            title: 'Brand promotion',
                            customerName: 'Fran Loain',
                            time: '02:10',
                            createdTime: '20 min ago',
                        },
                    ],
                },
                {
                    date: '28',
                    day: 'Thu',
                    activity: [
                        {
                            id: 1,
                            title: 'Website chatbot setup',
                            customerName: 'Loie Fenter',
                            time: '06:20',
                            createdTime: '01 min ago',
                        },
                        {
                            id: 2,
                            title: 'Video content creation',
                            customerName: 'Anna Catmire',
                            time: '03:00',
                            createdTime: '15 min ago',
                        },
                    ],
                },
                {
                    date: '29',
                    day: 'Fri',
                    activity: [
                        {
                            id: 1,
                            title: 'Chatbot meeting',
                            customerName: 'Edwin Hogan',
                            time: '17:30',
                            createdTime: '25 min ago',
                        },
                        {
                            id: 2,
                            title: 'Hosting online contests',
                            customerName: 'Ralph Water',
                            time: '04:45',
                            createdTime: '35 min ago',
                        },
                        {
                            id: 3,
                            title: 'Quizzes for audience',
                            customerName: 'Aaron Hogan',
                            time: '02:00',
                            createdTime: '45 min ago',
                        },
                    ],
                },
            ],
        },
        teamMembers: [
            {
                id: 1,
                name: 'Jane Cooper',
                email: 'jane.cooper@study.edu',
                image: 'dashboard/user/7.jpg',
            },
            {
                id: 2,
                name: 'Robert Fox',
                email: 'robert.fox@study.edu',
                image: 'dashboard/user/4.jpg',
            },
            {
                id: 3,
                name: 'Daisy Roy',
                email: 'daisy.roy@study.edu',
                image: 'dashboard/user/2.jpg',
            },
            {
                id: 4,
                name: 'Ryan Gill',
                email: 'ryan.gill@study.edu',
                image: 'dashboard/user/12.jpg',
            },
            {
                id: 5,
                name: 'Ace Marks',
                email: 'ace.mark@study.edu',
                image: 'dashboard/user/1.jpg',
            },
        ],
        comments: [
            {
                id: 1,
                name: 'Caleb Rivera',
                message: 'I am getting message from customers that when they place order always get error message',
                image: 'dashboard/user/13.jpg',
            },
            {
                id: 2,
                name: 'Mili Pais',
                message: 'Please be sure to check your spam mailbox to see if your email filters have identified the email',
                image: 'dashboard/user/12.jpg',
                isReply: true,
            },
        ],
    },
    projectStatus: [
        {
            id: 1,
            projectTitle: 'UX Manager',
            projectDescription: 'GrouBs expertise in the industry and ensuring that the group continues to develop as experts.',
            projectBanner: 'project/objective/phone1.png',
            tag: 'UI/UX Design',
            tagColor: 'warning',
            date: '02 Jul, 2024',
            attachment: 7,
            comments: 5,
            progress: 30,
            status: 'pending',
            developer: [
                {
                    name: 'Marley Ford',
                    profile: 'dashboard/user/10.jpg',
                },
                {
                    name: 'Gray Curran',
                    profile: 'dashboard/user/9.jpg',
                },
                {
                    name: 'Yarrow  Wix',
                },
            ],
        },
        {
            id: 2,
            projectTitle: 'Logo Design',
            projectDescription: 'CreaB a distinctive and memorable logo that connects with your target market.',
            tag: 'UX Design',
            tagColor: 'success',
            date: '20 Feb, 2024',
            attachment: 7,
            comments: 5,
            progress: 10,
            status: 'pending',
            developer: [
                {
                    name: 'Sarah Wilson',
                    profile: 'dashboard/user/2.jpg',
                },
                {
                    name: 'Richard Taylor',
                    profile: 'dashboard/user/1.jpg',
                },
                { name: 'Linda Brown' },
                {
                    name: 'Jessica Anderson',
                    profile: 'dashboard/user/8.jpg',
                },
            ],
        },
        {
            id: 3,
            projectTitle: 'Getting together with a customer',
            projectDescription: 'DealBith problems, and improve our collaboration for success on both sides.',
            tag: 'Negotiation',
            tagColor: 'primary',
            date: '12 Jan, 2024',
            attachment: 1,
            comments: 4,
            progress: 40,
            status: 'pending',
            developer: [
                {
                    name: 'Thomas Jones',
                    profile: 'dashboard/user/1.jpg',
                },
                { name: 'Karen Jones' },
                {
                    name: 'Elizabeth Williams',
                    profile: 'dashboard/user/3.jpg',
                },
            ],
        },
        {
            id: 4,
            projectTitle: 'Redesign - Landing page',
            projectDescription: 'SuchBs contact management, lead management, marketing automation, etc.',
            tag: 'UI/UX Design',
            tagColor: 'primary',
            date: '06 Nov, 2024',
            attachment: 2,
            comments: 3,
            progress: 32,
            status: 'progress',
            developer: [
                {
                    name: 'Alexis Taylor',
                    profile: 'dashboard/user/10.jpg',
                },
                {
                    name: 'Andrew Price',
                    profile: 'dashboard/user/11.jpg',
                },
                { name: 'Emily Park' },
                { name: 'Caryl Kauth', profile: 'dashboard/user/1.jpg' },
            ],
        },
        {
            id: 5,
            projectTitle: 'Mobile Testing',
            projectDescription: 'DeliBr a high-quality product that guarantees client happiness and lowers risk.',
            projectBanner: 'project/objective/phone.png',
            tag: 'Testing',
            tagColor: 'warning',
            date: '10 Mar, 2024',
            attachment: 6,
            comments: 4,
            progress: 50,
            status: 'progress',
            developer: [
                {
                    name: 'Caleb Rivera',
                    profile: 'dashboard/user/12.jpg',
                },
                { name: 'Ashley Bardot' },
                { name: 'Olivia Gor', profile: 'dashboard/user/13.jpg' },
            ],
        },
        {
            id: 6,
            projectTitle: 'Lead Generation',
            projectDescription: 'UsuaBy, after initiating conversation, leads hear from a company or organization.',
            tag: 'Lead',
            tagColor: 'success',
            date: '02 Feb, 2024',
            attachment: 1,
            comments: 5,
            progress: 50,
            status: 'progress',
            developer: [
                { name: 'Gasper Mintz' },
                {
                    name: 'Ford Stoll',
                    profile: 'dashboard/user/7.jpg',
                },
            ],
        },
        {
            id: 7,
            projectTitle: 'Client Visit',
            projectDescription: 'WherByou will directly see personalized service and customized solutions.',
            tag: 'Visiter',
            tagColor: 'primary',
            date: '22 Apr, 2024',
            attachment: 7,
            comments: 2,
            progress: 100,
            status: 'completed',
            developer: [
                { name: 'Jenny Wilson', profile: 'dashboard/user/2.jpg' },
                {
                    name: 'Levine Raven',
                    profile: 'dashboard/user/2.jpg',
                },
                {
                    name: 'Davis Jone',
                    profile: 'dashboard/user/12.jpg',
                },
            ],
        },
        {
            id: 8,
            projectTitle: 'Project Deadline',
            projectDescription: 'Take aggressive measures to overcome obstacles.',
            tag: 'DBdline',
            tagColor: 'success',
            date: '10 Mar, 2024',
            attachment: 8,
            comments: 2,
            progress: 100,
            status: 'completed',
            developer: [
                {
                    name: 'Laurier Caddel',
                    profile: 'dashboard/user/4.jpg',
                },
                { name: 'Barbara Taylor' },
            ],
        },
        {
            id: 9,
            projectTitle: 'Marketing and client meeting',
            projectDescription: 'Develop deep relationships with your target market.',
            projectBanner: 'project/objective/phone2.png',
            tag: 'Marketing',
            tagColor: 'warning',
            date: '15 Feb, 2024',
            attachment: 4,
            comments: 1,
            progress: 100,
            status: 'completed',
            developer: [
                { name: 'Juniper Blake' },
                {
                    name: 'Jessica Anderson',
                    profile: 'dashboard/user/2.jpg',
                },
                {
                    name: 'Dashiell Wolfe',
                    profile: 'dashboard/user/5.jpg',
                },
            ],
        },
    ],
    finance: {
        expenses: [
            {
                id: 1,
                title: 'Weekly Expenses',
                value: '70,000.00',
                profit: '2.7',
                profitType: 'profit',
                chartSeries: [
                    {
                        name: 'Income',
                        type: 'line',
                        data: [12, 30, 45, 20, 60, 50],
                    },
                ],
                chartDetails: {
                    chart: {
                        height: 100,
                        width: 248,
                        type: 'line',
                        toolbar: {
                            show: false,
                        },
                        dropShadow: {
                            enabled: true,
                            top: 4,
                            left: 0,
                            blur: 2,
                            // colors: ['#7366FF'],
                            opacity: 0.02,
                        },
                    },
                    grid: {
                        show: false,
                        xaxis: {
                            lines: {
                                show: false,
                            },
                        },
                    },
                    colors: ['#65c15c'],
                    stroke: {
                        width: 3,
                        lineCap: 'butt',
                    },
                    tooltip: {
                        shared: false,
                        intersect: false,
                    },
                    xaxis: {
                        type: 'category',
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        tickAmount: 12,
                        crosshairs: {
                            show: false,
                        },
                        labels: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    fill: {
                        opacity: 1,
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: 'horizontal',
                            inverseColors: true,
                            shadeIntensity: 1,
                            opacityFrom: [1],
                            opacityTo: 1,
                            stops: [0, 100, 300],
                        },
                    },
                    yaxis: {
                        tickAmount: 5,
                        labels: {
                            show: false,
                        },
                    },
                    legend: {
                        show: false,
                    },
                    responsive: [
                        {
                            breakpoint: 1698,
                            options: {
                                chart: {
                                    height: 100,
                                    offsetX: 0,
                                },
                            },
                        },
                        {
                            breakpoint: 497,
                            options: {
                                chart: {
                                    height: 90,
                                    width: 200,
                                },
                            },
                        },
                        {
                            breakpoint: 397,
                            options: {
                                chart: {
                                    width: 150,
                                },
                            },
                        },
                        {
                            breakpoint: 347,
                            options: {
                                chart: {
                                    width: 120,
                                },
                            },
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'Monthly Expenses',
                value: '32,458.00',
                profit: '1.4',
                profitType: 'loss',
                chartSeries: [
                    {
                        name: 'Month',
                        data: [4, 3, 3, 3, 4, 3, 3, 4, 5, 3.5],
                    },
                ],
                chartDetails: {
                    chart: {
                        height: 100,
                        width: 248,
                        type: 'bar',
                        toolbar: {
                            show: false,
                        },
                        dropShadow: {
                            enabled: true,
                            top: 8,
                            left: 0,
                            blur: 8,
                            color: '#006666',
                            opacity: 0.1,
                        },
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 2,
                            borderRadiusApplication: 'around',
                            borderRadiusWhenStacked: 'last',
                            columnWidth: '20%',
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    xaxis: {
                        labels: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    yaxis: {
                        axisBorder: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                        labels: {
                            show: false,
                        },
                    },
                    grid: {
                        show: false,
                    },
                    colors: [
                        'var(--theme-default)',
                        'rgba(115, 102, 255, 0.13)',
                        'rgba(115, 102, 255, 0.33)',
                        'rgba(115, 102, 255, 0.62)',
                        'rgba(115, 102, 255, 0.09)',
                    ],
                    responsive: [
                        {
                            breakpoint: 1698,
                            options: {
                                chart: {
                                    height: 100,
                                },
                            },
                        },
                        {
                            breakpoint: 576,
                            options: {
                                plotOptions: {
                                    bar: {
                                        columnWidth: '8px',
                                    },
                                },
                            },
                        },
                        {
                            breakpoint: 497,
                            options: {
                                chart: {
                                    height: 90,
                                    width: 200,
                                },
                            },
                        },
                        {
                            breakpoint: 397,
                            options: {
                                chart: {
                                    width: 150,
                                },
                            },
                        },
                        {
                            breakpoint: 347,
                            options: {
                                chart: {
                                    width: 120,
                                },
                                plotOptions: {
                                    bar: {
                                        columnWidth: '4px',
                                    },
                                },
                            },
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'Yearly Expenses',
                value: '81,610.00',
                profit: '5.0',
                profitType: 'profit',
                chartSeries: [
                    {
                        name: 'Year',
                        data: [20, 20, 8, 8, 20, 20, 25, 25],
                    },
                ],
                chartDetails: {
                    chart: {
                        type: 'area',
                        height: 100,
                        width: 255,
                        toolbar: {
                            show: false,
                        },
                    },
                    stroke: {
                        curve: 'straight',
                        width: 3,
                    },
                    xaxis: {
                        type: 'category',
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
                        labels: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    grid: {
                        show: false,
                    },
                    yaxis: {
                        show: false,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    markers: {
                        discrete: [
                            {
                                seriesIndex: 0,
                                dataPointIndex: 3,
                                fillColor: '#FFAE1A',
                                strokeColor: 'var(--white)',
                                size: 4,
                            },
                        ],
                        hover: {
                            size: 5,
                            sizeOffset: 0,
                        },
                    },
                    colors: ['#FFAE1A'],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: 'vertical',
                            shadeIntensity: 0.1,
                            inverseColors: true,
                            opacityFrom: 0.2,
                            opacityTo: 0,
                            stops: [0, 100],
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 1698,
                            options: {
                                chart: {
                                    height: 100,
                                },
                            },
                        },
                        {
                            breakpoint: 497,
                            options: {
                                chart: {
                                    height: 90,
                                    width: 200,
                                },
                            },
                        },
                        {
                            breakpoint: 397,
                            options: {
                                chart: {
                                    width: 150,
                                },
                            },
                        },
                        {
                            breakpoint: 347,
                            options: {
                                chart: {
                                    width: 120,
                                },
                            },
                        },
                    ],
                },
            },
        ],
        budgetDetails: [
            {
                id: 1,
                type: 'Data Analyst',
                totalBudget: 14000.0,
                expenses: 13100.0,
                remaining: 110.0,
            },
            {
                id: 2,
                type: 'Researcher',
                totalBudget: 34720.0,
                expenses: 19859.84,
                remaining: 14860.16,
            },
            {
                id: 3,
                type: 'UI Designer',
                totalBudget: 11600.0,
                expenses: 3.0,
                remaining: 11600.0,
            },
            {
                id: 4,
                type: 'JS Developer',
                totalBudget: 68600.0,
                expenses: 14859.84,
                remaining: 25680.0,
            },
            {
                id: 5,
                type: 'Coordinator',
                totalBudget: 48589.0,
                expenses: 10222.12,
                remaining: 9932.24,
            },
            {
                id: 6,
                type: 'Scientist',
                totalBudget: 12365.0,
                expenses: 78245.12,
                remaining: 1236.24,
            },
            {
                id: 7,
                type: 'Vue Developer',
                totalBudget: 14987.0,
                expenses: 14999.12,
                remaining: 6922.0,
            },
            {
                id: 8,
                type: 'C# Developer',
                totalBudget: 25698.0,
                expenses: 12222.12,
                remaining: 1442.0,
            },
        ],
        budgetDistribution: {
            series: [44, 55, 67, 83],
            chartOptions: {
                chart: {
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '12px',
                                fontFamily: 'Rubik, sans-serif',
                                fontWeight: 500,
                                color: 'var(--chart-text-color)',
                                offsetY: 18,
                            },
                            value: {
                                fontSize: '18px',
                                fontFamily: 'Rubik, sans-serif',
                                fontWeight: 600,
                                color: '#2F2F3B',
                                offsetY: -18,
                            },
                            total: {
                                show: true,
                                label: 'Budget Use',
                                fontSize: '13px',
                                formatter: function () {
                                    return '67';
                                },
                            },
                        },
                    },
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetY: 0,
                    fontSize: '14px',
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: 500,
                    labels: {
                        colors: 'var(--chart-text-color)',
                    },
                    markers: {
                        strokeWidth: 0,
                    },
                },
                colors: ['#006666', '#FE6A49', '#FFAE1A', '#00AC46'],
                labels: ['Design', 'Product', 'Development', 'Marketing'],
            },
        },
    },
    team: [
        {
            id: 1,
            developerName: 'Cameron Williamson',
            position: 'QA Assistant',
            profile: 'dashboard/user/1.jpg',
            totalTask: 190,
            completedTask: 110,
            revenue: 9284,
            projects: 19,
            features: 150,
            color: 'primary',
        },
        {
            id: 2,
            developerName: 'Magnolia Parker',
            position: 'Product Manager',
            profile: 'dashboard/user/3.jpg',
            totalTask: 100,
            completedTask: 56,
            revenue: 4869,
            projects: 231,
            features: 108,
            color: 'success',
        },
        {
            id: 3,
            developerName: 'Jasper Bennett',
            position: 'Freelancer',
            profile: 'dashboard/user/4.jpg',
            totalTask: 200,
            completedTask: 150,
            revenue: 9735,
            projects: 12,
            features: 100,
            color: 'warning',
        },
        {
            id: 4,
            developerName: 'Leslie Alexander',
            position: 'Web Developer',
            profile: 'dashboard/user/7.jpg',
            totalTask: 200,
            completedTask: 150,
            revenue: 1805,
            projects: 28,
            features: 150,
            color: 'secondary',
        },
        {
            id: 5,
            developerName: 'Maverick Sullivan',
            position: 'JS Developer',
            profile: 'dashboard/user/9.jpg',
            totalTask: 200,
            completedTask: 120,
            revenue: 3805,
            projects: 69,
            features: 150,
            color: 'warning',
        },
        {
            id: 6,
            developerName: 'Wren Harrison',
            position: 'Backend Developer',
            profile: 'dashboard/user/11.jpg',
            totalTask: 50,
            completedTask: 30,
            revenue: 6378,
            projects: 56,
            features: 150,
            color: 'secondary',
        },
        {
            id: 7,
            developerName: 'Saffron Valencia',
            position: 'UX Designer',
            profile: 'dashboard/user/12.jpg',
            totalTask: 200,
            completedTask: 120,
            revenue: 7950,
            projects: 356,
            features: 150,
            color: 'success',
        },
        {
            id: 8,
            developerName: 'Lyra Hawthorne',
            position: 'Game Developer',
            profile: 'dashboard/user/8.jpg',
            totalTask: 90,
            completedTask: 50,
            revenue: 6378,
            projects: 56,
            features: 150,
            color: 'primary',
        },
    ],
    attachment: {
        attachmentTypes: [
            {
                id: 1,
                title: 'Images',
                icon: 'attach-img',
                color: 'primary',
            },
            {
                id: 2,
                title: 'Audio',
                icon: 'attach-audio',
                color: 'secondary',
            },
            {
                id: 3,
                title: 'Video',
                icon: 'attach-video',
                color: 'success',
            },
            {
                id: 4,
                title: 'Documents',
                icon: 'attach-doc',
                color: 'warning',
            },
            {
                id: 5,
                title: 'PDF Files',
                icon: 'attach-pdf',
                color: 'primary',
            },
        ],
        attachments: [
            {
                id: 1,
                fileName: 'Logger...',
                uploadTime: '7 weeks',
                fileIcon: 'doc-file',
                totalFileSize: 30,
                uploadSize: 10.2,
            },
            {
                id: 2,
                fileName: 'User Product',
                uploadTime: '2 weeks',
                fileIcon: 'ai-file',
                totalFileSize: 14.2,
                uploadSize: 14,
            },
            {
                id: 3,
                fileName: 'Database Log..',
                uploadTime: '2 days',
                fileIcon: 'sql-file',
                totalFileSize: 45,
                uploadSize: 15.9,
            },
            {
                id: 4,
                fileName: 'Dashboard Doc',
                uploadTime: '15 weeks',
                fileIcon: 'pdf-file',
                totalFileSize: 16,
                uploadSize: 10.3,
            },
            {
                id: 5,
                fileName: 'React Theme...',
                uploadTime: '11 days',
                fileIcon: 'xml-file',
                totalFileSize: 35,
                uploadSize: 24.9,
            },
            {
                id: 6,
                fileName: 'Hanoi Theme..',
                uploadTime: '1 day',
                fileIcon: 'css-file',
                totalFileSize: 20,
                uploadSize: 12.6,
            },
        ],
    },
    activity: [
        {
            title: `New order<a href="#">&nbsp;#109876&nbsp;</a>is placed for Works how of marketing and make new product launch`,
            description: 'Conduct Market Research: Start by researching your target market and understanding their needs, preferences, and behaviors. This will help you develop a product that meets their needs and has a strong market demand. Develop a Marketing Plan: Once you have a product idea, develop a marketing plan that outlines your target audience, messaging, and marketing channels. Consider using a mix of traditional and digital marketing tactics to reach your target audience.',
            time: '2:20 PM',
            addedBy: {
                name: 'Mili Pais',
                profile: 'user/common-user/3.png',
            },
            color: 'primary',
        },
        {
            title: `Megan Elmore`,
            time: 'Adding a new event with attachments - 03:45',
            addedBy: {
                name: 'Esther Howard',
                profile: 'user/common-user/5.png',
            },
            color: 'warning',
            attachments: [
                {
                    fileName: 'Hanoi Documentation',
                    fileIcon: 'pdf-file',
                    fileSize: '678 KB',
                },
                {
                    fileName: 'Web Template',
                    fileIcon: 'doc-file',
                    fileSize: '2.4 MB',
                },
            ],
        },
        {
            title: `Five new flowchart ideas have been incorporated.`,
            time: 'at 4:23 PM',
            addedBy: {
                name: 'Leslie Alexander',
                profile: 'user/common-user/7.png',
            },
            color: 'primary',
            images: [
                { imageUrl: 'project/flowchart-1.png' },
                { imageUrl: 'project/flowchart-2.png' },
                { imageUrl: 'project/flowchart-3.png' },
                { imageUrl: 'project/flowchart-4.png' },
                { imageUrl: 'project/flowchart-5.png' },
            ],
        },
        {
            title: `Any kind of collaborative endeavour might have a theme. Use the theme to pass along data so that your team can understand it and contribute to the project.`,
            time: 'At 6:23 PM',
            addedBy: {
                name: 'Guy Hawkins',
                profile: 'user/common-user/1.png',
            },
            color: 'warning',
            members: [
                {
                    name: 'Sarah Wilson',
                    profile: 'dashboard/user/2.jpg',
                },
                {
                    name: 'Richard Taylor',
                    profile: 'dashboard/user/1.jpg',
                },
                { name: 'Linda Brown' },
                {
                    name: 'Jessica Anderson',
                    profile: 'dashboard/user/8.jpg',
                },
            ],
        },
        {
            title: `Task has emerged in the 'Miami' template, awaiting your action.`,
            time: 'At 8:05 PM',
            addedBy: {
                name: 'Jacob Jones',
                profile: 'user/common-user/8.png',
            },
            color: 'primary',
            templates: [
                {
                    id: 1,
                    projectName: 'Chitchat Template',
                    task: 'Make a creating an account profile',
                    assignTo: [
                        {
                            name: 'Jenny Wilson',
                            profile: 'dashboard/user/2.jpg',
                        },
                        {
                            name: 'Levine Raven',
                            profile: 'dashboard/user/2.jpg',
                        },
                        {
                            name: 'Davis Jone',
                            profile: 'dashboard/user/12.jpg',
                        },
                    ],
                    status: 'Completed',
                    color: 'success',
                    dueDate: '14 Oct, 2024',
                },
            ],
        },
    ],
};
export const todoStatus = [
    {
        id: 1,
        title: 'Completed',
    },
    {
        id: 2,
        title: 'Reschedule',
    },
    {
        id: 3,
        title: 'Repeat',
    },
];
export const todoListColors = ['primary', 'secondary', 'success', 'warning'];
export const projectStatus = [
    {
        id: 1,
        title: 'Pending',
        value: 'pending',
        color: 'primary',
    },
    {
        id: 2,
        title: 'In Progress',
        value: 'progress',
        color: 'warning',
    },
    {
        id: 3,
        title: 'Completed',
        value: 'completed',
        color: 'success',
    },
];
export const projectStatusOptions = [
    {
        id: 1,
        title: 'View Project',
    },
    {
        id: 2,
        title: 'Add Members',
    },
    {
        id: 3,
        title: 'Update Status',
    },
];
export const projectCostPerformance = {
    title: 'Project Cost Performance',
    totalBudget: 45.764,
    actualCost: 85.49,
    labels: ['Budget', 'Cost', ''],
    chartSeries: [50, 30],
    chartOptions: {
        chart: {
            type: 'donut',
            dropShadow: {
                enabled: true,
                top: 10,
                left: 0,
                blur: 6,
                opacity: 0.2,
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                startAngle: -90,
                endAngle: 90,
                offsetY: -20,
                offsetX: 0,
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        name: {
                            offsetY: -25,
                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: true,
                            fontSize: '14px',
                            fontFamily: 'Rubik, sans-serif',
                            fontWeight: 500,
                            label: 'Actual Cost',
                            color: '#363636',
                        },
                    },
                },
            },
        },
        grid: {
            padding: {
                bottom: -120,
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        colors: [primaryColor, '#65c15c', '#ffffff'],
        responsive: [
            {
                breakpoint: 1870,
                options: {
                    chart: {
                        height: 250,
                    },
                },
            },
            {
                breakpoint: 1780,
                options: {
                    chart: {
                        height: 240,
                    },
                },
            },
        ],
    },
};
export const projectRating = {
    title: 'Highlights Rating',
    rating: 8.63,
    icon: 'thumbs-up',
    cardColor: 'secondary',
    details: [
        {
            title: 'Avg. Client Rate',
            rating: 7.8,
            increase: true,
        },
        {
            title: 'Avg. Marketplace Rate',
            rating: 6.8,
            increase: false,
        },
    ],
};
export const projectTeam = {
    title: 'Professionals Team',
    totalMember: 56,
    icon: 'user',
    cardColor: 'success',
    teamMembers: [
        { name: 'Marley Ford', profile: 'dashboard/user/3.jpg' },
        { name: 'Sarah Wilson', profile: 'dashboard/user/7.jpg' },
        {
            name: 'Jessica Anderson',
            profile: 'dashboard/user/8.jpg',
        },
        { name: 'Ford Stoll', profile: 'dashboard/user/9.jpg' },
        { name: 'Davis Jone', profile: 'dashboard/user/1.jpg' },
    ],
};
export const totalProjects = {
    title: 'Total Projects',
    totalProject: 153,
    icon: 'file-pen',
    cardColor: 'warning',
    details: [
        { title: 'Pending', value: 27 },
        { title: 'Progress', value: 48 },
        { title: 'Completed', value: 78 },
    ],
};
export const projectTab = [
    {
        id: 1,
        title: 'All',
        value: 'all',
        icon: 'bullseye',
    },
    {
        id: 2,
        title: 'In Progress',
        value: 'in_progress',
        icon: 'bars-progress',
    },
    {
        id: 3,
        title: 'Pending',
        value: 'pending',
        icon: 'hourglass-half',
    },
    {
        id: 4,
        title: 'Completed',
        value: 'completed',
        icon: 'circle-check',
    },
];
export const projects = [
    {
        id: 1,
        projectName: 'CRM Dashboard',
        projectDescription: 'Create a Brand logo design for a Hanoi admin.',
        projectBanner: 'project/list/1.png',
        date: '06 Nov, 2024',
        progress: 40,
        status: 'pending',
        budget: '$845,540.00',
        teamMember: [
            { name: 'Alexis Taylor', profile: 'dashboard/user/10.jpg' },
            { name: 'Andrew Price', profile: 'dashboard/user/11.jpg' },
            { name: 'Emily Park' },
            { name: 'Caryl Kauth', profile: 'dashboard/user/1.jpg' },
        ],
    },
    {
        id: 2,
        projectName: 'Chat Application',
        projectDescription: 'Create a chat application for business messaging needs.',
        projectBanner: 'project/list/2.png',
        date: '10 Mar, 2024',
        progress: 100,
        status: 'completed',
        budget: '$348,940.00',
        teamMember: [
            { name: 'Caleb Rivera', profile: 'dashboard/user/12.jpg' },
            { name: 'Jenny Wilson', profile: 'dashboard/user/2.jpg' },
            { name: 'Olivia Gor', profile: 'dashboard/user/13.jpg' },
        ],
    },
    {
        id: 3,
        projectName: 'Redesign - Landing page',
        projectDescription: 'Resign a landing page design. as per abc minimal design.',
        projectBanner: 'project/list/3.png',
        date: '12 July, 2023',
        progress: 60,
        status: 'in_progress',
        budget: '$753,759.00',
        teamMember: [
            {
                name: 'Levine Raven',
                profile: 'dashboard/user/2.jpg',
            },
            { name: 'Davis Jone', profile: 'dashboard/user/12.jpg' },
            {
                name: 'Jessica Anderson',
                profile: 'dashboard/user/2.jpg',
            },
            {
                name: 'Dashiell Wolfe',
                profile: 'dashboard/user/5.jpg',
            },
        ],
    },
    {
        id: 4,
        projectName: 'Client Meeting',
        projectDescription: 'Meeting about share web all live link.',
        projectBanner: 'project/list/4.png',
        date: '10 Feb, 2023',
        progress: 20,
        status: 'pending',
        budget: '$159,948.00',
        teamMember: [
            { name: 'Thomas Jones', profile: 'dashboard/user/1.jpg' },
            { name: 'Karen Jones' },
            {
                name: 'Elizabeth Williams',
                profile: 'dashboard/user/3.jpg',
            },
        ],
    },
    {
        id: 5,
        projectName: 'Makeover-Landing page',
        projectDescription: 'Create landing page in design guidelines.',
        projectBanner: 'project/list/5.png',
        date: '09 Feb, 2024',
        progress: 50,
        status: 'in_progress',
        budget: '$987,720.00',
        teamMember: [
            {
                name: 'Sarah Wilson',
                profile: 'dashboard/user/2.jpg',
            },
            {
                name: 'Richard Taylor',
                profile: 'dashboard/user/1.jpg',
            },
            { name: 'Linda Brown' },
            {
                name: 'Jessica Anderson',
                profile: 'dashboard/user/8.jpg',
            },
        ],
    },
    {
        id: 6,
        projectName: 'Sales Project',
        projectDescription: 'Create a chat application for business messaging needs.',
        projectBanner: 'project/list/6.png',
        date: '14 May, 2024',
        progress: 70,
        status: 'pending',
        budget: '$821,961.00',
        teamMember: [
            {
                name: 'Marley Ford',
                profile: 'dashboard/user/10.jpg',
            },
            { name: 'Gray Curran', profile: 'dashboard/user/9.jpg' },
            { name: 'Yarrow Wix' },
        ],
    },
    {
        id: 7,
        projectName: 'Grocery App',
        projectDescription: 'smooth purchasing journey and effective delivery options.',
        projectBanner: 'project/list/7.png',
        date: '27 Oct, 2024',
        progress: 100,
        status: 'completed',
        budget: '$951,675.00',
        teamMember: [
            { name: 'Calista Rivers', profile: 'dashboard/user/3.jpg' },
            {
                name: 'Jasper Nightingale',
                profile: 'dashboard/user/4.jpg',
            },
            { name: 'Seraphina Evergreen' },
            { name: 'Caspian Wilde', profile: 'dashboard/user/5.jpg' },
        ],
    },
    {
        id: 8,
        projectName: 'NFT Website',
        projectDescription: 'Explore our NFT marketplace to find digital .',
        projectBanner: 'project/list/9.png',
        date: '02 Feb, 2024',
        progress: 75,
        status: 'in_progress',
        budget: '$753,759.00',
        teamMember: [
            { name: 'Daxton Creed' },
            { name: 'Marigold Luna' },
            { name: 'Charles Rodriguez', profile: 'user/14.png' },
            { name: 'Sarah Hernandez', profile: 'user/3.png' },
        ],
    },
    {
        id: 9,
        projectName: 'Sales management',
        projectDescription: 'Precise objectives and deliver exceptional performance.',
        projectBanner: 'project/list/10.png',
        date: '28 Jan, 2024',
        progress: 100,
        status: 'completed',
        budget: '$652,444.00',
        teamMember: [
            { name: 'Atlas Stone', profile: 'user/12.png' },
            { name: 'Oceana Meridian', profile: 'user/10.jpg' },
            { name: 'Jett Maverick' },
        ],
    },
    {
        id: 10,
        projectName: 'Fish Mobile App',
        projectDescription: 'Real-time tracking, and fishing advice.',
        projectBanner: 'project/list/12.png',
        date: '28 Nov, 2024',
        progress: 87,
        status: 'in_progress',
        budget: '$241,989.00',
        teamMember: [
            { name: 'Xander Wilde' },
            {
                name: 'Charles Rodriguez',
                profile: 'dashboard/user/5.jpg',
            },
            { name: 'Zenith Nova' },
            {
                name: 'Sarah Hernandez',
                profile: 'dashboard/user/6.jpg',
            },
        ],
    },
    {
        id: 11,
        projectName: 'Nursery App',
        projectDescription: "Correspondence and monitor your child's development.",
        projectBanner: 'project/list/11.png',
        date: '03 Sep, 2024',
        progress: 100,
        status: 'completed',
        budget: '$652,444.00',
        teamMember: [
            { name: 'Kairos Frost' },
            { name: 'Oceana Meridian', profile: 'user/2.jpg' },
            { name: 'Ember Wren' },
        ],
    },
    {
        id: 12,
        projectName: 'E-commerce Web',
        projectDescription: 'E-commerce is focusing on optimizing.',
        projectBanner: 'project/list/8.png',
        date: '08 Nov, 2024',
        progress: 80,
        status: 'pending',
        budget: '$400,548.00',
        teamMember: [
            { name: 'Joseph Garcia', profile: 'avtar/16.jpg' },
            { name: 'Elizabeth Davis', profile: 'avtar/3.jpg' },
            { name: 'Karen Moore' },
            { name: 'Robert Williams' },
        ],
    },
];
export const projectType = [
    {
        value: 'hourly',
        label: 'Hourly',
    },
    {
        value: 'fixed',
        label: 'Fixed',
    },
];
export const projectCategory = [
    {
        value: 'developer',
        label: 'Developer',
    },
    {
        value: 'designer',
        label: 'Designer',
    },
    {
        value: 'analyst',
        label: 'Analyst',
    },
    {
        value: 'scientist',
        label: 'Scientist',
    },
    {
        value: 'architect',
        label: 'Architect',
    },
];
export const projectPriority = [
    {
        value: 'urgent',
        label: 'Urgent',
    },
    {
        value: 'high',
        label: 'High',
    },
    {
        value: 'medium',
        label: 'Medium',
    },
    {
        value: 'low',
        label: 'Low',
    },
];
export const teamMember = [
    {
        id: '1',
        value: 'nathan_cooper',
        label: 'Nathan Cooper',
    },
    {
        id: '2',
        value: 'owen_davis',
        label: 'Owen Davis',
    },
    {
        id: '3',
        value: 'zoey_jenkins',
        label: 'Zoey Jenkins',
    },
    {
        id: '4',
        value: 'alexis_taylor',
        label: 'Alexis Taylor',
    },
    {
        id: '5',
        value: 'leonel_hodges',
        label: 'Leonel Hodges',
    },
    {
        id: '6',
        value: 'emelia_green',
        label: 'Emelia Green',
    },
];
export const projectSize = [
    {
        value: 'small',
        label: 'Small',
    },
    {
        value: 'medium',
        label: 'Medium',
    },
    {
        value: 'large',
        label: 'Large',
    },
];
export const roleOptions = [
    { id: 1, label: 'Developer', value: 'developer' },
    { id: 2, label: 'Designer', value: 'designer' },
    { id: 3, label: 'Analyst', value: 'analyst' },
    { id: 4, label: 'Scientist', value: 'scientist' },
    { id: 5, label: 'Architect', value: 'architect' },
];
export const priorityOptions = [
    { id: 1, label: 'Urgent', value: 'urgent' },
    { id: 2, label: 'High', value: 'high' },
    { id: 3, label: 'Medium', value: 'medium' },
    { id: 4, label: 'Low', value: 'low' },
];
export const teamLeaders = [
    { id: 1, label: 'Nathan Cooper', value: 'nathan' },
    { id: 2, label: 'Owen Davis', value: 'owen' },
    { id: 3, label: 'Zoey Jenkins', value: 'zoey' },
    { id: 4, label: 'Alexis Taylor', value: 'alexis' },
];
export const sizeOptions = [
    { id: 1, label: 'Small', value: 'small' },
    { id: 2, label: 'Medium', value: 'medium' },
    { id: 3, label: 'Large', value: 'large' },
];
export const members = [
    { id: 1, label: 'Nathan Cooper', value: 'NathanCooper' },
    { id: 2, label: 'Owen Davis', value: 'OwenDavis' },
    { id: 3, label: 'Zoey Jenkins', value: 'ZoeyJenkins' },
    { id: 4, label: 'Alexis Taylor', value: 'AlexisTaylor' },
    { id: 5, label: 'Leonel Hodges', value: 'LeonelHodges' },
    { id: 6, label: 'Emelia Green', value: 'EmeliaGreen' },
];
