import translations from '../constants/translations';

const translateObject = (objectToTranslate, translationRule) => {
  let translatedObject = {};

  Object.entries(objectToTranslate).forEach(([key, value], index) => {
    const hasTranslation = Boolean(translations[translationRule] && translations[translationRule][key])
    if (hasTranslation) {
      translatedObject[translations[translationRule][key]] = value;
    } else {
      translatedObject[key] = value;
    }
  })

  return translatedObject;
}

export {
  translateObject
}