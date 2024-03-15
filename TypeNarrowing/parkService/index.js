"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_1 = require("./raccoon");
const wolfpoint_1 = require("./wolfpoint");
function combineVolunteers(volunteers) {
    return volunteers.map(volunteer => {
        let id = volunteer.id;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities
        };
    });
}
function isVerified(verified) {
    if (typeof verified === "string") {
        return verified === 'Yes' ? true : false;
    }
    return verified;
}
function getHours(activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    return activity.time;
}
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
function byHours(a, b) {
    return b.hours - a.hours;
}
const combinedVolunteers = combineVolunteers([...wolfpoint_1.wolfPointVolunteers, ...raccoon_1.raccoonMeadowsVolunteers]);
let result = calculateHours(combinedVolunteers);
console.log(result.sort(byHours));
