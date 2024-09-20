import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#service", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Product" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const milestone = [
  {
    imgURL: truckFast,
    label: " Loan program",
    subtext: "Successfully launched the loan program for small-scale farmers.",
  },
  {
    imgURL: shieldTick,
    label: "Training programs",
    subtext: " Expanded training programs across multiple region.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Increased crop yield by 50% through innovative practices.",
  },
  {
    imgURL: support,
    label: "Empowering Farmers for Global Food Security",
    subtext:
      " To expand our reach and impact, enabling more farmers to thrive and contributing to food security globally.",
  },
];

export const services = [
  {
    label: " Crop Farming",
    subtext:
      " - We speacialize in growing a variety of crops using innovative and sustainable farming methods. ",
    subtext1:
      "- Our large-scale operations ensure high yields and quality produce.",
  },
  {
    label: "Loan Issuance",
    subtext:
      " - Eligibility Criteria: Small-scale farmers with proven potential",
    subtext1:
      " - Application Process: Simple steps to apply online or at our office.",
    subtext2:
      " - Benefits and Terms: Low-interest rates, flexible repayment options.",
  },
  {
    label: "Animal Rearing",
    subtext: "- Types of Animals: Cattle, poultry, and goats.",
    subtext1: "- Farming Practices: High standards of animal care and hygiene.",
    subtext2:
      "- Market Availability: Regular supply to local and regional markets.",
  },
  {
    label: "Training",
    subtext:
      "- Programs Offered: Modern farming techniques, business management, and more.",
    subtext1:
      "- Schedule and Duration: Monthly sessions, each lasting 2 weeks.",
    subtext2:
      "- Registration Process: Online registration or visit our office.",
  },
  {
    label: "Agricultural Investment",
    subtext:
      " - Opportunities Available: Investment in crop production, livestock, and infrastructure.",
    subtext1:
      " - Potential Returns: Competitive returns with detailed financial reports.",
    subtext2:
      " - How to Get Started: Contact us to learn more about investment opportunities.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Ayuba Idris",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Mike Samgbe",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Crop Farming" },
      { name: "Loan Issuance" },
      { name: "Animal Rearing" },
      { name: "Training" },
      { name: "Agricultural Investment" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", link: "#home" },
      { name: "Service", link: "#service" },
      { name: "Blog", link: "#blog" },
      { name: "Gallery", link: "#gallery" },
      { name: "FAQs", link: "#faq" },
      { name: "About us", link: "#about" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "info@ayfarms.com", link: "mailto:info@ayfarms.com" },
      { name: "+2348143795632", link: "tel:+2348143795632" },
      { name: "+2348030863551", link: "tel:+2348030863551" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
