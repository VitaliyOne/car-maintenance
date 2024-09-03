import { type Cars } from '../../../types';

export interface CarsState {
  cars: Cars[];
  selectedCarId: string | null;
}

/* mb
interface Car {
  id: string;
  name: string;
  fuelFilling: FuelFilling[];
  oilChange: OilChange[];
  repairCosts: RepairCost[];
  techMaintenance: TechMaintenance[];
  tuning: Tuning[];
}

interface FuelFilling {
  id: string;
  date: number;
  amount: number;
  price: number;
  mileage: number | string;
  comment: string;
}

interface OilChange {
  id: string;
  date: number;
  mileage: number;
  price: number;
  oilViscosity: string;
  oilType: string;
  comment: string;
}

interface RepairCost {
  id: string;
  date: number;
  typeRepair: string;
  priceWork: string;
  replacementPart: string;
  vendorСode: string;
  price: number;
  mileage: number;
  comment: string;
}

interface TechMaintenance {
  id: string;
  date: number;
  typeService: string;
  priceWork: string;
  consumables: string;
  vendorСode: string;
  price: number;
  mileage: number;
  comment: string;
}

interface Tuning {
  id: string;
  date: number;
  typeTuning: string;
  price: string;
  consumables: string;
  mileage: number;
  acceleration1: string;
  acceleration12: string;
  description: string;
}
*/