import { IRepairCostsForm } from "./types";

export const DEFAULT_REPAIR_COSTS_FORM_DATA: IRepairCostsForm = {
  id: '',
  date: new Date().getTime(),
  typeRepair: '',
  priceWork: '',
  replacementPart: '',
  vendorСode: '',
  price: 0,
  mileage: 0,
  comment: ''
}