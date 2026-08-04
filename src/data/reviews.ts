export interface Review {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  comment: string;
  routeTaken: string;
  vehicleType: string;
  avatarUrl?: string;
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: "3",
    name: "الأستاذ محمد الكواري",
    country: "دولة قطر",
    rating: 5,
    date: "أغسطس 2026",
    comment: "تعاملنا مع رواحل جمان لنقل العائلة من مكة المكرمة إلى المدينة المنورة بسيارة هيونداي ستاريا VIP. التكييف والراحة والنوافذ البانورامية جعلت طريق الهجرة ممتعاً للغاية. تجربة راقية بحق.",
    routeTaken: "مكة المكرمة إلى المدينة المنورة",
    vehicleType: "هيونداي ستاريا VIP",
    verified: true
  },
  {
    id: "4",
    name: "الحاج إبراهيم منصور",
    country: "دولة الإمارات العربية المتحدة",
    rating: 5,
    date: "أغسطس 2026",
    comment: "حجزنا فان تويوتا هايس لنقل مجموعة من 11 معتمراً. الالتزام بالوقت كان دقيقاً للغاية والسائق كان مساعداً جداً في تحميل وتنزيل الحقائب. شكراً لشركة رواحل جمان على هذه الاحترافية.",
    routeTaken: "مطار جدة إلى مكة والمدينة",
    vehicleType: "تويوتا هايس",
    verified: true
  },
  {
    id: "5",
    name: "المهندس خالد العتيبي",
    country: "الكويت",
    rating: 5,
    date: "يوليو 2026",
    comment: "فورد تورس رائعة وسائق في قمة الأدب والاحترام. التوصيل من مطار جدة إلى فندق جبل عمر بمكة كان ممتازاً وسريعاً. الدعم الفني عبر الواتساب متجاوب وسريع جداً.",
    routeTaken: "مطار جدة إلى مكة المكرمة",
    vehicleType: "فورد تورس VIP",
    verified: true
  }
];
