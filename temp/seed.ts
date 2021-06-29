//require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDb } from '../src/database';
import { ListingType, Listing, User, TransactionType } from '../src/types';
import faker from 'faker';

const randomNumbers = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const listings: Listing[] = [
  {
    _id: new ObjectId('5d378db94e84753160e08b30'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941938/propert-listings/property38_ihetqu.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.Apartment,
    address: '1340 Lakandula, Makati, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b31'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941933/propert-listings/property37_ltrlof.jpg',
    host: '5d378db94e84753160e08b55',
    type: ListingType.Apartment,
    address: '1200 Makati Street, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b32'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941924/propert-listings/property36_lhgrx1.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.House,
    address: '8110 Makati Ave, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b33'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941815/propert-listings/property01_qq3wym.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '9531 Makati Road, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b34'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941938/propert-listings/property38_ihetqu.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.House,
    address: '43 Makati Drive, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b35'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941908/propert-listings/property34_ar8cyp.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.House,
    address: '12 Makati Ave, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b36'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941901/propert-listings/property33_eyv1c6.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.House,
    address: '12 Makati Ave, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b37'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941895/propert-listings/property29_y41cjv.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '20 Makati St, Bogota, CO',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Bogota',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b38'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941890/propert-listings/property31_vqv7of.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '100 Makati Ave, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b39'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941884/propert-listings/property32_n2yag8.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '55 Quezon Hills Dr, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3a'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941881/propert-listings/property30_etv4qi.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '400 Quezon Beach Dr, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3b'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941879/propert-listings/property28_sqtjh7.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.House,
    address: '19 Quezon Ave, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3c'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941877/propert-listings/property27_uc3t2j.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.House,
    address: '291 Quezon Rd, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3d'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941815/propert-listings/property01_qq3wym.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '19 Quezon Street, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3e'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941876/propert-listings/property26_k6fc8g.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.Apartment,
    address: '20 Quezon Ave, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3f'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941875/propert-listings/property25_j59b9y.jpg',
    host: '5d378db94e84753160e08b58',
    type: ListingType.House,
    address: '15 Quezon St, Medellin, Colombia',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Medellin',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b40'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941873/propert-listings/property24_uaj2zh.jpg',
    host: '5d378db94e84753160e08b58',
    type: ListingType.House,
    address: '100 Parañaque Hills Dr, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b41'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941869/propert-listings/property21_xslct0.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.House,
    address: '999 Beverly Hills Ave, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b42'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941824/propert-listings/property05_hzwajc.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '4262 Rainbow Road, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    propertySize: randomNumbers(1000, 3000),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Buy,
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b43'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941864/propert-listings/property23_uhmc4q.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '100 Parañaque Rd,  Parañaque',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b44'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941857/propert-listings/property22_q3tqms.jpg',
    host: '5d378db94e84753160e08b58',
    type: ListingType.House,
    address: '433 Parañaque Lane, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b45'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941856/propert-listings/property18_cyfzrn.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.House,
    address: '200 Parañaque Rd, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b46'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941856/propert-listings/property17_d688dk.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.House,
    address: '301 Parañaque Dr, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b47'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941850/propert-listings/property19_mq1cc4.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.Apartment,
    address: '100 Parañaque Crescent, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b48'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941844/propert-listings/property14_hynowz.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.Apartment,
    address: '3807 Taguig River, Cartagena',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b49'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941841/propert-listings/property16_yct5tz.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '1738 Old House Dr, Cartagena',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4a'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645410/mock/Taguig/Taguig-listing-3_hbqxs1.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.House,
    address: '82 Taguig Crescent, Cartagena',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4b'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941839/propert-listings/property15_wltnbr.jpg',
    host: '5d378db94e84753160e08b55',
    type: ListingType.House,
    address: '200 South Bend River Rd, Cartagena',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4c'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941836/propert-listings/property02_y0ho8l.png',
    host: '5d378db94e84753160e08b55',
    type: ListingType.House,
    address: '44  Taguig Ave, Cartagena',
    country: 'Taguig',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4d'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941834/propert-listings/property13_sbx7uz.jpg',
    host: '5d378db94e84753160e08b57',
    type: ListingType.House,
    address: '20 Peachfarm Rd, Cartagena',
    country: 'Taguig',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4e'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941833/propert-listings/property11_mo4ef5.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '20 Taguig St, Cartagena',
    country: 'Taguig',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4f'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941830/propert-listings/property12_jygeng.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '15 Whitehorse Av, Cartagena',
    country: 'Taguig',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b50'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941828/propert-listings/property10_o11hox.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '200 Sunnyside Rd, San Fransisco, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b51'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941826/propert-listings/property09_a9m2hx.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '102 Parkdale Av, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b52'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941825/propert-listings/property08_qrjpxb.jpg',
    host: '5d378db94e84753160e08b59',
    type: ListingType.Apartment,
    address: '2 Bridgewater Rd, Cali',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cali',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b53'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941825/propert-listings/property07_xxgqkq.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.House,
    address: '100 Punta Nizuc Rd., Cartagena',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b54'),
    title: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    imageUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601941824/propert-listings/property06_b6e1ih.jpg',
    host: '5d378db94e84753160e08b56',
    type: ListingType.Apartment,
    address: '100 Punta Nizuc Rd., Cartagena',
    country: 'Colombia',
    admin: 'Esteban Rodriguez',
    city: 'Cartagena',
    price: randomNumbers(9999, 9999999),
    numOfGuests: randomNumbers(1, 5),
    numOfBaths: randomNumbers(1, 5),
    numOfBedrooms: randomNumbers(1, 5),
    verified: true,
    transactionType: TransactionType.Rent,
    propertySize: randomNumbers(1000, 3000),
  },
];

const users: User[] = [
  {
    _id: '5d378db94e84753160e08b55',
    name: `Sara Cotes`,
    photoUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601942594/avatars/pexels-pixabay-220453_inlyfa.jpg',
    email: `saracotes@email.com`,
    listings: [
      new ObjectId('5d378db94e84753160e08b31'),
      new ObjectId('5d378db94e84753160e08b4b'),
      new ObjectId('5d378db94e84753160e08b4c'),
    ],
    isEmailVerified: true,
    phone: '+573226427638',
  },
  {
    _id: '5d378db94e84753160e08b56',
    name: `Marissa Bond`,
    photoUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601942593/avatars/pexels-andrea-piacquadio-774909_crbgru.jpg',
    email: `marissabond@email.com`,
    listings: [
      new ObjectId('5d378db94e84753160e08b37'),
      new ObjectId('5d378db94e84753160e08b38'),
      new ObjectId('5d378db94e84753160e08b3a'),
      new ObjectId('5d378db94e84753160e08b3b'),
      new ObjectId('5d378db94e84753160e08b3d'),
      new ObjectId('5d378db94e84753160e08b41'),
      new ObjectId('5d378db94e84753160e08b43'),
      new ObjectId('5d378db94e84753160e08b4a'),
      new ObjectId('5d378db94e84753160e08b50'),
      new ObjectId('5d378db94e84753160e08b51'),
      new ObjectId('5d378db94e84753160e08b53'),
      new ObjectId('5d378db94e84753160e08b54'),
    ],
    isEmailVerified: true,
    phone: '+573226427638',
  },
  {
    _id: '5d378db94e84753160e08b57',
    name: `James Martinez`,
    photoUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601942593/avatars/pexels-tim-savage-736716_knmvrx.jpg',
    email: `jamesmartinez@email.com`,
    listings: [
      new ObjectId('5d378db94e84753160e08b30'),
      new ObjectId('5d378db94e84753160e08b32'),
      new ObjectId('5d378db94e84753160e08b34'),
      new ObjectId('5d378db94e84753160e08b35'),
      new ObjectId('5d378db94e84753160e08b36'),
      new ObjectId('5d378db94e84753160e08b3c'),
      new ObjectId('5d378db94e84753160e08b3e'),
      new ObjectId('5d378db94e84753160e08b47'),
      new ObjectId('5d378db94e84753160e08b48'),
      new ObjectId('5d378db94e84753160e08b4d'),
    ],
    isEmailVerified: true,
    phone: '+573226427638',
  },
  {
    _id: '5d378db94e84753160e08b58',
    name: `Lana Bond`,
    photoUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601942593/avatars/pexels-daniel-xavier-1239291_iiiyzu.jpg',
    email: `lanabond@email.com`,
    listings: [
      new ObjectId('5d378db94e84753160e08b3f'),
      new ObjectId('5d378db94e84753160e08b40'),
      new ObjectId('5d378db94e84753160e08b44'),
    ],
    isEmailVerified: true,
    phone: '+573226427638',
  },
  {
    _id: '5d378db94e84753160e08b59',
    name: `Franco Bautista`,
    photoUrl:
      'https://res.cloudinary.com/djlbfjouc/image/upload/v1601942593/avatars/pexels-justin-shaifer-1222271_yyyy12.jpg',
    email: `francobautista@email.com`,
    listings: [
      new ObjectId('5d378db94e84753160e08b33'),
      new ObjectId('5d378db94e84753160e08b39'),
      new ObjectId('5d378db94e84753160e08b42'),
      new ObjectId('5d378db94e84753160e08b45'),
      new ObjectId('5d378db94e84753160e08b46'),
      new ObjectId('5d378db94e84753160e08b49'),
      new ObjectId('5d378db94e84753160e08b4e'),
      new ObjectId('5d378db94e84753160e08b4f'),
      new ObjectId('5d378db94e84753160e08b52'),
    ],
    isEmailVerified: true,
    phone: '+573226427638',
  },
];

const seed = async () => {
  try {
    const db = await connectDb();
    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log('seed successfully');
  } catch (error) {
    throw new Error('something went wrong');
  }
};

seed();
