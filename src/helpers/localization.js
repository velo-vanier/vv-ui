import { STATUSES_EN, STATUSES_FR, BIKE_CLASSES_EN, BIKE_CLASSES_FR } from './constants';

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
  chooseImage: 'Choose Image',
  bikes: 'Bikes',
  createNewUser: 'Create new user',
  selecUser: 'Selec user',
  next: 'Next',
  searchUserPlaceholder: 'Search by name, email, or phone number...',
  selecBike: 'Selec bike',
  searchBikePlaceholder: 'Search by model, serial number or description...',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  loading: "Loading...",
  noBorrowerFound: "No borrower found",
  noItemFound: "No item found",
  lang: 'Fr',

  areYouSureToDelete: x => `Are you sure to delete '${x}'?`,
  loadingFailed: x => `Loading ${x} failed.`,
  saveFailed: x => `Save ${x} failed.`,
  deleteFailed: x => `Delete ${x} failed.`,
  deleteTitle: x => `Delete ${x}`,
  addNew: x => `Add new ${x}`,
  editNew: x => `Edit ${x}`,
  nameExists: x => `One ${x} with this name exists. Please enter another name.`,
  newBikeTitle: x => `Add a bike`,
  serialNumber: x => `Serial number`,
  brand: x => `Brand`,
  colour: x => `Colour`,
  frameSize: x => `Frame size`,
  tireSize: x => `Tire size`,
  tirePressure: x => `Tire pressure`,
  gears: x => `Gears`,
  bellOrHorn: x => `Bell or horn`,
  frontReflector: x => `Front reflector`,
  rearReflector: x => `Rear reflector`,
  rearLight: x => `Rear light`,
  frontLight: x => `Front light`,
  status: x => `Status`,
  photo: x => `Photo`,
  takeAPhoto: x => `Take a photo of the bike`,
  statusLabel: id => STATUSES_FR[id],
  bikeClassLabels: id => BIKE_CLASSES_EN,
  bikeClass: x => `Bike class`,
};

//please translate to French
const FrenchLabels = {
  projectTitle: 'Velo-Vanier',
  chooseImage: 'Choose Image',
  bikes: 'Bikes French',
  lang: 'En',

  areYouSureToDelete: x => `Are you sure to delete '${x}'?`,
  loadingFailed: x => `Loading ${x} failed.`,
  saveFailed: x => `Save ${x} failed.`,
  deleteFailed: x => `Delete ${x} failed.`,
  deleteTitle: x => `Delete ${x}`,
  addNew: x => `Add new ${x}`,
  editNew: x => `Edit ${x}`,
  nameExists: x => `One ${x} with this name exists. Please enter another name.`,
  newBikeTitle: x => `Add a bike`,
  serialNumber: x => `Serial number`,
  brand: x => `Brand`,
  colour: x => `Colour`,
  frameSize: x => `Frame size`,
  tireSize: x => `Tire size`,
  tirePressure: x => `Tire pressure`,
  gears: x => `Gears`,
  bellOrHorn: x => `Bell or horn`,
  frontReflector: x => `Front reflector`,
  rearReflector: x => `Rear reflector`,
  frontLight: x => `Front light`,
  rearLight: x => `Rear light`,
  status: x => `Status`,
  photo: x => `Photo`,
  takeAPhoto: x => `Take a photo of the bike`,
  statusLabel: id => STATUSES_FR[id],
  bikeClassLabels: id => BIKE_CLASSES_FR,
  bikeClass: x => `Bike class`,
};

export const labels = getLocalization() === ENGLISH ? EnglishLabels : FrenchLabels;

const localization = {
  switchLanguage,
  labels
}

export default localization;
