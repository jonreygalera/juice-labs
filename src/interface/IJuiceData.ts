export interface JuiceData {
  key: string;
  name: string;
  productImage: string;
  segmentImages: {
    src: string;
    alt: string;
    className?: string;
  }[];
  smoothieImage: {
    src: string;
    alt: string;
    className?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    text: string;
    hover: string;
  };
};
