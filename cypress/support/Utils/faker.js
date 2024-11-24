// cypress/utils/faker.js
import { faker } from '@faker-js/faker';

const generateUserData = () => {
  const username = faker.person.firstName();
  const email = faker.internet.email();
  const num = faker.phone.number();
  const password = faker.internet.password();
  const randomDate = faker.date.between({ from: '1920-01-01', to: '2006-12-31' });

  // Extract day, month, and year from the random date
  const day = randomDate.getDate(); // Day of the month (1-31)
  const month = randomDate.getMonth() + 1; // Month (0-11, so add 1 for 1-12)
  const year = randomDate.getFullYear();

  return {
    username,
    email,
    num,
    password,
    dateOfBirth: {
      day,
      month,
      year,
    },
  };
};

export default generateUserData;
