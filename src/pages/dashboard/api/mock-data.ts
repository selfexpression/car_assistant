// Mock data for dashboard development
import type { IDashboardData } from '../model'
import type { ICar } from '../../../entities/car/model'

export const mockDashboardData: IDashboardData = {
  user: {
    name: 'Алексей',
  },
  cars: [
    {
      id: '1',
      brand: 'Toyota',
      model: 'Camry',
      year: 2018,
      vin: 'JTNB11HK803000000',
      mileage: 45230,
      licensePlate: 'А123АА777',
      imageUrl:
        'https://via.placeholder.com/300x200/007AFF/FFFFFF?text=Toyota+Camry',
      purchaseDate: new Date('2023-01-15'),
      nextServiceDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // через 15 дней
      nextServiceMileage: 55000,
      fuelType: 'petrol',
      engineVolume: 2.5,
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2025-01-15'),
    } as ICar,
    {
      id: '2',
      brand: 'Hyundai',
      model: 'Solaris',
      year: 2020,
      vin: 'KMHDN41BPJU000000',
      mileage: 28900,
      licensePlate: 'В456ВВ888',
      imageUrl:
        'https://via.placeholder.com/300x200/34C759/FFFFFF?text=Hyundai+Solaris',
      purchaseDate: new Date('2023-03-20'),
      nextServiceDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // через 45 дней
      nextServiceMileage: 45000,
      fuelType: 'petrol',
      engineVolume: 1.6,
      createdAt: new Date('2023-03-20'),
      updatedAt: new Date('2025-01-10'),
    } as ICar,
  ],
  alerts: [
    {
      id: '1',
      type: 'critical',
      title: 'ТО Toyota Camry через 15 дней',
      message: 'Плановое техническое обслуживание',
      carId: '1',
      dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      actionType: 'service',
    },
    {
      id: '2',
      type: 'warning',
      title: 'Замена масла через 500 км',
      message: 'Рекомендуется заменить моторное масло',
      carId: '1',
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // через 30 дней
      actionType: 'maintenance',
    },
    {
      id: '3',
      type: 'info',
      title: 'ОСАГО истекает 01.01.2026',
      message: 'Не забудьте продлить страховку',
      carId: '1',
      dueDate: new Date('2026-01-01'),
      actionType: 'insurance',
    },
  ],
  recentActivity: [
    {
      id: '1',
      type: 'repair',
      title: 'Замена масла Toyota Camry',
      description: 'Моторное масло 5W-30, 4.5л',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 дня назад
      carId: '1',
      amount: 2500,
    },
    {
      id: '2',
      type: 'fuel',
      title: 'Заправка Toyota Camry',
      description: '45л АИ-95',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 дня назад
      carId: '1',
      amount: 3150,
    },
    {
      id: '3',
      type: 'mileage',
      title: 'Обновление пробега Toyota Camry',
      description: 'Добавлено 150 км',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // вчера
      carId: '1',
    },
    {
      id: '4',
      type: 'service',
      title: 'ТО Hyundai Solaris',
      description: 'Плановое ТО, замена фильтров',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 дней назад
      carId: '2',
      amount: 8500,
    },
  ],
  quickActions: [
    {
      id: 'add-car',
      title: 'Добавить авто',
      icon: 'add-circle',
      route: 'AddCar',
      color: '#007AFF',
    },
    {
      id: 'add-repair',
      title: 'Добавить ремонт',
      icon: 'build',
      route: 'AddRepair',
      color: '#FF9500',
    },
    {
      id: 'add-fuel',
      title: 'Заправка',
      icon: 'local-gas-station',
      route: 'AddFuel',
      color: '#34C759',
    },
    {
      id: 'service',
      title: 'ТО',
      icon: 'engineering',
      route: 'Service',
      color: '#FF3B30',
    },
    {
      id: 'parts',
      title: 'Запчасти',
      icon: 'settings',
      route: 'Parts',
      color: '#AF52DE',
    },
    {
      id: 'documents',
      title: 'Документы',
      icon: 'description',
      route: 'Documents',
      color: '#007AFF',
    },
    {
      id: 'analytics',
      title: 'Статистика',
      icon: 'analytics',
      route: 'Analytics',
      color: '#FF9500',
    },
    {
      id: 'settings',
      title: 'Настройки',
      icon: 'settings',
      route: 'Settings',
      color: '#8E8E93',
    },
  ],
}
