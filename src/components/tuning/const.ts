import { ITuningForm } from './types';

export const DEFAULT_TUNING_FORM_DATA: ITuningForm = {
    id: '',
    date: new Date().getTime(),
    typeTuning: '',
    price: '',
    mileage: 0,
    consumables: '',
    acceleration1: '',
    acceleration12: '',
    description: ''
}