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

