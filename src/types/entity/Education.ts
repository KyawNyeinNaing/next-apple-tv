import { ImageResponseType } from '@/types/Constant';

export type EducationResponseType = {
  training: {
    title: string;
    description: string;
    images: ImageResponseType[];
  };
  _id: string;
  educationTitle: string;
  educationDescription: string;
  banner?: {
    _id: string;
    title: string;
    description: string;
    type: string;
    pageName: string;
    image: ImageResponseType;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  blogSummary: string;
  blogs?: any;
  webinars: [
    {
      title: string;
      summary: string;
      image: ImageResponseType;
      _id: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
};
