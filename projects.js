/*
  Everything you need to edit lives in this file.

  SITE      your name and the one booking link every button uses.
  PROJECTS  your work. The first project is shown large, with the video.
            Keep it to 4 at most. The page only shows the first 4.

  To add a project: copy one { ... } block, paste it below the last one,
  and change the text and file paths. Put the images in assets/<project>/.
*/

window.SITE = {
  name: "Tarec Krueger",
  bookingUrl: "https://calendly.com/tareckrueger/15min",
  bookingLabel: "Book a free 15 min call",
  // Profile picture shown on the hero card.
  avatar: "assets/fish.webp",
  // Contact form endpoint from Formspree (formspree.io > your form > Integration).
  // Messages go to the email address set in your Formspree account.
  formEndpoint: "https://formspree.io/f/mvkakdbp",
  // Shown on the profile card and as the email icon.
  email: "tareckrueger@gmail.com",
  // Paste your profile links. Entries with an empty url are hidden.
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tarec-krueger-213b6644b/" },
    { label: "GitHub", url: "https://github.com/tareckrueger" },
    { label: "X", url: "https://x.com/tareckrueger" },
    // No profile link without a numeric Discord ID, so this copies the username.
    { label: "Discord", copy: "tarecmarec_65295" },
    { label: "Email", url: "mailto:tareckrueger@gmail.com" }
  ]
};

window.PROJECTS = [
  {
    name: "Volos Agency",
    kind: "Website for a creator and influencer marketing agency",
    // One line: what the client got.
    result: "A full agency website, designed and built by me, live and taking enquiries from creators and brands.",
    summary:
      "Volos manages gaming creators and runs brand campaigns with them. The site has to work for two different visitors, so creators and brands each get their own clear path to get in touch.",
    did: ["Design", "Development", "Launch"],
    url: "https://www.volos-agency.com/",
    urlLabel: "volos-agency.com",
    image: "assets/volos/hero-1440.webp",
    imageSmall: "assets/volos/hero-800.webp",
    imageAlt: "Home page of volos-agency.com with the headline Welcome to Volos Agency",
    width: 1440,
    height: 900,
    // Optional. A short screen recording, only on your best project.
    video: "assets/volos/tour.mp4",
    videoLabel: "Watch a 20 second scroll through the site",
    // Optional. Up to 2 extra real screenshots.
    shots: [
      { src: "assets/volos/creators.webp", alt: "Creator roster section of the Volos Agency site", width: 960, height: 787 },
      { src: "assets/volos/testimonials.webp", alt: "Creator testimonials section of the Volos Agency site", width: 960, height: 720 }
    ]
  }

  /*
  ,{
    name: "Next client",
    kind: "What kind of site it is",
    result: "One line about what the client got.",
    summary: "Two sentences about the job.",
    did: ["Design", "Development"],
    url: "https://example.com/",
    urlLabel: "example.com",
    image: "assets/next/hero-1440.webp",
    imageSmall: "assets/next/hero-800.webp",
    imageAlt: "Describe the screenshot",
    width: 1440,
    height: 900
  }
  */
];
