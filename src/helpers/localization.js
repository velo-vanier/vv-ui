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
  profileBike: 'Bike Profile',
  loan: 'Loan a Bike',
  borrower: 'Emprunteur',
  chooseImage: 'Choose Image',
  bikes: 'Bikes',
  createNewUser: 'Add New Borrower',
  selecUser: 'Selec user',
  next: 'Next',
  searchUserPlaceholder: 'Search by name, email, or phone number...',
  selecBike: 'Selec bike',
  searchBike: 'Search',
  searchBikePlaceholder: 'Search by model, serial number or description...',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  loading: "Loading...",
  noBorrowerFound: "No borrower found",
  noItemFound: "No item found",
  lang: 'Fr',
  newBikeTitle: `Add a bike`,
  serialNumber: `Serial number`,
  brand: `Brand`,
  colour: `Colour`,
  frameSize: `Frame size`,
  tireSize: `Tire size`,
  maxPSI: `Tire pressure (max PSI)`,
  gears: `Gears`,
  bellOrHorn: `Bell or horn`,
  lights: `Lights`,
  status: `Status`,
  photo: `Photo`,
  takeAPhoto: `Take a photo of the bike`,
  bikeClassLabels: BIKE_CLASSES_EN,
  bikeClass: `Bike class`,
  description: `Description`,
  reflectors: `Reflectors`,
  scanBarcode: `Scan Barcode`,

  statusLabel: id => STATUSES_EN[id],
  areYouSureToDelete: x => `Are you sure to delete '${x}'?`,
  loadingFailed: x => `Loading ${x} failed.`,
  saveFailed: x => `Save ${x} failed.`,
  deleteFailed: x => `Delete ${x} failed.`,
  deleteTitle: x => `Delete ${x}`,
  addNew: x => `Add new ${x}`,
  editNew: x => `Edit ${x}`,
  nameExists: x => `One ${x} with this name exists. Please enter another name.`,
};

//please translate to French
const FrenchLabels = {
  projectTitle: 'Velo-Vanier',
  loan: 'Emprunter un vélo',
  profileBike: 'Profil du vélo',
  borrower: 'Emprunteur',
  createNewUser: 'Ajouter un nouvel emprunteur',
  chooseImage: 'Choose Image',
  bikes: 'Vélos',
  lang: 'En',
  searchNav: 'Rechercher',
  searchBikePlaceholder: 'Marque/Le numéro de série',
  newBikeTitle: `Ajouter un nouveau vélo`,
  serialNumber: `Le numéro de série`,
  brand: `Marque`,
  colour: `Couleur`,
  frameSize: `La taille du cadre`,
  tireSize: `La taille du pneu`,
  maxPSI: `La pression du pneu(max PSI)`,
  gears: `Vitesses`,
  bellOrHorn: `Sonnette`,
  status: `Status`,
  photo: `Photo`,
  takeAPhoto: `Prendre un photo du vélo`,
  bikeClassLabels: BIKE_CLASSES_FR,
  bikeClass: `Categorie de vélo`,
  description: `Description`,
  reflectors: `Réflecteurs`,
  lights: `Lumières`,
  scanBarcode: `Scanner le code à barres`,

  statusLabel: id => STATUSES_FR[id],
  areYouSureToDelete: x => `Are you sure to delete '${x}'?`,
  loadingFailed: x => `Loading ${x} failed.`,
  saveFailed: x => `Save ${x} failed.`,
  deleteFailed: x => `Delete ${x} failed.`,
  deleteTitle: x => `Delete ${x}`,
  addNew: x => `Add new ${x}`,
  editNew: x => `Edit ${x}`,
  nameExists: x => `One ${x} with this name exists. Please enter another name.`,
};

export const labels = getLocalization() === ENGLISH ? EnglishLabels : FrenchLabels;

const localization = {
  switchLanguage,
  labels
}

export default localization;
