import { IOilChangeForm } from "./types";

export const DEFAULT_OIL_FORM_DATA: IOilChangeForm = {
  id: '',
  date: new Date().getTime(),
  mileage: 0,
  price: 0,
  oilViscosity: '',
  oilType: '',
  comment: ''
}