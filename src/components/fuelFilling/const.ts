import { IFuelForm } from "./types";

export const DEFAULT_FUEL_FORM_DATA: IFuelForm = {
  id: '',
  date: new Date().getTime(),
  amount: 0,
  price: 0,
  mileage: '',
  comment: ''
}