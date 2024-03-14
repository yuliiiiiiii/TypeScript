"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("./courses"));
const studyGroups_1 = __importDefault(require("./studyGroups"));
function searchEvents(options) {
    let events; //courses array or studyGroups array
    if (options.eventType === 'courses') {
        events = courses_1.default;
    }
    else {
        events = studyGroups_1.default;
    }
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query ? true : false;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query) ? true : false;
        }
    });
}
// let searchResults = searchEvents({query:'art', eventType: 'courses' })
// console.log(searchResults)
let enrolledEvents = [];
function enroll(events) {
    //events is an array of Course or StudyGroup, but it has to be written like above (Course | StudyGroup)[]
    enrolledEvents = [...enrolledEvents, ...events];
    //add the elements of the events array into the enrolledEvents array
}
enroll(searchEvents({ query: 'art', eventType: 'courses' }));
console.log(enrolledEvents);
