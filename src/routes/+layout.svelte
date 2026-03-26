<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();

	const siteUrl = 'https://krupet.com';
	const siteName = 'Krupet - ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ';
	const siteDescription = 'ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ Krupet ផ្តល់សេវាកម្មគ្រប់គ្រងអ្នកជំងឺ ឱសថស្ថាន មន្ទីរពិសោធន៍ និងសេវាកម្មសុខាភិបាលទាំងអស់';
	const ogImage = `${siteUrl}/assets/img/og-image.png`;
	const twitterHandle = '@krupet';

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Krupet',
		url: siteUrl,
		logo: `${siteUrl}/logo_krupet.webp`,
		description: siteDescription,
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: '+855-66-552-444',
				contactType: 'sales',
				availableLanguage: ['Khmer', 'English'] as string[]
			},
			{
				'@type': 'ContactPoint',
				telephone: '+855-96-99-44-681',
				contactType: 'sales',
				availableLanguage: ['Khmer', 'English'] as string[]
			}
		],
		sameAs: [
			'https://www.facebook.com/korn.seheng',
			'https://www.facebook.com/an.channean',
			'https://t.me/kornseheng',
			'https://t.me/an_channean'
		]
	};

	const softwareSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Krupet Hospital Management System',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		description: 'Comprehensive hospital management system (HMS) for healthcare providers in Cambodia, including patient registration, pharmacy management, laboratory management, and billing.',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
			description: 'Free trial available'
		},
		provider: {
			'@type': 'Organization',
			name: 'Krupet',
			url: siteUrl
		}
	};
</script>

<svelte:head>
	<meta name="geo.region" content="KH" />
	<meta name="geo.placename" content="Phnom Penh, Cambodia" />
	<meta name="geo.position" content="11.5564;104.9282" />
	<meta name="ICBM" content="11.5564, 104.9282" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Krupet Hospital Management System - Healthcare Software for Cambodia" />
	<meta property="og:site_name" content="Krupet" />
	<meta property="og:locale" content="km_KH" />
	<meta property="og:locale:alternate" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:site" content={twitterHandle} />

	<!-- Hreflang for multilingual -->
	<link rel="alternate" hreflang="km" href={siteUrl} />
	<link rel="alternate" hreflang="en" href={`${siteUrl}?lang=en`} />
	<link rel="alternate" hreflang="x-default" href={siteUrl} />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(softwareSchema)}</script>`}
</svelte:head>

{@render children?.()}
