import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from './raccoon'

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from './wolfpoint'

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  return volunteers.map(volunteer => {
    let id = volunteer.id
    if(typeof id === 'string') {
      id = parseInt(id, 10)
    }
    return {
      id: id,
      name: volunteer.name,
      activities: volunteer.activities
    }
  })
}

function isVerified(verified: string | boolean) {
  if(typeof verified === "string") {
    return verified === 'Yes' ? true : false
  }
  return verified
}

function getHours(activity: CombinedActivity){
  if('hours' in activity) {
    return activity.hours
  } 
    return activity.time
  
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if(isVerified(activity.verified)) {
        hours += getHours(activity)
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

type letter = {
  id: number,
  name: string,
  hours: number
}

function byHours(a:letter, b:letter) {
  return b.hours - a.hours
}

const combinedVolunteers = combineVolunteers([...wolfPointVolunteers, ...raccoonMeadowsVolunteers]);

let result = calculateHours(combinedVolunteers)
console.log(result.sort(byHours))
// [
//   { id: 403, name: 'Joanna Reilly', hours: 8 },
//   { id: 400, name: 'Sarah Galloway', hours: 7 },
//   { id: 102, name: 'Raj Wardle', hours: 6 },
//   { id: 401, name: 'Cormac Mcfarlane', hours: 5 },
//   { id: 103, name: 'Rayan Gutierrez', hours: 5 },
//   { id: 101, name: 'Leigh Gilmour', hours: 4 },
//   { id: 100, name: 'Rose Sutton', hours: 3 },
//   { id: 402, name: 'Maisha Mcconnell', hours: 0 }
// ]

