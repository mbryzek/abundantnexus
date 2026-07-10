export interface PresentationSpeaker {
  name: string;
  description: string;
  slug?: string;
}

export interface Presentation {
  topic: string;
  duration: string;
  videoUrl: string;
  audioUrl: string;
  isKeynote?: boolean;
  speakers: PresentationSpeaker[];
}

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`;

export const presentations: Presentation[] = [
  {
    topic: 'Welcome & Opening',
    duration: '10\' 29"',
    videoUrl: drive('1C5LpEn7M2DYNSHGDchHUegsmXwmykNnc'),
    audioUrl: drive('18N1FNL-KMcqSOL0zHPNJjvdYTGVexok8'),
    speakers: [{ name: 'Dr. Brian Bircumshaw', description: 'Conference Chair' }]
  },
  {
    topic: 'Success in the World of One Product, One Process',
    duration: '18\' 00"',
    videoUrl: drive('1GS36hldsCWBASRB-JVWGt0A5g4_XgiSt'),
    audioUrl: drive('1vt8Hhm4-W9GSDIMo_ZtdoRribRxNu4dO'),
    speakers: [
      {
        name: 'Dr. Edvard Kälvesten',
        description: 'CEO of Silex',
        slug: 'kalvesten-edvard-rimskog-magnus'
      }
    ]
  },
  {
    topic: 'Ferrari cars go beyond electrons and bytes',
    duration: '46\' 01"',
    videoUrl: drive('1m4p9H6JfntId4wnyLjf_5Dd7XU6zaNCV'),
    audioUrl: drive('1DCO_6YFduGKOYZzF6l2aaDMWf_dJdpps'),
    isKeynote: true,
    speakers: [{ name: 'Benedetto Vigna', description: 'CEO of Ferrari', slug: 'benedetto' }]
  },
  {
    topic: 'MEMS Past and Present',
    duration: '21\' 10"',
    videoUrl: drive('1-udBsS98WO6ooX02Mu1ynO7LED5Kzpsu'),
    audioUrl: drive('1D5csrZUdkW8uSXBuNriL1w8-wakRyfab'),
    speakers: [
      {
        name: 'Franz Lärmer',
        description: 'Bosch Research Fellow',
        slug: 'laermer-franz-majoni-stefan'
      },
      {
        name: 'Stefan Majoni',
        description: 'Dir. of MEMS Foundry at Bosch',
        slug: 'laermer-franz-majoni-stefan'
      }
    ]
  },
  {
    topic: 'Combining MEMS & Abundance in Creating a Company',
    duration: '43\' 51"',
    videoUrl: drive('1oSM4VX3z7FeE9ONZyFnqpfwt33-WGRVx'),
    audioUrl: drive('1LnOwiA3yuwHLxk616Gg0iHzlS0OM1nma'),
    isKeynote: true,
    speakers: [{ name: 'Sandeep Akkaraju', description: 'Exo CEO & Co-Founder', slug: 'akkaraju-sandeep' }]
  },
  {
    topic: 'Crossing the Chasm: from Academic Lab to Consumer Pockets',
    duration: '23\' 39"',
    videoUrl: drive('10vBqYcxRXK7NrKBPNgsM86inQhmh481L'),
    audioUrl: drive('1eKAeOeZHRy8DriFCUGOiKyLVvo6KX-Fw'),
    speakers: [{ name: 'Prof. David Horsley', description: 'Northeastern University', slug: 'david-horsley' }]
  },
  {
    topic: 'Age of Abundance',
    duration: '41\' 26"',
    videoUrl: drive('16slG9p0tkUTriiA6IyiicHyCsFDk6Zx6'),
    audioUrl: drive('1t5vkSUdzeiwRO9c7cVJ9uhsLIV8o2Z-K'),
    isKeynote: true,
    speakers: [
      {
        name: 'Dr. Peter Diamandis',
        description: 'XPRIZE Founder & Co-Author of the New York Times Bestseller Abundance: The Future Is Better Than You Think',
        slug: 'peter-diamandis-age-of-abundance'
      }
    ]
  },
  {
    topic: 'Serial Entrepreneurism: Lessons in Innovation and Research',
    duration: '20\' 42"',
    videoUrl: drive('1ULvsEFcmWS4eJih_n9arn3RgtwxwtwGJ'),
    audioUrl: drive('1UMOyki-VVzO6UFsc87wie9sYXBJ_01PY'),
    speakers: [{ name: 'Curtis Ray', description: 'Biz Dev at Omnitron Sensors', slug: 'ray-curtis' }]
  },
  {
    topic: 'Creating the Future with MEMS',
    duration: '27\' 49"',
    videoUrl: drive('1dQjkcKr7gFfVzDG-GKNluJYNbJ1SESUn'),
    audioUrl: drive('1aOuc8OziWZ_m9QHIX2eMDUh5ooWxX_Tp'),
    speakers: [
      {
        name: 'Dr. Kurt Petersen',
        description: 'Co-Founder of NovaSensor, Cepheid and SiTime',
        slug: 'kurt-petersen'
      }
    ]
  },
  {
    topic: 'Novel MEMS/Sensor Solutions Enable Abundance',
    duration: '21\' 01"',
    videoUrl: drive('1z5fumMTGny1H2mmgY89k9lNlHT-gbF94'),
    audioUrl: drive('1OS9BGpGJhpZnIM92p010tH7hOhF5Z1t6'),
    speakers: [
      {
        name: 'Roger Grace',
        description: 'Founder & President of Roger Grace Associates',
        slug: 'grace-roger'
      }
    ]
  },
  {
    topic: 'Trillion Sensors – A Visionary Concept',
    duration: '29\' 56"',
    videoUrl: drive('1KS0IcEM0rS24PnZTqZmUoM4BHx4anB30'),
    audioUrl: drive('12vvfJmM_yGO4Cl7xi9ufntUX9KS91Ohr'),
    speakers: [
      {
        name: 'Susumu Kaminaga',
        description: 'Executive Senior Adviser, SPP Technologies',
        slug: 'kaminaga-susumu'
      }
    ]
  },
  {
    topic: 'The Secret of Successful Fundraising',
    duration: '24\' 44"',
    videoUrl: drive('1AwTVJLttyzgTbUk7x95qnGRVA31GlUhZ'),
    audioUrl: drive('12SWbYjecj7isGlVUdcLQYzVelRhMFNIT'),
    speakers: [
      {
        name: 'Dr. Weijie Yun',
        description: 'Founder & Managing Partner of Tyche Partners',
        slug: 'weijie-yun'
      }
    ]
  },
  {
    topic: 'Panel: The Future of MEMS',
    duration: '1h 2\' 50"',
    videoUrl: drive('1M6JFbVyGgZF3jC_dJhdCOZsvEcQApxWq'),
    audioUrl: drive('1UHBd3_O8W0sQlloKZ4-tV96se5lJ-dNF'),
    speakers: [
      {
        name: 'Prof. Swaminathan Rajaraman',
        description: 'Moderator, University of Central Florida',
        slug: 'swaminathan-rajaraman'
      },
      { name: 'Alissa Fitzgerald', description: 'AM Fitzgerald' },
      { name: 'Evgeni Gousev', description: 'Qualcomm' },
      { name: 'Dr. Mary Ann Maher', description: 'SoftMEMS' },
      { name: 'Prof. Kris Pister', description: 'UC Berkeley' },
      { name: 'Prof. Shad Roundy', description: 'University of Utah', slug: 'shad-roundy' }
    ]
  },
  {
    topic: 'Acknowledgements & Closing',
    duration: '2\' 25"',
    videoUrl: drive('1UGmCqSsDcyutBaXdhH9sdjS05WIfN5Bf'),
    audioUrl: drive('15mvXPaUBdmVgjmzmPZtScxeDDavuih55'),
    speakers: [
      { name: 'Dr. Brian Bircumshaw', description: 'Conference Chair' },
      { name: 'Prof. Shad Roundy', description: 'University of Utah', slug: 'shad-roundy' }
    ]
  },
  {
    topic: 'Sponsors',
    duration: '18\' 30"',
    videoUrl: drive('1sw_imGqITe9rTrzDJoQE7eW0mJqDEFpH'),
    audioUrl: drive('16FikV3gScmeqS9RavnD5YxGoHKi3QOq4'),
    speakers: []
  },
  {
    topic: 'Bryzek Family Video',
    duration: '8\' 45"',
    videoUrl: drive('1czmSeIcsV5NmV7-SDw5m-CoPyziqNtj-'),
    audioUrl: drive('1BqWN7QjlkqNO5YtuRfB-Ch9XNXzFo8bN'),
    speakers: []
  }
];

export const presentationsPdfPath = '/uploads/2025/05/Abundant_Nexus_Final_Videos_r5.pdf';
