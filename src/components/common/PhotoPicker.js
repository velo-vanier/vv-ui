import React from 'react';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import { labels } from '../../helpers/localization';

const PhotoPicker = props => {
    return <ImageUploader
        withIcon={true}
        buttonText={labels.chooseImage}
        onChange={(p) => props.onDrop(p)}
        imgExtension={['.jpg', '.gif', '.png']}
        maxFileSize={5242880}
    />;
}

PhotoPicker.propTypes = {
    onDrop: PropTypes.func.isRequired
}

export default PhotoPicker;