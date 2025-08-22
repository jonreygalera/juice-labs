import type { JuiceData as IJuiceData } from "../interface/IJuiceData";
import OrangeMain from "../assets/productsImages/orange/main.png";

const data : IJuiceData[] = [
  {
    key: 'orange',
    name: 'Orange Juice',
    productImage: OrangeMain,
    segmentImages: [
      { src: '/orange/segment1.png', alt: 'Orange segment 1', className: 'w-full h-auto object-cover' },
      { src: '/orange/segment2.png', alt: 'Orange segment 2', className: 'w-full h-auto object-cover' },
      { src: '/orange/segment3.png', alt: 'Orange segment 3', className: 'w-full h-auto object-cover' },
      { src: '/orange/segment4.png', alt: 'Orange segment 4', className: 'w-full h-auto object-cover' },
    ],
    smoothieImage: {
      src: '/orange/smoothie.png',
      alt: 'Orange smoothie',
      className: 'w-64 h-64 object-contain'
    },
    colors: {
      primary: 'bg-orange-500',
      secondary: 'bg-orange-200',
      text: 'text-orange-800',
      hover: 'hover:bg-orange-600'
    }
  },
  {
    key: 'cherry',
    name: 'Cherry Juice',
    productImage: '/cherry/main.png',
    segmentImages: [
      { src: '/cherry/segment1.png', alt: 'Cherry segment 1', className: 'w-full h-auto object-cover' },
      { src: '/cherry/segment2.png', alt: 'Cherry segment 2', className: 'w-full h-auto object-cover' },
      { src: '/cherry/segment3.png', alt: 'Cherry segment 3', className: 'w-full h-auto object-cover' },
      { src: '/cherry/segment4.png', alt: 'Cherry segment 4', className: 'w-full h-auto object-cover' },
    ],
    smoothieImage: {
      src: '/cherry/smoothie.png',
      alt: 'Cherry smoothie',
      className: 'w-64 h-64 object-contain'
    },
    colors: {
      primary: 'bg-red-500',
      secondary: 'bg-red-200',
      text: 'text-red-800',
      hover: 'hover:bg-red-600'
    }
  },
  {
    key: 'grapes',
    name: 'Grape Juice',
    productImage: '/grapes/main.png',
    segmentImages: [
      { src: '/grapes/segment1.png', alt: 'Grape segment 1', className: 'w-full h-auto object-cover' },
      { src: '/grapes/segment2.png', alt: 'Grape segment 2', className: 'w-full h-auto object-cover' },
      { src: '/grapes/segment3.png', alt: 'Grape segment 3', className: 'w-full h-auto object-cover' },
      { src: '/grapes/segment4.png', alt: 'Grape segment 4', className: 'w-full h-auto object-cover' },
    ],
    smoothieImage: {
      src: '/grapes/smoothie.png',
      alt: 'Grape smoothie',
      className: 'w-64 h-64 object-contain'
    },
    colors: {
      primary: 'bg-purple-500',
      secondary: 'bg-purple-200',
      text: 'text-purple-800',
      hover: 'hover:bg-purple-600'
    }
  },
  {
    key: 'soda',
    name: 'Soda',
    productImage: '/soda/main.png',
    segmentImages: [
      { src: '/soda/segment1.png', alt: 'Soda segment 1', className: 'w-full h-auto object-cover' },
      { src: '/soda/segment2.png', alt: 'Soda segment 2', className: 'w-full h-auto object-cover' },
      { src: '/soda/segment3.png', alt: 'Soda segment 3', className: 'w-full h-auto object-cover' },
      { src: '/soda/segment4.png', alt: 'Soda segment 4', className: 'w-full h-auto object-cover' },
    ],
    smoothieImage: {
      src: '/soda/smoothie.png',
      alt: 'Soda drink',
      className: 'w-64 h-64 object-contain'
    },
    colors: {
      primary: 'bg-blue-500',
      secondary: 'bg-blue-200',
      text: 'text-blue-800',
      hover: 'hover:bg-blue-600'
    }
  }
];


export default Object.freeze(data);