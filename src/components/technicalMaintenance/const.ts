import uniqid from "uniqid";
import { ITechnicalMaintenanceForm } from "./types";

export const DEFAULT_TECHNICAL_MAINTENANCE_FORM_DATA: ITechnicalMaintenanceForm = {
  id: uniqid(),
  date: new Date().getTime(),
  typeService: '',
  priceWork: '',
  consumables: '',
  vendorСode: '',
  price: 0,
  mileage: 0,
  comment: ''
}