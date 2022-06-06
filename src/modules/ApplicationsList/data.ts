import { generateRandomId } from 'utils'

import user1 from 'assets/users/user1.jpg'
import user2 from 'assets/users/user2.jpg'
import user3 from 'assets/users/user3.jpg'
import user4 from 'assets/users/user4.jpg'
import user5 from 'assets/users/user5.jpg'
import user6 from 'assets/users/user6.jpg'
import user7 from 'assets/users/user7.jpg'
import user8 from 'assets/users/user8.jpg'

interface IApplication {
  id: string
  num: number
  date: string
  address: string
  applicant: string
  status: string
  statusDate: string
  executor: string
  executorName: string
  executorAvatar: string
  serviceName: string
  servicePrice: string
}

export const applicationsList: IApplication[] = [
  {
    id: generateRandomId(),
    num: 1,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user1,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 2,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user2,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 3,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user3,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 4,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user4,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 5,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user5,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 6,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user6,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 7,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user7,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },

  {
    id: generateRandomId(),
    num: 8,
    date: '05 апреля, 14:10',
    address: 'Стандартная ул д. 21, корп.1',
    applicant: 'Кулагин Юрий Федотович',
    status: 'Просрочена',
    statusDate: '08 апреля, 17:30 - 19:30',
    executor: 'Инженер по Водоснабжению',
    executorName: 'Кулагин Ю.Ф.',
    executorAvatar: user8,
    serviceName: 'Установка стиральной машины',
    servicePrice: '899 ₽',
  },
]
