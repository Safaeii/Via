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
      'https://images.pexels.com/photos/28000949/pexels-photo-28000949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stays: 184,
    tag: 'جزیره‌ای',
  },
  {
    id: 2,
    name: 'کیوتو',
    country: 'ژاپن',
    image:
      'https://images.pexels.com/photos/35076911/pexels-photo-35076911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stays: 126,
    tag: 'فرهنگی',
  },
  {
    id: 3,
    name: 'پاریس',
    country: 'فرانسه',
    image:
      'https://images.pexels.com/photos/17501700/pexels-photo-17501700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stays: 312,
    tag: 'شهری',
  },
  {
    id: 4,
    name: 'بالی',
    country: 'اندونزی',
    image:
      'https://images.pexels.com/photos/35428411/pexels-photo-35428411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stays: 247,
    tag: 'حاره‌ای',
  },
  {
    id: 5,
    name: 'دبی',
    country: 'امارات',
    image:
      'https://images.pexels.com/photos/28350360/pexels-photo-28350360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stays: 198,
    tag: 'شهری',
  },
  {
    id: 6,
    name: 'کوه‌های آلپ',
    country: 'سوئیس',
    image:
      'https://images.pexels.com/photos/21041270/pexels-photo-21041270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/7507131/pexels-photo-7507131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
      'https://images.pexels.com/photos/34260951/pexels-photo-34260951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Waves',
  },
  {
    id: 2,
    title: 'ماجراجویی در مسیر طبیعت',
    description:
      'کفش‌های خود را ببندید و با راهنمایان محلی در مسیرهای زیبا قدم بزنید.',
    image:
      'https://images.pexels.com/photos/3871355/pexels-photo-3871355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Mountain',
  },
  {
    id: 3,
    title: 'غواصی در مرجان‌ها',
    description:
      'به باغ‌های مرجانی رنگارنگ شیرجه بزنید و زندگی دریایی گرمسیری را از نزدیک ببینید.',
    image:
      'https://images.pexels.com/photos/7001749/pexels-photo-7001749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Fish',
  },
  {
    id: 4,
    title: 'شام گورمه',
    description:
      'منوهای تستینگ سرآشپزهای برنده را در فضاهایی خیره‌کننده نوش جان کنید.',
    image:
      'https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'UtensilsCrossed',
  },
  {
    id: 5,
    title: 'اقامت‌های سلامت‌محور',
    description:
      'با آیین‌های اسپا، جلسات یوگا و لحظات آرامش‌بخش ذهنی، انرژی خود را دوباره به‌دست آورید.',
    image:
      'https://images.pexels.com/photos/6187418/pexels-photo-6187418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Flower2',
  },
];

export const stats = [
  { label: 'مقاصد', value: '۱۲۰+' },
  { label: 'اقامتگاه دست‌چین‌شده', value: '۸٬۵۰۰' },
  { label: 'مسافر خوشحال', value: '۲ میلیون' },
  { label: 'میانگین امتیاز', value: '۴٫۹' },
];
