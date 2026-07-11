<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }
  let { children }: Props = $props();

  const siteUrl = "https://lekhapet.com";
  const siteName = "ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ | លេខាពេទ្យ - lekhapet";
  const siteDescription =
    "ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ lekhapet ជាកម្មវិធីឌីជីថលសម្រាប់គ្រប់គ្រងអ្នកជំងឺ ឱសថស្ថាន មន្ទីរពិសោធន៍ បំណុល និងសេវាកម្មសុខភាពទាំងអស់នៅកម្ពុជា។ សូមស្វាគមន៍សាកល្បងឥតគិតថ្លៃ។";
  const ogImage = `${siteUrl}/assets/img/tiumnel.png`;
  const twitterHandle = "@lekhapet";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "lekhapet",
    url: siteUrl,
    logo: `${siteUrl}/logo_lekhapet.webp`,
    description: siteDescription,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+855-66-552-444",
        contactType: "sales",
        availableLanguage: ["Khmer", "English"] as string[],
      },
      {
        "@type": "ContactPoint",
        telephone: "+855-96-99-44-681",
        contactType: "sales",
        availableLanguage: ["Khmer", "English"] as string[],
      },
    ],
    sameAs: [
      "https://www.facebook.com/korn.seheng",
      "https://www.facebook.com/an.channean",
      "https://t.me/kornseheng",
      "https://t.me/an_channean",
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "lekhapet - ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ lekhapet សម្រាប់ស្ថាប័នសុខភាពនៅកម្ពុជា រួមមានការចុះឈ្មោះអ្នកជំងឺ ការគ្រប់គ្រងឱសថស្ថាន មន្ទីរពិសោធន៍ និងការទូទាត់។ Comprehensive hospital management system (HMS) for healthcare providers in Cambodia.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    provider: {
      "@type": "Organization",
      name: "lekhapet",
      url: siteUrl,
    },
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
  <meta
    property="og:image:alt"
    content="lekhapet Hospital Management System - Healthcare Software for Cambodia"
  />
  <meta property="og:site_name" content="lekhapet" />
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
  <link rel="alternate" hreflang="x-default" href={siteUrl} />

  <!-- JSON-LD Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(softwareSchema)}</script>`}
</svelte:head>

{@render children?.()}
