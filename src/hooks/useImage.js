import { useState, useEffect} from 'react';
import imageLoader from 'helpers/imageLoader';

const useImage = ({src}) => {
    const [loaded, setLoaded] = useState(false);
    const [image, setImage] = useState({});

    useEffect(() => {
        if (!src) return;

        const loadImage = async (src) => {
            return await imageLoader(src);
        } 

        try {
            loadImage(src).then(
                image => {
                    setImage(image);
                    setLoaded(true)
                }
            );
        } catch (error) {

        }
    }, [src]);

    return {
        image: image,
        isLoaded: loaded
    }
};

export default useImage;