/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
export const menuItems = [
  {
    label: 'Nuestros Servicios',
    path: '#services',
    offset: '81',
  },
  {
    label: 'Blog',
    path: '#branch',
    offset: '100',
  },
  {
    label: 'How We Works',
    path: '#work',
    offset: '81',
  },
  {
    label: 'Our Milestone',
    path: '#milestone',
    offset: '81',
  },
  {
    label: 'Donate Us',
    path: '#donate',
    offset: '81',
  },
  {
    label: 'Fundraisers',
    path: '#fundraisers',
    offset: '81',
  },
  {
    label: 'Our Blog',
    path: '#blog',
    offset: '81',
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import bannerSlide1 from 'common/assets/image/charity/banner/slide1.png';
import bannerSlide2 from 'common/assets/image/charity/banner/slide2.png';
import bannerSlide3 from 'common/assets/image/charity/banner/slide3.png';

export const bannerSlides = [
  {
    id: 1,
    thumb_url: bannerSlide1,
  },
  {
    id: 2,
    thumb_url: bannerSlide2,
  },
  {
    id: 3,
    thumb_url: bannerSlide3,
  },
];

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/charity/feature/1.svg';
import featureIcon2 from 'common/assets/image/charity/feature/2.svg';
import featureIcon3 from 'common/assets/image/charity/feature/3.svg';
import featureIcon4 from 'common/assets/image/charity/feature/4.svg';
import featureIcon5 from 'common/assets/image/charity/feature/5.svg';
import featureIcon6 from 'common/assets/image/charity/feature/6.svg';

export const featureData = {
  title: 'They Care, Do You?',
  slogan: 'Here is how you can get involved and make a change.',
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: 'Sponsor A Water',
      description:
        'If you want to change the world, one wish at a time, help kids',
    },
    {
      id: 2,
      icon: featureIcon2,
      title: 'Pledge For A Cause',
      description: 'If you want to change the world, one wish at a time.',
    },
    {
      id: 3,
      icon: featureIcon3,
      title: 'Buy a Coffee',
      description: 'If you want to change the world, one wish at a time.',
    },
    {
      id: 4,
      icon: featureIcon4,
      title: 'Volunteer With Us',
      description:
        'If you want to change the world, one wish at a time, help kids',
    },
    {
      id: 5,
      icon: featureIcon5,
      title: 'Partner With Us',
      description: 'If you want to change the world, one wish at.',
    },
    {
      id: 6,
      icon: featureIcon6,
      title: 'Help us for Educational ',
      description: 'If you want to change the world, one wish at a time.',
    },
  ],
};

/* ------------------------------------ */
// Branch section data
/* ------------------------------------ */
import thumbImage from 'common/assets/image/charity/branch/image.png';
import thumbImage1 from 'common/assets/image/charity/branch/image1.png';
import thumbImage2 from 'common/assets/image/charity/branch/image2.png';
import thumbImage3 from 'common/assets/image/charity/branch/image3.png';
import thumbImage4 from 'common/assets/image/charity/branch/image4.png';
import thumbImage5 from 'common/assets/image/charity/branch/image5.png';

export const branchData = [
  {
    id: 1,
    menuItem: 'Afganistan',
    image: thumbImage1,
    slogan: '',
    title: ``,
    description:
      `En <strong>Penuel Counseling</strong> nos dedicamos a brindar servicios de asesoramiento compasivos y efectivos para ayudar a las personas a enfrentar los 
      desafíos de la vida y lograr el crecimiento personal.
      <br />
      Estamos comprometidos a crear un espacio seguro y sin prejuicios donde pueda explorar sus pensamientos, emociones y experiencias en un entorno de apoyo 
      y confidencialidad.
      <br />
      En el centro de nuestra práctica está la creencia en la resiliencia inherente y la capacidad de crecimiento dentro de cada individuo. 
      Nos basamos en técnicas terapéuticas basadas en la evidencia y adaptamos nuestro enfoque para satisfacer sus necesidades y objetivos únicos. 
      <br />
      Nuestro objetivo es capacitarlo para que desarrolle conocimientos, descubra fortalezas y adquiera herramientas prácticas que puedan mejorar su bienestar general.`,
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  }
];

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */
import mapPin from 'common/assets/image/charity/services/mapPin.png';
import searchIcon from 'common/assets/image/charity/search-icon.svg';
import icon1p from 'common/assets/image/charity/services/icon2p.png';

export const workData = {
  title: 'Nuestros Servicios',
  slogan:
    'Con Penuel Counseling, puedes acceder a consejería y terapia desde cualquier lugar, en cualquier momento. No más conflictos de programación o viajes largos.',
  features: [
    {
      id: 1,
      icon: mapPin,
      title: 'Terapia individual',
      description:
        'Sesiones individuales para abordar desafíos personales, problemas emocionales y problemas de salud mental',
    },
    {
      id: 2,
      icon: searchIcon,
      title: 'Autoexploración y crecimiento personal',
      description:
        'Guiar a las personas en la exploración de su identidad y objetivos para fomentar  el desarrollo personal y el bienestar general',
    },
    {
      id: 3,
      icon: icon1p,
      title: 'Tratamiento de la depresión',
      description:
        'Apoyo y orientación para personas que experimentan síntomas de depresión, utilizando intervenciones terapéuticas adaptadas a sus necesidades únicas.',
    },
  ],
};
/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: 'OUR FIRST MILESTONE',
  amount: '$4M',
  text: 'RAISED TO DATE',
  counterItems: [
    {
      id: 1,
      amount: '154',
      title: 'Successful Project',
    },
    {
      id: 2,
      amount: '1534',
      title: 'People Impacted',
    },
    {
      id: 3,
      amount: '71',
      title: 'Supported Country',
    },
    {
      id: 4,
      amount: '15k',
      title: 'Money Donated',
    },
  ],
};

/* ------------------------------------ */
// Humanity block data
/* ------------------------------------ */
import humanityGlob from 'common/assets/image/charity/humanity-glob.png';

export const humanityData = {
  image: humanityGlob,
  slogan: 'ONLINE SOCIAL FUNDRAISING',
  title: 'We need your help to promotr humanity',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  lists: [
    {
      id: 1,
      text: 'Let them drink pure',
    },
    {
      id: 2,
      text: 'Ensure them medicare',
    },
    {
      id: 3,
      text: 'create opportunity of education',
    },
  ],
};

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */
import happyKids from 'common/assets/image/charity/promotion.svg';

export const promotionData = {
  slogan: 'GET YOUR COMMUNITY ON BOARD',
  title: 'We are creating a world with basic safety for all.',
  text1:
    'We exist to permanently end violent conict and exploitation facing our world’s most isolated and unprotected communities.',
  text2:
    'We partner with local visionaries in volatile conict zones to build community-run initiatives and drive global policy change to end violent conict, save lives, and give communities the safety they deserve.',
  lists: [
    {
      id: 1,
      text: 'Let them drink pure',
    },
    {
      id: 2,
      text: 'Ensure them medicare',
    },
    {
      id: 3,
      text: 'create opportunity of education',
    },
  ],
  image: happyKids,
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: 'One Time',
    value: 'oneTime',
    text: 'One Time donation given',
  },
  {
    id: 2,
    title: 'Ongoing',
    value: 'ongoing',
    text: 'Everymonth donation given',
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: 'usd',
    title: '$ USD',
  },
  {
    id: 2,
    value: 'gbp',
    title: '£ GBP',
  },
  {
    id: 3,
    value: 'cny',
    title: '¥ CNY',
  },
];

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */
import thumb1 from 'common/assets/image/charity/blog/thumb-1.png';
import thumb2 from 'common/assets/image/charity/blog/thumb-2.png';

export const posts = [
  {
    id: 1,
    title: 'Salud Mental',
    excerpt:
      `En este mundo acelerado, cuidar nuestra salud mental es más importante que nunca, 
      nuestro objetivo es proporcionar herraminetas y consejos prácticos e historias inspiradoras que 
      lo guiarán en su viaje hacia el bienestar mental óptimo....`,
    thumbUrl: thumb1,
    btnText: 'Leer Más',
    btnUrl: '#1',
  },
  {
    id: 2,
    title: 'Autoexploración y crecimiento personal',
    excerpt:
      `Este espacio está diseñado para inspirar y guiar a las personas en su camino de autodescubrimiento, 
      ayudándolas a desbloquear su verdadero potencial y vivir una vida más plena y auténtica...`,
    thumbUrl: thumb2,
    btnText: 'Leer Más',
    btnUrl: '#1',
  },
];

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */
import windows from 'common/assets/image/charity/clients/1.png';
import airbnb from 'common/assets/image/charity/clients/2.png';
import adidas from 'common/assets/image/charity/clients/3.png';
import ibm from 'common/assets/image/charity/clients/4.png';
import amazon from 'common/assets/image/charity/clients/5.png';
import google from 'common/assets/image/charity/clients/6.png';

export const clients = [
  {
    id: 1,
    logo: windows,
    name: 'windows',
    link: '#1',
  },
  {
    id: 2,
    logo: airbnb,
    name: 'airbnb',
    link: '#2',
  },
  {
    id: 3,
    logo: adidas,
    name: 'adidas',
    link: '#3',
  },
  {
    id: 4,
    logo: ibm,
    name: 'ibm',
    link: '#4',
  },
  {
    id: 5,
    logo: amazon,
    name: 'amazon',
    link: '#5',
  },
  {
    id: 6,
    logo: google,
    name: 'google',
    link: '#6',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: 'FUNDRAISE FOR',
    menu: [
      {
        id: 1,
        text: 'Medical',
        link: '#1',
      },
      {
        id: 2,
        text: 'Emergency',
        link: '#1',
      },
      {
        id: 3,
        text: 'Memorial',
        link: '#1',
      },
      {
        id: 4,
        text: 'Education',
        link: '#1',
      },
      {
        id: 5,
        text: 'Charity',
        link: '#1',
      },
      {
        id: 6,
        text: 'Nonprofit organization',
        link: '#1',
      },
    ],
  },
  {
    id: 2,
    title: 'LEARN MORE',
    menu: [
      {
        id: 1,
        text: 'How invisiblechildren works',
        link: '#1',
      },
      {
        id: 2,
        text: 'Pricing and Fees',
        link: '#1',
      },
      {
        id: 3,
        text: 'Common questions',
        link: '#1',
      },
      {
        id: 4,
        text: 'Success stories',
        link: '#1',
      },
      {
        id: 5,
        text: 'Supported countries',
        link: '#1',
      },
    ],
  },
  {
    id: 3,
    title: 'RESOURCES',
    menu: [
      {
        id: 1,
        text: 'Help center',
        link: '#1',
      },
      {
        id: 2,
        text: 'Blog',
        link: '#1',
      },
      {
        id: 3,
        text: 'GoFundMe Stories',
        link: '#1',
      },
      {
        id: 4,
        text: 'Press center',
        link: '#1',
      },
      {
        id: 5,
        text: 'Careers',
        link: '#1',
      },
      {
        id: 6,
        text: 'About',
        link: '#1',
      },
    ],
  },
];

export const copyright = [
  {
    id: 1,
    text: 'Privacy Policy',
    link: '1#',
  },
  {
    id: 2,
    text: 'Terms and Conditions',
    link: '1#',
  },
];

import { Icon } from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={linkedin} />,
    name: 'linkedin',
    link: '1#',
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: '2#',
  },
  {
    id: 3,
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: '3#',
  },
  {
    id: 4,
    icon: <Icon icon={github} />,
    name: 'github',
    link: '4#',
  },
];
