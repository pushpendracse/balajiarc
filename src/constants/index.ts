export const SITE = {
  name: "BALAJI ARCHITECT",
  tagline: "Smart Design. Quality Construction.",
  phone: "+91 7238842150",
  email: "solutionshubhait.com",
  address: "Mathura, Uttar Pradesh, India",
} as const;

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services", hasDropdown: true },
  { label: "PROJECTS", href: "#projects" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const HERO_FEATURES = [
  {
    icon: "design",
    title: "MODERN DESIGNS",
    description: "Creative & Functional Architecture",
  },
  {
    icon: "vastu",
    title: "VASTU COMPLIANT",
    description: "Positive Spaces for Better Living",
  },
  {
    icon: "quality",
    title: "QUALITY ASSURED",
    description: "Premium Materials & Best Execution",
  },
  {
    icon: "delivery",
    title: "ON TIME DELIVERY",
    description: "Commitment for Every Project",
  },
] as const;

export const ABOUT_FEATURES = [
  {
    icon: "architecture",
    title: "Innovative Architecture",
    description: "Creative designs tailored to your vision",
  },
  {
    icon: "vastu",
    title: "Vastu Based Planning",
    description: "Harmonious spaces for positive living",
  },
  {
    icon: "team",
    title: "Experienced Team",
    description: "Skilled professionals at every step",
  },
  {
    icon: "satisfaction",
    title: "Customer Satisfaction",
    description: "Your dream home, our commitment",
  },
] as const;

export const SERVICES = [
  {
    title: "2D House Plan",
    description:
      "Detailed floor plans with precise measurements and optimal space utilization for your dream home.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
    icon: "plan",
  },
  {
    title: "3D Elevation Design",
    description:
      "Stunning 3D visualizations that bring your architectural vision to life before construction begins.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    icon: "elevation",
  },
  {
    title: "Interior Design",
    description:
      "Elegant interior solutions that blend aesthetics with functionality for every living space.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    icon: "interior",
  },
  {
    title: "Construction",
    description:
      "End-to-end construction services with premium materials and expert craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    icon: "construction",
  },
  {
    title: "Structural Design",
    description:
      "Safe and efficient structural engineering ensuring durability and compliance with standards.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    icon: "structural",
  },
  {
    title: "Commercial Projects",
    description:
      "Comprehensive architectural solutions for offices, retail spaces, and commercial buildings.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    icon: "commercial",
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern Villa",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=450&fit=crop",
  },
  {
    title: "Luxury Residence",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
  },
  {
    title: "Contemporary Home",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop",
  },
  {
    title: "Elegant Estate",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=450&fit=crop",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your vision, requirements, and budget through detailed discussions.",
    icon: "consultation",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our architects create detailed plans and 3D visualizations for your approval.",
    icon: "design",
  },
  {
    number: "03",
    title: "Approval",
    description:
      "We handle all necessary permits and regulatory approvals for your project.",
    icon: "approval",
  },
  {
    number: "04",
    title: "Construction",
    description:
      "Expert execution with quality materials and on-time project delivery.",
    icon: "construction",
  },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_SERVICES = [
  "2D House Plan",
  "3D Elevation Design",
  "Interior Design",
  "Construction",
  "Structural Design",
  "Commercial Projects",
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;
