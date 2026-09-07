export type NavSection =
  | 'home'
  | 'about'
  | 'academics'
  | 'classes'
  | 'hifz'
  | 'hostel'
  | 'student-life'
  | 'sports'
  | 'trips'
  | 'faculty'
  | 'managers'
  | 'administration'
  | 'gallery'
  | 'admissions'
  | 'contact';

export interface ClassGrade {
  grade: string;
  level: 'Primary' | 'Middle' | 'Secondary';
  levelUrdu?: string;
  description: string;
  focusAreas: string[];
}

export interface Administrator {
  role: string;
  name: string;
  titleBadge?: string;
  roleDescription: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'School' | 'Classrooms' | 'Students' | 'Teachers' | 'Hostel' | 'Games' | 'Trips' | 'Events' | 'Hifz';
  image: string;
  description: string;
}

export interface HostelFeature {
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface AdmissionInquiry {
  studentName: string;
  guardianName: string;
  phone: string;
  email?: string;
  targetClass: string;
  isInterestedInHifz: boolean;
  isInterestedInHostel: boolean;
  message?: string;
}
