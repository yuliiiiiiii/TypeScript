//When typing objects in TypeScript, sometimes it’s not possible to know the property names for an object, like when we get back information from an outside data source/API. While we may not know the exact property names at compile-time, we may know what the data will look like in general. In that case, it’s useful to write an object type that allows us to include a variable name for the property name. This feature is called index signatures.


//there’s a program that calls a budget API to get your current month’s budget by category. The call to getBudgeAsync() will return data looks similar to this:

// {
//   'shopping': 150,
//   'food': 210,
//   'utilities': 100
// }

import { getBudgetAsync } from './api'

interface Budget {
  [catagory: string]: number
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();