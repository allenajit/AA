export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'web' | 'tools' | 'exploring';
  stage: 'Proficient' | 'Currently Learning' | 'Actively Exploring' | 'Foundational';
  icon: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export interface VoiceTrustWorkflowStep {
  stepNumber: number;
  name: string;
  shortDesc: string;
  detail: string;
  icon: string;
}

export interface VoiceTrustSignal {
  title: string;
  description: string;
  metrics: string[];
  icon: string;
}

export interface VoiceTrustRiskTier {
  tier: 'LOW' | 'MEDIUM' | 'HIGH';
  scoreRange: string;
  status: string;
  actionRequired: string;
  color: string;
}

export interface ProjectWorkflow {
  title: string;
  steps: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Flagship AI Security' | 'Innovation / YIP Kerala' | 'Engineering & Software' | 'Hardware & IoT';
  year: string;
  status: 'Proposed Solution Architecture' | 'Active Hackathon Track' | 'Active Innovation Track' | 'Prototype & Lab Build' | 'Completed Concept';
  description: string;
  longDescription: string;
  problemStatement: string;
  solutionOverview: string;
  technologies: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  badge?: string;
  hackathonInfo?: {
    name: string;
    problemStatementId?: string;
    psTitle?: string;
    track?: string;
  };
  // Detailed VoiceTrust multi-signal architecture
  voiceTrustSpecs?: {
    workflow: VoiceTrustWorkflowStep[];
    signals: VoiceTrustSignal[];
    riskTiers: VoiceTrustRiskTier[];
    keyHighlights: string[];
  };
  // Dedicated YIP Kerala editable parameters
  yipSpecs?: {
    initiativeName: string;
    problemArea: string;
    proposedSolution: string;
    hardwareComponents: string[];
    softwareComponents: string[];
    targetImpact: string[];
    isEditableNotice?: boolean;
  };
  // Flexible Engineering Projects parameters
  engineeringSpecs?: {
    domain: string;
    labType: string;
    keyDeliverables: string[];
    learningTakeaways: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  type: 'Hackathon Initiative' | 'Innovation Track' | 'Workshop & Lab' | 'Team Project' | 'Internship (Upcoming)';
  description: string;
  achievements: string[];
  technologies: string[];
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  currentYear: string;
  grade?: string;
  highlights: string[];
  relevantCoursework: string[];
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: 'Hackathon' | 'Innovation Track' | 'Academic Distinction' | 'Technical Competition' | 'Workshop Recognition';
  statusBadge: string;
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
  skills: string[];
  isPlaceholder?: boolean;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  academicStage: string;
  collegeName: string;
  engineeringBranch: string;
  graduationYear: string;
  headline: string;
  tagline: string;
  bio: string[];
  focusAreas: {
    title: string;
    description: string;
    icon: string;
  }[];
  location: string;
  email: string;
  resumePath: string;
  availability: {
    status: 'Available' | 'Open for Hackathons' | 'Exploring Projects';
    text: string;
  };
  socialLinks: SocialLink[];
  stats: MetricHighlight[];
}
