<script lang="ts">
	import Shell from '$lib/components/Shell.svelte';
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';
	import SponsorSection from '$lib/components/SponsorSection.svelte';

	// Map speaker names to their abstract slugs
	const speakerSlugMap: Record<string, string> = {
		'Peter Diamandis': 'peter-diamandis-age-of-abundance',
		'Sandeep Akkaraju': 'akkaraju-sandeep',
		'Benedetto Vigna': 'benedetto',
		'Roger Grace': 'grace-roger',
		'David A. Horsley': 'david-horsley',
		'Edvard Kälvesten': 'kalvesten-edvard-rimskog-magnus',
		'Susumu Kaminaga': 'kaminaga-susumu',
		'Franz Laermer': 'laermer-franz-majoni-stefan',
		'Magnus Rimskog': 'kalvesten-edvard-rimskog-magnus',
		'Stefan Majoni': 'laermer-franz-majoni-stefan',
		'Kurt Petersen': 'kurt-petersen',
		'Curtis Ray': 'ray-curtis',
		'Weijie Yun': 'weijie-yun',
		'Shad Roundy': 'shad-roundy',
		'Swaminathan Rajaraman': 'swaminathan-rajaraman',
	};

	function getAbstractLink(name: string): string | undefined {
		const slug = speakerSlugMap[name];
		return slug ? `/speakers/${slug}` : undefined;
	}

	// Keynote speakers
	const keynoteSpeakers = [
		{
			photo: '/uploads/2023/09/peter-gves.webp',
			name: 'Peter Diamandis',
			title: 'Founder and Executive Director of the XPRIZE Foundation & Executive, Founder of Singularity University',
			abstractLink: getAbstractLink('Peter Diamandis'),
		},
		{
			photo: '/uploads/2023/10/Exo-sandeep.webp',
			name: 'Sandeep Akkaraju',
			title: 'Co-founder & Chief Executive Officer, Exo Imaging',
			abstractLink: getAbstractLink('Sandeep Akkaraju'),
		},
		{
			photo: '/uploads/2023/10/Benedetto-.webp',
			name: 'Benedetto Vigna',
			title: 'Chief Executive Officer, Ferrari',
			abstractLink: getAbstractLink('Benedetto Vigna'),
		},
	];

	// Guest speakers
	const guestSpeakers = [
		{ photo: '/uploads/2023/10/Roger-Grace-2.webp', name: 'Roger Grace', title: 'Roger Grace Associates', abstractLink: getAbstractLink('Roger Grace') },
		{ photo: '/uploads/2023/10/David-A.-Horsley.webp', name: 'David A. Horsley', title: 'Northeastern University', abstractLink: getAbstractLink('David A. Horsley') },
		{ photo: '/uploads/2023/10/Edvard.webp', name: 'Edvard Kälvesten', title: 'Silex Microsystems', abstractLink: getAbstractLink('Edvard Kälvesten') },
		{ photo: '/uploads/2023/10/Susumu.webp', name: 'Susumu Kaminaga', title: 'SK Global Advisers Co., Ltd.', abstractLink: getAbstractLink('Susumu Kaminaga') },
		{ photo: '/uploads/2023/10/Franz-Laermer.webp', name: 'Franz Laermer', title: 'Robert Bosch GmbH', abstractLink: getAbstractLink('Franz Laermer') },
		{ photo: '/uploads/2023/10/Magnus-Rimskog.webp', name: 'Magnus Rimskog', title: 'Silex Microsystems', abstractLink: getAbstractLink('Magnus Rimskog') },
		{ photo: '/uploads/2023/11/Susumu.webp', name: 'Stefan Majoni', title: 'Bosch MEMS Foundry', abstractLink: getAbstractLink('Stefan Majoni') },
		{ photo: '/uploads/2023/10/Petersen-Kurt-1.webp', name: 'Kurt Petersen', title: 'KP MEMS', abstractLink: getAbstractLink('Kurt Petersen') },
		{ photo: '/uploads/2023/12/curtis-Ray.webp', name: 'Curtis Ray', title: 'Omnitron Sensors', abstractLink: getAbstractLink('Curtis Ray') },
		{ photo: '/uploads/2023/10/weijie-yun.webp', name: 'Weijie Yun', title: 'Tyche Partners', abstractLink: getAbstractLink('Weijie Yun') },
		{ photo: '/uploads/2023/12/Karen-Lightman.webp', name: 'Karen Lightman', title: 'Director at Metro21' },
	];

	// Panelists
	const panelists = [
		{ photo: '/uploads/2023/10/Alissa-Fitzgerald.webp', name: 'Alissa Fitzgerald', title: 'AMFitzgerald' },
		{ photo: '/uploads/2023/10/Gousev-Evgeni.webp', name: 'Evgeni Gousev', title: 'Qualcomm' },
		{ photo: '/uploads/2023/10/RoundyIEEE-1.webp', name: 'Shad Roundy', title: 'University of Utah', abstractLink: getAbstractLink('Shad Roundy') },
		{ photo: '/uploads/2023/10/Maher-Mary-Ann.webp', name: 'Mary Ann Maher', title: 'SoftMEMS' },
		{ photo: '/uploads/2024/03/swaminathanRjaraaman.webp', name: 'Swaminathan Rajaraman', title: 'University of Central Florida', abstractLink: getAbstractLink('Swaminathan Rajaraman') },
		{ photo: '/uploads/2023/10/Pister-Kris-panelist.png', name: 'Kris Pister', title: 'University of California, Berkeley' },
		{ photo: '/uploads/2024/01/Albert-P.Pisano.webp', name: 'Albert P. Pisano', title: 'Albert (Al) P. Pisano, Ph.D.' },
	];

	// Committee
	const committee = [
		{ photo: '/uploads/2023/11/Brian.webp', name: 'Brian Bircumshaw', title: 'Exo Imaging, Inc' },
		{ photo: '/uploads/2023/10/Maher-Mary-Ann.webp', name: 'Mary Ann Maher', title: 'SoftMEMS' },
		{ photo: '/uploads/2023/12/Joseph-R-Mallon.jpg', name: 'Joseph R. Mallon Jr.', title: 'MEMS Pioneer' },
		{ photo: '/uploads/2023/10/Petersen-Kurt.webp', name: 'Kurt Petersen', title: 'KP MEMS', abstractLink: getAbstractLink('Kurt Petersen') },
		{ photo: '/uploads/2023/10/RoundyIEEE.webp', name: 'Shad Roundy', title: 'University of Utah', abstractLink: getAbstractLink('Shad Roundy') },
		{ photo: '/uploads/2023/10/Laylee-Aquila.webp', name: 'Lay Lay Lee-Aquila', title: 'Exo Imaging' },
		{ photo: '/uploads/2023/10/Roger-Grace-1.webp', name: 'Roger Grace', title: 'Roger Grace Associates', abstractLink: getAbstractLink('Roger Grace') },
	];

	// Organizer
	const organizer = [
		{ photo: '/uploads/2023/10/ebtter0-coper.jpg', name: 'Bette Cooper', title: 'MEPCOM LLC' },
	];

	// Sponsors data
	const diamondSponsors = [
		{ name: 'Exo Imaging', logo: '/uploads/2023/10/sponsors-exo-logo.webp', link: 'https://www.exo.inc/' },
	];

	const platinumSponsors = [
		{ name: 'Wilson Sonsini', logo: '/uploads/2024/03/WilsonSonsini-Stack-Standard.png', link: 'https://www.wsgr.com/en/' },
	];

	const goldSponsors = [
		{ name: 'Bryzek', logo: '/uploads/2024/02/bryzek-logof.png' },
		{ name: 'Omnitron Sensors', logo: '/uploads/2024/03/Omnitron-Sensors.jpg', link: 'http://www.omnitronsensors.com' },
		{ name: 'TDK InvenSense', logo: '/uploads/2024/02/tdk-logo_blue.png', link: 'https://invensense.tdk.com/' },
	];

	const silverPlusSponsors = [
		{ name: 'Cushman & Wakefield', logo: '/uploads/2024/03/cushman.jpg', link: 'http://www.cushmanwakefield.com/' },
		{ name: 'MEMStaff', logo: '/uploads/2024/04/WhatsApp-Image-2024-04-10-at-3.16.37-AM.jpeg', link: 'http://www.memstaff.com' },
		{ name: 'Merit Sensor', logo: '/uploads/2024/03/MeritSensor_1200x300px.png', link: 'https://www.merit.com/' },
		{ name: 'Roger Grace Associates', logo: '/uploads/2024/03/roger.jpg', link: 'http://www.rgrace.com/' },
		{ name: 'Siargo', logo: '/uploads/2024/03/Siargo-Logo-color-corrected.gif', link: 'https://www.siargo.com/' },
	];
</script>

<Shell>
	<img
		style="width:35%; height:auto; float:left; margin:0 1.5rem 1rem 0;"
		width="800"
		height="800"
		src="/uploads/2023/09/januz.webp"
		alt=""
		srcset="/uploads/2023/09/januz.webp 800w, /uploads/2023/09/januz-300x300.webp 300w, /uploads/2023/09/januz-150x150.webp 150w, /uploads/2023/09/januz-768x768.webp 768w"
		sizes="(max-width: 800px) 100vw, 800px"
	/>
	<h3>The Abundant Nexus</h3>
	<h5>MEMS, Entrepreneurism and Abundance</h5>
	<p>
		This event is motivated by a deep commitment to pay tribute to the enduring legacy of <strong
			>Dr. Janusz Bryzek</strong
		>
		who passed away in November 2022. Janusz was a renowned pioneer in the field of micro-electromechanical
		systems (MEMS). He commercialized his MEMS passion with 11 companies over his career: from pressure
		sensors to multiplexers, IMUs to ultrasonic imagers. He was an optimistic technology enthusiast who
		saw the abundance of ubiquitous low-cost MEMS devices as a means of improving the lives of everyone.
		In short, he operated at the convergence of MEMS, Entrepreneurism, and Abundance.
	</p>
	<a role="button" href="/origin-story"> Read More </a>

	<div class="speakers-section">
		<h3>Keynote Speakers</h3>

		<div class="speakers-grid">
			{#each keynoteSpeakers as speaker}
				<SpeakerCard photo={speaker.photo} name={speaker.name} title={speaker.title} abstractLink={speaker.abstractLink} />
			{/each}
		</div>
	</div>

	<div class="speakers-section">
		<h3>Guest Speakers</h3>

		<div class="speakers-grid">
			{#each guestSpeakers as speaker}
				<SpeakerCard photo={speaker.photo} name={speaker.name} title={speaker.title} abstractLink={speaker.abstractLink} />
			{/each}
		</div>
	</div>

	<div class="speakers-section">
		<h3>Panelists</h3>

		<div class="speakers-grid">
			{#each panelists as speaker}
				<SpeakerCard photo={speaker.photo} name={speaker.name} title={speaker.title} abstractLink={speaker.abstractLink} />
			{/each}
		</div>
	</div>

	<div class="speakers-section">
		<h3>Committee</h3>

		<div class="speakers-grid">
			{#each committee as speaker}
				<SpeakerCard photo={speaker.photo} name={speaker.name} title={speaker.title} abstractLink={speaker.abstractLink} />
			{/each}
		</div>
	</div>

	<div class="speakers-section">
		<h3>Organizer</h3>

		<div class="speakers-grid">
			{#each organizer as speaker}
				<SpeakerCard photo={speaker.photo} name={speaker.name} title={speaker.title} abstractLink={speaker.abstractLink} />
			{/each}
		</div>
	</div>

	<h2>Program & Agenda</h2>
	<h2><a href="/uploads/2024/04/Abundant_Nexus_Program_Rev04232024r1.pdf">Printable Agenda</a></h2>
	<h4>April 24, 2024 | Computer History Museum, Mountain View, CA</h4>

	<ul>
		<li>Breakfast and Registration</li>
		<li>7:30 am – 9:00 am</li>
	</ul>

	<ul>
		<li>Welcome and Introduction</li>
		<li>9:00 am – 9:15 am</li>
	</ul>

	<h4>Brian Bircumshaw, Abundant Nexus Chair Vice President of Product Engineering, Exo Imaging</h4>

	<h4>SESSION ONE</h4>
	<ul>
		<li>Includes Break and Lunch</li>
		<li>9:15 am – 1:30 pm</li>
	</ul>

	<h3>Keynote: Ferrari Cars go Beyond Electrons and Bytes</h3>
	<p>Benedetto Vigna, CEO, Ferrari</p>
	<a href="/speakers/benedetto" target="_self" rel="noopener">Abstract</a>

	<h3>Success in the World of One Product, One Process</h3>
	<p>Edvard Kälvesten, Founder, and Magnus Rimskog, Sales Director, Silex Microsystems</p>
	<a href="/speakers/kalvesten-edvard-rimskog-magnus" target="_self" rel="noopener">Abstract</a>

	<h3>MEMS Past and Present</h3>
	<p>Franz Laermer, Bosch Research Fellow, Robert Bosch GmbH and Stefan Majoni, Director, Bosch MEMS Foundry</p>
	<a href="/speakers/laermer-franz-majoni-stefan" target="_self" rel="noopener">Abstract</a>

	<h3>Combining MEMS & Abundance in Creating a Company</h3>
	<p>Sandeep Akkaraju, Co-Founder and CEO, Exo Imaging</p>
	<a href="/speakers/akkaraju-sandeep" target="_self" rel="noopener">Abstract</a>

	<h3>Serial Entrepreneurism: Lessons in Innovation and Research</h3>
	<p>Curtis Ray, Head of Business Development, Omnitron Sensors</p>
	<a href="/speakers/ray-curtis" target="_self" rel="noopener">Abstract</a>

	<h3>Crossing the Chasm: from Academic Lab to Consumer Pockets</h3>
	<p>David Horsley, Co-Director, Institute for NanoSystems Innovation, Northeastern University</p>
	<a href="/speakers/david-horsley" target="_self" rel="noopener">Abstract</a>

	<h4>SESSION TWO</h4>
	<ul>
		<li>1:30 – 4:45 (includes breaks)</li>
	</ul>

	<h3>Keynote: Age of Abundance</h3>
	<p>Peter Diamandis, Founder and Executive Director of the XPRIZE Foundation & Executive, Founder of Singularity University</p>
	<a href="/speakers/peter-diamandis-age-of-abundance" target="_self" rel="noopener">Abstract</a>

	<h3>The Secret of Successful Fundraising</h3>
	<p>Weijie Yun, Founder and Managing Partner, Tyche Partners</p>
	<a href="/speakers/weijie-yun" target="_self" rel="noopener">Abstract</a>

	<h3>Creating the Future with MEMS</h3>
	<p>Kurt Petersen, Founder and President, KP-MEMS</p>
	<a href="/speakers/kurt-petersen" target="_self" rel="noopener">Abstract</a>

	<h3>Trillion Sensors - A Visionary Concept</h3>
	<p>Susumu Kaminaga, Representative Director & Cheif Executive, SK Global Advisers Co., Ltd.</p>
	<a href="/speakers/kaminaga-susumu" target="_self" rel="noopener">Abstract</a>

	<h3>Novel MEMS/Sensor Solutions Enable Abundance</h3>
	<p>Roger H. Grace, Roger Grace Associates</p>
	<a href="/speakers/grace-roger" target="_self" rel="noopener">Abstract</a>

	<h4>SESSION THREE</h4>
	<ul>
		<li>4:45 pm – 6:00 pm</li>
	</ul>

	<h3>Panel Discussion : The Future of MEMS</h3>
	<a href="/speakers/swaminathan-rajaraman" target="_self" rel="noopener">Abstract</a>
	<p>Moderator: Swaminathan Rajaraman, Associate Professor in NanoScience Technology Center (NSTC) and the Department of Materials Science and Engineering at University of Central Florida (Orlando, FL)</p>

	<p>
		<strong>Panelists:</strong>
	</p>
	<ul>
		<li>Alissa Fitzgerald, Founder and CEO of A.M. Fitzgerald & Associates, LLC.</li>
		<li>Evgeni Gousev, Senior Director of Engineering, Qualcomm Research</li>
		<li>Mary Ann Maher, CEO, SoftMEMS, LLC</li>
		<li>Kris Pister, Co-Director of the Berkeley Sensor and Actuator Center (BSAC) and the Ubiquitious Swarm Lab</li>
		<li>Shad Roundy, Associate Professor, Department of Mechanical Engineering, University of Utah</li>
	</ul>

	<h3>Wrap Up</h3>
	<p>Brian Bircumshaw, Abundant Nexus Chair Vice President of Product Engineering, Exo Imaging</p>

	<ul>
		<li>RECEPTION</li>
		<li>6:00 pm – 8:00 pm</li>
	</ul>

	<h3>Venue</h3>
	<ul>
		<li>
			<a href="https://computerhistory.org/about/" target="_blank" rel="noopener">Computer History Museum</a>
		</li>
	</ul>

	<img
		style="width:35%; height:auto; float:left; margin:0 1.5rem 1rem 0;"
		width="1280"
		height="642"
		src="/uploads/2023/11/Computer-History-Museum.jpg"
		alt=""
		srcset="/uploads/2023/11/Computer-History-Museum.jpg 1280w, /uploads/2023/11/Computer-History-Museum-300x150.jpg 300w, /uploads/2023/11/Computer-History-Museum-1024x514.jpg 1024w, /uploads/2023/11/Computer-History-Museum-768x385.jpg 768w"
		sizes="(max-width: 1280px) 100vw, 1280px"
	/>

	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12675.86469713742!2d-122.077409!3d37.4142744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7569249b39b%3A0xea8071641d7ef4f2!2sComputer%20History%20Museum!5e0!3m2!1sen!2s!4v1701130697229!5m2!1sen!2s"
		width="100%"
		height="auto"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Computer History Museum Map"
	></iframe>

	<ul>
		<li>
			<a href="https://computerhistory.org/" target="_blank" rel="noopener">
				1401 N Shoreline Blvd, Mountain View, CA 94043
			</a>
		</li>
		<li>April 24, 2024</li>
	</ul>

	<h4>Abundant Nexus Conference</h4>
	<p>The Convergence of MEMS Technology, Entrepreneurism & Abundance.</p>

	<h4>Accommodations</h4>
	<p>
		Although we have not arranged for room blocks with any specific hotels near the Museum, this
		<strong>
			<a
				href="https://www.expedia.com/Hotel-Search?adults=2&children=&destination=Computer+History+Museum%2C+Mountain+View%2C+California%2C+United+States+of+America&endDate=2024-04-25&flexibility=2_DAY&gad_source=1&gclid=CjwKCAiAqY6tBhAtEiwAHeRopXjt813VnjAv1v67ZrjVZ4-2dhD4XfZIbLs-okk0SPybju0buuR4_xoC2OcQAvD_BwE&latLong=&locale=en_US&lodging=HOTEL&mapBounds=&pwaDialog=&regionId=6063329&semcid=US.UB.GOOGLE.LM-c-EN.HOTEL&semdtl=a111798313512.b1114088092625.g1kwd-11067563795.e1c.m1CjwKCAiAqY6tBhAtEiwAHeRopXjt813VnjAv1v67ZrjVZ4-2dhD4XfZIbLs-okk0SPybju0buuR4_xoC2OcQAvD_BwE.r15a3568f2bd4c10051bd214af6736508479a02655126b7be577131f181be857b8.c1.j19010513.k1.d1663197484619.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&siteid=1&startDate=2024-04-23"
				target="_blank"
				rel="noopener"
			>
				link
			</a>
		</strong>
		will show you many choices, and distances from the Computer History Museum. This list is hotels only,
		and the dates entered are April 23-25, but you can filter many different ways.
	</p>

	<h3>Our Sponsors</h3>
	<p>
		<a href="/uploads/2024/02/Abundant_Nexus_Sponsorship_Information_20240220.pdf" target="_blank" rel="noopener">
			Sponsor Opportunities
		</a>
		|
		<a href="/uploads/2024/03/Reasons-to-become-a-Sponsor.pdf" target="_blank" rel="noopener">
			Reasons to Sponsor
		</a>
	</p>

	<h3>Sponsors</h3>

	<SponsorSection level="Diamond" levelClass="sponsor-diamond" sponsors={diamondSponsors} />
	<SponsorSection level="Platinum" levelClass="sponsor-platinum" sponsors={platinumSponsors} />
	<SponsorSection level="Gold" levelClass="sponsor-gold" sponsors={goldSponsors} />
	<SponsorSection level="Silver+" levelClass="sponsor-silver-plus" sponsors={silverPlusSponsors} />
</Shell>
