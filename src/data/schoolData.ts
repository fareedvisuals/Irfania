import { Administrator, ClassGrade, GalleryItem, HostelFeature } from '../types';
import hifzStudentImg from '../assets/images/hifz_student_quran_1788607483940.jpg';
import hifzClassImg from '../assets/images/hifz_class_students_1788607506690.jpg';
import founderImg from '../assets/images/founder.jpg';

export { founderImg };

export const SCHOOL_INFO = {
  name: 'Irfania Model Higher Secondary School',
  tagline: 'Building Knowledge, Character & A Brighter Future',
  subheading:
    'Providing quality education from Class 1 to Class 10, an optional Hifz-ul-Quran program from Class 6 onward, and supportive hostel facilities for students.',
  contact: {
    addressPlaceholder: 'Campus Address, Main Road (Contact Administration for Full Campus Location & Visiting Details)',
    phone: '0323 4720208',
    phoneFormatted: '0323 4720208',
    phoneInternational: '+92 323 4720208',
    phoneTel: 'tel:03234720208',
    whatsappUrl: 'https://wa.me/923234720208?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Irfania%20Model%20Higher%20Secondary%20School%20admissions%20and%20hostel.',
    emailPlaceholder: 'info@irfaniaschool.edu.pk',
    visitingHours: 'Monday – Saturday: 8:00 AM – 2:30 PM',
    admissionOffice: 'Admissions Office Open for Parent Inquiries & Campus Tours',
  },
};

export const CLASSES_DATA: ClassGrade[] = [
  // Primary (Classes 1 to 5)
  {
    grade: 'Class 1',
    level: 'Primary',
    description: 'Foundational literacy, numeracy, social skills, and moral habit building in a nurturing setting.',
    focusAreas: ['Basic Reading & Writing', 'Foundational Mathematics', 'Moral Values & Manners', 'Creative Activities'],
  },
  {
    grade: 'Class 2',
    level: 'Primary',
    description: 'Strengthening cognitive basics, vocabulary, expression, and supportive peer collaboration.',
    focusAreas: ['Language Comprehension', 'Arithmetic & Problem Solving', 'General Knowledge', 'Art & Motor Skills'],
  },
  {
    grade: 'Class 3',
    level: 'Primary',
    description: 'Developing independent study habits, sentence building, and curiosity in science & nature.',
    focusAreas: ['Reading Fluency', 'Elementary Science Concepts', 'Social Awareness', 'Islamic & Moral Studies'],
  },
  {
    grade: 'Class 4',
    level: 'Primary',
    description: 'Deepening analytical understanding, structured writing, and active classroom participation.',
    focusAreas: ['Structured Composition', 'Applied Math', 'Environmental Studies', 'Confidence Building'],
  },
  {
    grade: 'Class 5',
    level: 'Primary',
    description: 'Primary transition benchmark preparing students with strong conceptual foundation for middle school.',
    focusAreas: ['Primary Assessment Readiness', 'Concept-based Learning', 'Discipline & Responsibility', 'Physical Play & Sports'],
  },
  // Middle (Classes 6 to 8)
  {
    grade: 'Class 6',
    level: 'Middle',
    description: 'Entry to middle school with broader academic subjects. Optional Hifz-ul-Quran enrollment begins here.',
    focusAreas: ['Science Exploration', 'Advanced Grammar & Writing', 'Mathematics Concepts', 'Optional Hifz-ul-Quran Option'],
  },
  {
    grade: 'Class 7',
    level: 'Middle',
    description: 'Critical thinking, lab demonstrations, history, and active development of academic discipline.',
    focusAreas: ['Integrated Science', 'Pre-Algebra & Geometry', 'Social Studies & History', 'Character & Ethics'],
  },
  {
    grade: 'Class 8',
    level: 'Middle',
    description: 'Culmination of middle school studies and focused academic preparation for matriculation transition.',
    focusAreas: ['Board Syllabus Groundwork', 'Computer & IT Basics', 'Comprehensive Math & Science', 'Self-discipline & Focus'],
  },
  // Secondary (Classes 9 & 10)
  {
    grade: 'Class 9',
    level: 'Secondary',
    description: 'Matriculation Part-I academic curriculum with thorough subject mastery and experienced teacher mentoring.',
    focusAreas: ['Physics, Chemistry & Biology / Computer', 'Advanced Mathematics', 'English & Urdu Mastery', 'Board Exam Orientation'],
  },
  {
    grade: 'Class 10',
    level: 'Secondary',
    description: 'Matriculation completion year with intensive academic coaching, test series, and character mentorship.',
    focusAreas: ['Matric Board Examination Mastery', 'Conceptual Revision & Papers', 'Career Guidance & Values', 'Leadership Development'],
  },
];

export const ADMINISTRATORS: Administrator[] = [
  {
    role: 'Founder',
    name: 'Dr. Syed Muhammad Habib Irfani',
    titleBadge: 'Founding Visionary',
    image: founderImg,
    roleDescription:
      'Established the vision of Irfania Model Higher Secondary School with a steadfast dedication to high educational standards, moral integrity, and student development.',
  },
  {
    role: 'Principal',
    name: 'Muhammad Hussain Akbar Colonel.Rtd',
    titleBadge: 'Institutional Head',
    roleDescription:
      'Provides disciplined leadership, administrative oversight, and educational direction to ensure an orderly, goal-oriented, and supportive school environment.',
  },
  {
    role: 'Vice Principal',
    name: 'Qari Muhammad Younus Chisti',
    titleBadge: 'Academic & Spiritual Guidance',
    roleDescription:
      'Oversees academic coordination, character building, teacher collaboration, and provides respected oversight for educational and moral initiatives.',
  },
  {
    role: 'Hostel Manager',
    name: 'Syed Muhammad Kashif Ali Shah',
    titleBadge: 'Student Residential Care',
    roleDescription:
      'Manages student residential accommodation, three-time daily meals, evening study routines, recreational activities, and ensures student safety and welfare.',
  },
];

export const HOSTEL_FEATURES: HostelFeature[] = [
  {
    title: 'Comfortable Accommodation',
    description:
      'Clean, organized, and supervised residential living spaces designed to provide students with peace of mind and adequate rest.',
    iconName: 'Bed',
    highlight: true,
  },
  {
    title: 'Three-Time Meals Every Day',
    description:
      'Nutritious, hygienic breakfast, lunch, and dinner prepared daily to support students health, growth, and energetic daily schedule.',
    iconName: 'Utensils',
    highlight: true,
  },
  {
    title: 'Student-Friendly Environment',
    description:
      'A welcoming and respectful residential atmosphere where students form genuine brotherhood, develop confidence, and feel at home.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Educational Support & Study Hours',
    description:
      'Structured evening prep sessions and study support where hostel students receive supervision and academic guidance for their homework.',
    iconName: 'BookOpenCheck',
  },
  {
    title: 'Games & Recreational Activities',
    description:
      'Scheduled physical sports, outdoor games, and wholesome recreation to keep students active, refreshed, and physically fit.',
    iconName: 'Trophy',
  },
  {
    title: 'Trips & Educational Outings',
    description:
      'Carefully planned weekend excursions, recreational visits, and educational tours organized specifically for hostel residents.',
    iconName: 'Compass',
  },
  {
    title: 'Safe & Disciplined Environment',
    description:
      'Dedicated hostel management ensuring daily routine adherence, moral discipline, safety, and continuous pastoral care.',
    iconName: 'ShieldCheck',
    highlight: true,
  },
  {
    title: 'Various Hostel Facilities',
    description:
      'Essential student amenities, laundry assistance, study desks, drinking water, and residential conveniences designed for student life.',
    iconName: 'Sparkles',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-founder',
    title: 'School Founder — Dr. Syed Muhammad Habib Irfani',
    category: 'School',
    image: founderImg,
    description: 'Respected Founder of Irfania Model Higher Secondary School, whose educational vision and moral patronage guide our institution.',
  },
  {
    id: 'gal-hifz-1',
    title: 'Hifz-ul-Quran Student Recitation',
    category: 'Hifz',
    image: hifzStudentImg,
    description: 'A student dressed in traditional white shalwar qameez and white cap memorizing and reciting the Holy Quran on a carved wooden rehal.',
  },
  {
    id: 'gal-hifz-2',
    title: 'Hifz-ul-Quran Class Recitation & Tajweed',
    category: 'Hifz',
    image: hifzClassImg,
    description: 'Students in white shalwar qameez and white prayer caps engaged in disciplined Quranic recitation guided by our respected instructor.',
  },
  {
    id: 'gal-1',
    title: 'Campus Main Building & Assembly Ground',
    category: 'School',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    description: 'The organized campus setting of Irfania Model Higher Secondary School where daily morning assemblies and activities take place.',
  },
  {
    id: 'gal-2',
    title: 'Interactive Classroom Learning',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Students engaged in structured classroom instruction guided by experienced teachers.',
  },
  {
    id: 'gal-3',
    title: 'Secondary Science & Practical Studies',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    description: 'Students developing conceptual understanding through visual lessons and science fundamentals.',
  },
  {
    id: 'gal-4',
    title: 'Dedicated Students During Study Session',
    category: 'Students',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Supportive learning environment encouraging mutual encouragement, confidence, and focus.',
  },
  {
    id: 'gal-5',
    title: 'Faculty Mentorship & Guidance',
    category: 'Teachers',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    description: 'Educated and dedicated teachers actively answering questions and ensuring every student comprehends the topic.',
  },
  {
    id: 'gal-6',
    title: 'Hostel Student Residence & Study Hall',
    category: 'Hostel',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean, peaceful accommodation where residential students reside, study, and rest comfortably.',
  },
  {
    id: 'gal-7',
    title: 'Three-Time Meals Dining Facility',
    category: 'Hostel',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80',
    description: 'Nutritious meals served thrice daily in a disciplined, clean, and family-friendly dining space.',
  },
  {
    id: 'gal-8',
    title: 'Cricket & Sports Activity Session',
    category: 'Games',
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3ce?auto=format&fit=crop&w=1200&q=80',
    description: 'Students actively participating in games, fostering fitness, teamwork, and healthy extracurricular spirit.',
  },
  {
    id: 'gal-9',
    title: 'School Sports & Physical Exercise',
    category: 'Games',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    description: 'Encouraging physical agility, sportsmanship, and recreational balance alongside academic studies.',
  },
  {
    id: 'gal-10',
    title: 'Educational Outing & Outdoor Excursion',
    category: 'Trips',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    description: 'Students broadening their horizons through supervised educational trips and memorable outdoor visits.',
  },
  {
    id: 'gal-11',
    title: 'Historic & Cultural Study Trip',
    category: 'Trips',
    image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1200&q=80',
    description: 'Hands-on experiential learning where students explore culture, geography, and historical heritage.',
  },
  {
    id: 'gal-12',
    title: 'Annual Academic & Character Ceremony',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Celebrating student discipline, progress, moral accomplishments, and academic effort.',
  },
];
