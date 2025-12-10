// Constants for car entity
export const FUEL_TYPES = {
  PETROL: 'petrol',
  DIESEL: 'diesel',
  ELECTRIC: 'electric',
  HYBRID: 'hybrid',
} as const

export const FUEL_TYPE_LABELS = {
  [FUEL_TYPES.PETROL]: 'Бензин',
  [FUEL_TYPES.DIESEL]: 'Дизель',
  [FUEL_TYPES.ELECTRIC]: 'Электро',
  [FUEL_TYPES.HYBRID]: 'Гибрид',
} as const

export const SERVICE_INTERVALS = {
  OIL_CHANGE: 10000, // км
  BRAKE_PADS: 50000, // км
  TIRES: 40000, // км
  GENERAL_INSPECTION: 15000, // км
} as const

export const CAR_BRANDS = [
  'Toyota',
  'Honda',
  'Nissan',
  'Mazda',
  'Mitsubishi',
  'Subaru',
  'Suzuki',
  'Lexus',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volkswagen',
  'Porsche',
  'Ferrari',
  'Lamborghini',
  'Ford',
  'Chevrolet',
  'Tesla',
  'Hyundai',
  'Kia',
  'LADA',
  'УАЗ',
  'ГАЗ',
  'ВАЗ',
] as const
