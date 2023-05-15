export type BlogResponseType = {
  _id: string;
  title: string;
  summary: string;
  summaryImage: string;
  content: string;
  author?:
    | {
        _id: string;
        name: string;
        email: string;
        companyId: string;
        contactNumber: string;
        isActive: true;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    | string;
  created: string;
  createdAt: string;
  updatedAt: string;
  banner?:
    | {
        _id: string;
        title: string;
        description: string;
        type: string;
        pageName: string;
        image: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    | string;
};
