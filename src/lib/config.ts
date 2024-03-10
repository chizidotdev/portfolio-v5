export const appConfig = {
	title: 'Chizi Victor - Software Developer',
	description: 'Creative software developer and unabashed nerd.',
	url: 'https://chizi.dev'
} as const;

export const personalData = {
	headline: { top: 'Building my own ideas.', bottom: 'Inspiring you to launch yours.' },
	summary: `Software developer and unabashed nerd.
        Building (and occasionally designing) aesthetic and timeless digital experiences. 
        Founder of Aidmedium, currently Senior Frontend Engineer at Pioneering Programmers.`,
	projects: [
		{
			title: 'Copia',
			link: 'https://copia.aidmedium.com',
			summary:
				'Headless e-commerce platform for small businesses and direct sales representatives.',
			pending: true
		},
		{
			title: 'Aidmedium',
			link: 'https://aidmedium.com',
			summary:
				'A web design and development agency concept helping individuals and businesses grow their online presence.',
			pending: false
		},
		{
			title: 'Nuntius',
			link: 'https://nuntius.aidmedium.com',
			summary: 'An interactive messaging web-app with a dare game.',
			pending: false
		}
	],
	socials: [
		{ id: 'twitter', name: 'Twitter', url: 'https://twitter.com/chizidotdev' },
		{ id: 'github', name: 'GitHub', url: 'https://github.com/chizidotdev' },
		{ id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/chizi-wokoma-1b486a226/' }
	]
} as const;
