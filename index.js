import { NativeModules } from 'react-native';

const { RNHeicConverter } = NativeModules;

const isNumber = n => !isNaN(parseFloat(n));

class HEICConverter {
  static convert(params) {
    const { extension, quality, path } = params;
    const options = {
      path: path.startsWith('file://') ? path.replace('file://', '') : path,
      extension: params.extension,
    };

    switch (extension) {
      case 'png':
        options.extensionType = 1;
        break;
      case 'base64':
        options.extensionType = 2;
        break;
      default:
        options.extensionType = 0;
        options.extension = 'jpg';
    }

    if (quality && isNumber(quality) && quality <= 1) {
      options.quality = quality;
    } else {
      options.quality = 1;
    }

    return RNHeicConverter
      .convert(options)
      .then(result => (result));
  }
}

export default HEICConverter;