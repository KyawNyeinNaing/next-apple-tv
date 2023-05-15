type Color = {
  [key: string]: Array<string>
}

export type FontType = {
  [key: string]: number;
};

export type ColorType = {
  [key: string]: any | string | {
    [key: string]: string;
  };
};

export type ImageResponseType = {
  _id?: string
  name?: string
  type?: string;
  description?: string
  path?: string
  size?: number
  createdAt?: string
  updatedAt?: string
  __v?: string
}
