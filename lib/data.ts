export type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
  stays: number;
  tag: string;
};

export type Hotel = {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
};

export type Experience = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
};

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toFa(value: number | string): string {
  return String(value).replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'سانتورینی',
    country: 'یونان',
    image:
      '/images/Boracay_Island_-_Sunset.jpg',
    stays: 184,
    tag: 'جزیره‌ای',
  },
  {
    id: 2,
    name: 'کیوتو',
    country: 'ژاپن',
    image:
      '/images/800px-Kinkaku3402CBcropped.jpg',
    stays: 126,
    tag: 'فرهنگی',
  },
  {
    id: 3,
    name: 'پاریس',
    country: 'فرانسه',
    image:
   '/images/paeis.jpg',
    stays: 312,
    tag: 'شهری',
  },
  {
    id: 4,
    name: 'بالی',
    country: 'اندونزی',
    image:
'/images/Wilkes_Island_Wake_Atoll_(170410).jpg',
    stays: 247,
    tag: 'حاره‌ای',
  },
  {
    id: 5,
    name: 'دبی',
    country: 'امارات',
    image:
    '/images/Burj-Al-Arab-Hotel-Dubai-United-Arab-Emirates1.jpg',
    stays: 198,
    tag: 'شهری',
  },
  {
    id: 6,
    name: 'کوه‌های آلپ',
    country: 'سوئیس',
    image:
     '/images/2281000.jpg',
    stays: 92,
    tag: 'کوهستانی',
  },
];

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'اقامتگاه صخره‌ای آبی',
    location: 'سانتورینی، یونان',
    image:
      '/images/Marble_Rocks_Jabalpur.jpg',
    price: 3200000,
    rating: 4.9,
    reviews: 412,
    tags: ['صبحانه رایگان', 'دید دریا', 'استخر'],
  },
  {
    id: 2,
    name: 'مسافرخانه باغ ساکورا',
    location: 'کیوتو، ژاپن',
    image:
      '/images/img-momijiya-hotel-6168289-kyoto-27.jpeg',
    price: 2100000,
    rating: 4.8,
    reviews: 358,
    tags: ['باغ', 'چشمه آب‌گرم', 'اتاق چای'],
  },
  {
    id: 3,
    name: 'میزون لومیر',
    location: 'پاریس، فرانسه',
    image:
         '/images/61b61741-7076-44bb-bbd9-4020e991d765.jpg',
    price: 2850000,
    rating: 4.7,
    reviews: 521,
    tags: ['بوتیک', 'مرکز شهر', 'بار'],
  },
  {
    id: 4,
    name: 'ویلای تگالالانگ',
    location: 'بالی، اندونزی',
    image:
        '/images/46da2fb6e58f09fdec09189b.jpg',
    price: 1750000,
    rating: 4.9,
    reviews: 289,
    tags: ['استخر خصوصی', 'دید شالیزار', 'اسپا'],
  },
  {
    id: 5,
    name: 'سوئیت‌های آسمان مارینا',
    location: 'دبی، امارات',
    image:
       '/images/An-aerial-view-of-the-Lower-and-Upper-Skyloop-1_credit-to-Safdie-Architects.jpg',
    price: 4100000,
    rating: 4.8,
    reviews: 673,
    tags: ['دید آسمان‌خط', 'استخر پشت‌بام', 'باشگاه'],
  },
  {
    id: 6,
    name: 'لج آلپن‌روز',
    location: 'کوه‌های آلپ، سوئیس',
    image:
      '/images/235fa7c735e3f05b5ea022cf.jpg',
    price: 2950000,
    rating: 4.9,
    reviews: 198,
    tags: ['دید کوهستان', 'شومینه', 'سونا'],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'اقامتگاه‌های روی آب',
    description:
      'بالای لاگون‌های شفاف در یک ویلا روی آب بیدار شوید و آرامش را تجربه کنید.',
    image:
        '/images/Marble_Rocks_Jabalpur.jpg',
    icon: 'Waves',
  },
  {
    id: 2,
    title: 'ماجراجویی در مسیر طبیعت',
    description:
      'کفش‌های خود را ببندید و با راهنمایان محلی در مسیرهای زیبا قدم بزنید.',
    image:
         '/images/Marble_Rocks_Jabalpur.jpg',
    icon: 'Mountain',
  },
  {
    id: 3,
    title: 'غواصی در مرجان‌ها',
    description:
      'به باغ‌های مرجانی رنگارنگ شیرجه بزنید و زندگی دریایی گرمسیری را از نزدیک ببینید.',
    image:
        '/images/Marble_Rocks_Jabalpur.jpg',
    icon: 'Fish',
  },
  {
    id: 4,
    title: 'شام گورمه',
    description:
      'منوهای تستینگ سرآشپزهای برنده را در فضاهایی خیره‌کننده نوش جان کنید.',
    image:
          '/images/Marble_Rocks_Jabalpur.jpg',
    icon: 'UtensilsCrossed',
  },
  {
    id: 5,
    title: 'اقامت‌های سلامت‌محور',
    description:
      'با آیین‌های اسپا، جلسات یوگا و لحظات آرامش‌بخش ذهنی، انرژی خود را دوباره به‌دست آورید.',
    image:
         '/images/Marble_Rocks_Jabalpur.jpg',
    icon: 'Flower2',
  },
];

export const stats = [
  { label: 'مقاصد', value: '۱۲۰+' },
  { label: 'اقامتگاه دست‌چین‌شده', value: '۸٬۵۰۰' },
  { label: 'مسافر خوشحال', value: '۲ میلیون' },
  { label: 'میانگین امتیاز', value: '۴٫۹' },
];
