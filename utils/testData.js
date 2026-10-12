const getEnv = (name, fallback = '') => process.env[name] ?? fallback;

export const users = {
  standard: {
    username: getEnv('STANDARD_USER', 'standard_user'),
    password: getEnv('STANDARD_PASSWORD', 'secret_sauce'),
  },
  locked: {
    username: getEnv('LOCKED_USER', 'locked_out_user'),
    password: getEnv('STANDARD_PASSWORD', 'secret_sauce'),
  },
  problem: {
    username: getEnv('PROBLEM_USER', 'problem_user'),
    password: getEnv('STANDARD_PASSWORD', 'secret_sauce'),
  },
  performance: {
    username: getEnv('PERFORMANCE_USER', 'performance_glitch_user'),
    password: getEnv('STANDARD_PASSWORD', 'secret_sauce'),
  },
};

export const products = {
  backpack: 'Sauce Labs Backpack',
  bikeLight: 'Sauce Labs Bike Light',
  boltTshirt: 'Sauce Labs Bolt T-Shirt',
  fleeceJacket: 'Sauce Labs Fleece Jacket',
  onesie: 'Sauce Labs Onesie',
  tshirtRed: 'Test.allTheThings() T-Shirt (Red)',
};

export const customer = {
  firstName: 'Automation',
  lastName: 'Tester',
  zipCode: '10001',
};
