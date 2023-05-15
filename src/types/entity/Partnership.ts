import { ImageResponseType } from '@/types/Constant';

export type PartnershipResponseType = {
  ourPriority: {
    title: string;
    summary: string;
  };
  becomePartner: {
    title: string;
    description: string;
    image: ImageResponseType;
  };
  _id: string;
  partnershipTitle: string;
  partnershipDescription: string;
  banner: {
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
  ourPartner: {
    name: string;
    summary: string;
    image: ImageResponseType;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
};
