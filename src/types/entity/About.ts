import { ImageResponseType } from '@/types/Constant';
import { ContactResponseType } from '@/types/entity/Contact';

export type AboutResponseType = {
  offer?: {
    title: string;
    description: string;
    image: ImageResponseType;
  };
  services?: {
    title: string;
    description: string;
    image: ImageResponseType[];
  };
  chairmanMessage?: {
    name: string;
    title: string;
    description: string;
    image: ImageResponseType;
  };
  vision?: {
    description: string;
    image: ImageResponseType;
  };
  mission?: {
    description: string;
    image: ImageResponseType;
  };
  _id: string;
  aboutTitle?: string;
  aboutDescription?: string;
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
  }[];
  teamMember?: {
    name: string;
    role: string;
    summary: string;
    image: string;
    _id: string;
  }[];
  companyCulture?: string;
  companyReward?: string;
  contact?: ContactResponseType;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
