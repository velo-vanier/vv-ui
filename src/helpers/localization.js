const LOCALIZATION_LANG = 'LOCALIZATION_LANG';
const FRENCH = 'fr-ca';
const ENGLISH = 'en-us';

const getLocalization = () => {
    const lang = localStorage.getItem(LOCALIZATION_LANG);

    return lang == null ? ENGLISH : lang;
}

const setLocalization = (lang) => {
    localStorage.setItem(LOCALIZATION_LANG, lang);
    window.location.reload();
}

export const switchLanguage = () => setLocalization(getLocalization() === ENGLISH ? FRENCH : ENGLISH);

const EnglishLabels = {
    projectTitle: 'Velo-Vanier',
    lang: 'Fr',

    areYouSureToDelete: x => `Are you sure to delete '${x}'?`,
    loadingFailed: x => `Loading ${x} failed.`,
    saveFailed: x => `Save ${x} failed.`,
    deleteFailed: x => `Delete ${x} failed.`,
    deleteTitle: x => `Delete ${x}`,
    addNew: x => `Add new ${x}`,
    editNew: x => `Edit ${x}`,
    nameExists: x => `One ${x} with this name exists. Please enter another name.`
};

//please translate to French
const FrenchLabels = {
    projectTitle: 'Velo-Vanier',
    lang: 'En',

    areYouSureToDelete: x => `Are you sure to delete '${x}'?`,
    loadingFailed: x => `Loading ${x} failed.`,
    saveFailed: x => `Save ${x} failed.`,
    deleteFailed: x => `Delete ${x} failed.`,
    deleteTitle: x => `Delete ${x}`,
    addNew: x => `Add new ${x}`,
    editNew: x => `Edit ${x}`,
    nameExists: x => `One ${x} with this name exists. Please enter another name.`
};

export const labels = getLocalization() === ENGLISH ? EnglishLabels : FrenchLabels;

const localization = {
    switchLanguage,
    labels
}

export default localization;