export interface Speaker {
	slug: string;
	name: string;
	title: string;
	photo: string;
	presentationTitle: string;
	abstract: string[];
}

export const speakers: Speaker[] = [
	{
		slug: 'akkaraju-sandeep',
		name: 'Sandeep Akkaraju',
		title: 'Co-Founder and CEO, Exo Imaging',
		photo: '/uploads/2023/10/Exo-sandeep-300x300.webp',
		presentationTitle: 'Combining MEMS & Abundance in Creating a Company',
		abstract: [
			'In the keynote presentation, "Combining MEMS & Abundance in Creating a Company," Sandeep Akkaraju, the CEO & Co-Founder of Exo, discusses the company\'s early days working in a garage to conceptualize and develop a first-of-its-kind exponential technology for medical imaging called a Piezoelectric Micromachined Ultrasonic Transducer (pMUT). He shares what it was like building a company on an Abundance-focused vision of improving world health with MEMS technology, how having a Massive Transformative Purpose (MTP) around which all of Exo\'s founders were committed helped keep them driven during times when technical challenges seemed insurmountable and helped attract the right talent from around the globe to achieve the impossible.',
			'During this keynote, Akkaraju will also share advice for other entrepreneurs in achieving their own Abundance-driven visions, such as how to take ideas from concept to reality, how to navigate funding and growth, and what pitfalls to avoid.',
		],
	},
	{
		slug: 'benedetto',
		name: 'Benedetto Vigna',
		title: 'CEO, Ferrari',
		photo: '/uploads/2023/10/Benedetto--300x300.webp',
		presentationTitle: 'Ferrari Cars go Beyond Electrons and Bytes',
		abstract: [
			'Autonomous, Connected, Electric and Shared are the key trends for mass market cars. Nowadays all car manufacturers mostly speak about electrification and software. Very often cars are referred to as \'sofa or data center or mobile phones on four wheels\' and the use of sensors is exaggerated, due to an innovation strategy driven by a deliberate technology push. Ferrari instead is profoundly different. Ferrari designs and realizes extraordinarily beautiful luxury sports cars and the key words are experiential, sustainable, personal and culturally relevant.',
			'True and sustainable innovation always starts from human emotions and from the respect of the environment. And sustainability, together with engineering performances, beautiful designs and unique driving thrills, makes our sports cars unique and timeless. This presentation will cover how Ferrari relentlessly pursues innovation by harnessing the new technologies in a unique way.',
		],
	},
	{
		slug: 'david-horsley',
		name: 'David Horsley',
		title: 'Co-Director, Institute for NanoSystems Innovation, Northeastern University',
		photo: '/uploads/2023/10/David-A.-Horsley-300x300.webp',
		presentationTitle: 'Crossing the Chasm: from Academic Lab to Consumer Pockets',
		abstract: [
			'The increasing maturity of thin-film piezoelectric materials and the MEMS manufacturing ecosystem has enabled the rapid development of sensor systems based on piezoelectric micromachined ultrasonic transducers (PMUTs). Starting around 2008, I began research that resulted in new PMUT-based ultrasonic time-of-flight sensors, ultrasonic fingerprint sensors for biometric identification, and ultimately in founding and selling a startup company, Chirp Microsystems. These innovations made my university laboratory (then located at UC Davis) a hub of ultrasound innovation and Janusz Bryzek and his Exo Imaging co-founders tested their early PMUTs there.',
			'Janusz was a personal hero of mine and it has been rewarding to see him and the Exo team commercialize PMUTs for medical imaging. In this talk, I will share some of the engineering that made our ultrasonic products possible, I will tell the story of bringing this technology from the university lab to the consumer market, and I will share some stories about how Janusz influenced me over the years.',
		],
	},
	{
		slug: 'grace-roger',
		name: 'Roger H. Grace',
		title: 'Roger Grace Associates',
		photo: '/uploads/2023/10/Roger-Grace-2-300x300.webp',
		presentationTitle: 'Novel MEMS/Sensor Solutions Enable Abundance',
		abstract: [
			'In their NYTimes bestseller, Abundance…The Future is Better Than You Think… authors Peter Diamandis and Steven Kotler discussed the enabling nature of various technologies to provide solutions to effectively address major societal problems including pollution, water, food, energy and health care/wellness. I refer to these as "application pillars". MEMS (microelectromechanical systems) /sensors are one of several technologies that the authors attributed to the enabling of solutions supporting these application pillars.',
			'The presentation will discuss the technologies and applications of several of the past and currently available novel MEMS/sensor products that address these application pillars. Most importantly, several of these products to be presented were envisioned, developed and/or commercialized by Dr. Janusz Bryzek in his over 40-year of contributions to the MEMS/Sensors industry…and to society in general.',
		],
	},
	{
		slug: 'kalvesten-edvard-rimskog-magnus',
		name: 'Edvard Kälvesten & Magnus Rimskog',
		title: 'Silex Microsystems',
		photo: '/uploads/2023/10/Edvard.webp',
		presentationTitle: 'Success in the World of One Product, One Process',
		abstract: [
			'Silex Microsystems was founded in 2000 by Dr. Edvard Kälvesten based on a vision to build the world\'s leading pure play MEMS foundry. Today, Silex is the only independent MEMS foundry with global manufacturing capabilities and full end-to-end services from R&D to high volume manufacturing. With facilities in Sweden, USA and China, Silex manufactures over 300 million sensors annually across a diverse range of application areas including automotive, consumer electronics, industrial, medical and telecom.',
			'This presentation will share insights from over 20 years of operating a MEMS foundry, the challenges and opportunities in serving a global customer base, and how Silex has built its success on the principle of "one product, one process" - focusing intensely on manufacturing excellence for each unique MEMS design.',
		],
	},
	{
		slug: 'kaminaga-susumu',
		name: 'Susumu Kaminaga',
		title: 'Representative Director & Chief Executive, SK Global Advisers Co., Ltd.',
		photo: '/uploads/2023/10/Susumu.webp',
		presentationTitle: 'Trillion Sensors - A Visionary Concept',
		abstract: [
			'The Trillion Sensors concept was first proposed at the Trillion Sensors Summit in 2013, envisioning a future where ubiquitous, low-cost sensors would transform every aspect of human life. This vision aligned perfectly with Dr. Janusz Bryzek\'s philosophy of abundance - that exponential technologies like MEMS could enable solutions to humanity\'s greatest challenges.',
			'This presentation will explore the evolution of the Trillion Sensors vision over the past decade, the progress made toward this goal, and the path forward. We will examine how MEMS technology has enabled the proliferation of sensors in smartphones, IoT devices, automotive systems, and medical applications, and discuss what it will take to achieve the next order of magnitude growth in sensor deployment to truly realize the vision of a trillion sensors improving life on Earth.',
		],
	},
	{
		slug: 'kurt-petersen',
		name: 'Kurt Petersen',
		title: 'Founder and President, KP-MEMS',
		photo: '/uploads/2023/10/Petersen-Kurt-1-300x300.webp',
		presentationTitle: 'Creating the Future with MEMS',
		abstract: [
			'Each of today\'s engineering marvels, such as airplanes, cars, computers, cell phones, skyscrapers, cruise ships, and the ISS, which many of us take for granted, are only made possible by many, many layers of almost unbelievably complicated technologies. Every year, each one of these technologies (metal-working, plastics, electronics, packaging, automation, assembly, sensors, software, etc) is slightly improved to perform better, to become more reliable, to get smaller, or to get cheaper. Nowhere, of course, has this been more evident than for integrated circuits, which has followed Moore\'s law (the number of transistors on a chip will double every two years with minimal rise in cost) for over 50 years.',
			'MEMS, a subset of integrated circuit technology, has not only improved in performance, size, reliability, and cost, over the years, but also, amazingly, in functionality. Almost every 2 years, a new MEMS product hits the market with a completely new and different functionality than previous devices. From pressure devices (1970\'s and 1980\'s), to ink jet nozzles (1990\'s), to accelerometers (1990\'s), to digital mirror displays (1990\'s), to microphones (2000\'s), to FBAR filters (2000\'s), to gyroscopes (2000\'s), to oscillators (2010\'s), to speakers (2010\'s), to ultrasonic imagers (2020\'s), to mention just a few. Visionaries and entrepreneurs and academic researchers have pioneered the invention, development, and commercialization of these revolutionary products. This talk will focus on the continuous introduction of new MEMS products and functionalities over the years, the visionary MEMS pioneers who made this possible, and what this portends for the future of MEMS.',
		],
	},
	{
		slug: 'laermer-franz-majoni-stefan',
		name: 'Franz Laermer & Stefan Majoni',
		title: 'Robert Bosch GmbH',
		photo: '/uploads/2023/10/Franz-Laermer.webp',
		presentationTitle: 'MEMS Past and Present',
		abstract: [
			'Bosch has been at the forefront of MEMS development and manufacturing for over three decades. This presentation will provide a comprehensive overview of the evolution of MEMS technology from its early days to the present, with particular focus on Bosch\'s contributions to the field.',
			'We will discuss the development of key MEMS processes and technologies, the transition from research to high-volume manufacturing, and the lessons learned along the way. The presentation will also cover the current state of MEMS technology and manufacturing, emerging applications, and the role of MEMS foundries in enabling innovation. Special attention will be paid to how MEMS technology has evolved to meet the demanding requirements of automotive, consumer electronics, and industrial applications.',
		],
	},
	{
		slug: 'ray-curtis',
		name: 'Curtis Ray',
		title: 'Head of Business Development, Omnitron Sensors',
		photo: '/uploads/2023/12/curtis-Ray.webp',
		presentationTitle: 'Serial Entrepreneurism: Lessons in Innovation and Research',
		abstract: [
			'Drawing from decades of experience in the MEMS and sensors industry, this presentation will share insights on serial entrepreneurship, innovation, and the path from research to commercial success. Curtis Ray will discuss his journey through multiple startups and technology ventures, highlighting the lessons learned along the way.',
			'The presentation will cover key topics including: identifying market opportunities, building effective teams, navigating the funding landscape, managing the transition from R&D to production, and maintaining entrepreneurial drive through multiple ventures. Special emphasis will be placed on the importance of mentor relationships, with reflections on how industry pioneers like Dr. Janusz Bryzek have influenced the next generation of MEMS entrepreneurs.',
		],
	},
	{
		slug: 'shad-roundy',
		name: 'Shad Roundy',
		title: 'Associate Professor, Department of Mechanical Engineering, University of Utah',
		photo: '/uploads/2023/10/RoundyIEEE-1.webp',
		presentationTitle: 'Energy Harvesting and Self-Powered Sensors',
		abstract: [
			'Energy harvesting for powering wireless sensors and IoT devices has been a research focus for over two decades. This presentation will explore the evolution of energy harvesting technologies, from early piezoelectric and electromagnetic approaches to modern photovoltaic and thermoelectric solutions.',
			'We will discuss the challenges and opportunities in creating truly self-powered sensor systems, the trade-offs between different energy harvesting approaches, and recent advances that are making energy harvesting more practical for commercial applications. The presentation will also cover the role of MEMS technology in enabling miniaturized energy harvesters and the potential for energy harvesting to enable the trillion sensor vision by eliminating battery replacement requirements.',
		],
	},
	{
		slug: 'weijie-yun',
		name: 'Weijie Yun',
		title: 'Founder and Managing Partner, Tyche Partners',
		photo: '/uploads/2023/10/weijie-yun.webp',
		presentationTitle: 'The Secret of Successful Fundraising',
		abstract: [
			'Raising capital is one of the most critical challenges facing technology entrepreneurs, yet it remains one of the least understood aspects of building a successful company. This presentation will demystify the fundraising process, sharing insights from years of experience working with startups and investors in the MEMS and deep tech sectors.',
			'Topics will include: understanding different types of investors and what they look for, crafting a compelling investment narrative, valuation considerations, term sheet negotiations, and maintaining investor relationships. The presentation will also discuss how the funding landscape has evolved, the unique challenges of raising capital for hardware and MEMS-based ventures, and strategies for building relationships with investors before you need funding.',
		],
	},
	{
		slug: 'swaminathan-rajaraman',
		name: 'Swaminathan Rajaraman',
		title: 'Associate Professor in NanoScience Technology Center, University of Central Florida',
		photo: '/uploads/2024/03/swaminathanRjaraaman-300x300.webp',
		presentationTitle: 'The Future of MEMS - New Directions in Support of Abundance',
		abstract: [
			'The advent of the MEMS some 40 years ago had a profound effect on the semiconductor and tech industries. With the boundless optimism and energy of early MEMS pioneers like Janusz Bryzek, the industry grew rapidly and had a substantial impact on many industries including healthcare, automotive, and consumer electronics. Many MEMS products are now mature, perhaps even considered commodity products. Some may view the MEMS industry as being in decline. Or is it growing in new and different ways?',
			'What promise does the industry hold for an ambitious graduate student or young professional interested in the field and motivated to make a difference in the world? Join us for a panel discussion in which we will explore the future of the MEMS industry at the Nexus of MEMS, abundance, and entrepreneurism.',
		],
	},
	{
		slug: 'peter-diamandis-age-of-abundance',
		name: 'Peter Diamandis',
		title: 'Founder and Executive Director of the XPRIZE Foundation & Executive, Founder of Singularity University',
		photo: '/uploads/2023/09/peter-gves-300x300.webp',
		presentationTitle: 'Age of Abundance',
		abstract: [
			'Twelve years ago, my partner Steven Kotler and I argued cogently that humans, aided and abetted by news media, focus irrationally on apocalyptic news stories designed to evoke emotions to increase viewership. The objective data, though, was quite optimistic about where humanity was and its trajectory in 2012. Indeed, with the relentless advances in technology, we projected security for all humans by 2040!',
			'So, where are we today, more than a decade later? Social media is supplanting news media and amplifying notions of apocalypse in ways only dreamt of in 2012. The COVID pandemic created the first meaningful change in American happiness in 50 years. Fears of climate change loom, with slow progress on mitigation. Let\'s take a step back from our fears and review the objective data together and see if we\'re still on track to global security in 2040.',
		],
	},
];
