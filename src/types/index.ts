export interface StatItem {
  value: string;
  label: string;
}

export interface ChipItem {
  icon: string;
  label: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

export interface MetricItem {
  val: string;
  label: string;
}

export interface ProofShot {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  subtitle: string;
}

export interface CaseStudyItem {
  id: string;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  tag: string;
  pill: string;
  metricsRow1: MetricItem[];
  metricsRow2?: MetricItem[];
  insight: {
    label: string;
    text: string;
    boldText?: string;
    suffix?: string;
  };
  note?: string;
  shots: ProofShot[];
  shotsGrid?: ProofShot[];
}

export interface BrandItem {
  name: string;
  tagline: string;
  meta: string;
  results: string[];
  logo?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  roleType: string;
  desc: string;
  bullets: string[];
}

export interface ToolCategory {
  category: string;
  items: {
    name: string;
    role: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issued: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
}
