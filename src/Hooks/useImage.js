import { useState, useEffect} from 'react';
import imageLoader from '../utils/imageLoader';

const useImage = ({src}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!src || loaded) return;

        const loadImage = async (src) => {
            return await imageLoader(src);
        } 

        try {
            const image = loadImage(src);
            setLoaded(true)
        } catch (error) {

        }
    }, [src]);

    return {
        isImageLoaded: loaded
    }
};

export default useImage;