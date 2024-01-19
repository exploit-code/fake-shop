import { CACHING_IMAGES } from "../constants/carousel";

export interface IStateCarusel {
  readonly carousel: string[];
}

export interface ICachingImages {
  readonly type: typeof CACHING_IMAGES;
  readonly payload: string;
}

export type TCaruselUnionActions = ICachingImages;
