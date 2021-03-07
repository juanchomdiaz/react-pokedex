function unbindEvents(image) {
  // Reset callbacks
  image.onload = null;
  image.onerror = null;
  image.onabort = null;

  try {
    // Force garbage collect in old browsers
    delete image.src;
  } catch (e) {
    // Safari's strict mode throws, ignore
  }
}

const imageLoader = (url, crossOrigin) => {
  const image = new Image();

  // Support cross origin requests
  if (crossOrigin) image.crossOrigin = crossOrigin;

  return new Promise((resolve, reject) => {
    const loaded = (event) => {
      unbindEvents(image);
      resolve(event.target || event.srcElement);
    };

    const errored = (error) => {
      unbindEvents(image);
      reject(error);
    };

    image.onload = loaded;
    image.onerror = errored;
    image.onabort = errored;

    image.src = url;
  });
};

export default imageLoader;
