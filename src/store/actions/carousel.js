export const CACHING_IMAGES = "CACHING_IMAGES";

export const cachingImages = (images) => (dispatch) => {
  dispatch({ type: CACHING_IMAGES, payload: images });
};
