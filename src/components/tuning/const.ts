import uniqid from 'uniqid';
import { ITuningForm } from './types';

export const DEFAULT_TUNING_FORM_DATA: ITuningForm = {
    id: uniqid(),
    date: new Date().getTime(),
    typeTuning: '',
    price: '',
    mileage: 0,
    consumables: '',
    acceleration1: '',
    acceleration12: '',
    description: ''
}