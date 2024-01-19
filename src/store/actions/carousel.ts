import { CACHING_IMAGES } from "../constants/carousel";
import { ICachingImages } from "../types/carousel";

export const cachingImages = (images: string): ICachingImages => ({
  type: CACHING_IMAGES,
  payload: images,
});
