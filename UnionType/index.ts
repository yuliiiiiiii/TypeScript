import courses from "./courses"
import studyGroups  from "./studyGroups"

type Course = {
  id: number,
  studyGroupId: number,
  title: string,
  keywords: string[],
  eventType: string,
}

type StudyGroup = {
  id: number,
  courseId: number,
  title: string,
  keywords: string[],
  eventType: string,
}

type SearchEventsOptions = {
  query: string | number,
  eventType: 'courses' | 'groups'
}

function searchEvents(options: SearchEventsOptions) {
  let events: (Course| StudyGroup)[]; //courses array or studyGroups array
  if(options.eventType === 'courses') {
    events = courses;
  } else {
    events = studyGroups;
  }
  
  return events.filter((event: Course | StudyGroup) => {
    if(typeof options.query === 'number') {
     return event.id === options.query ? true : false
     //he reason we are allowed to access the id property on event is that both Course and StudyGroup share the id: number key and value.
    }
    if(typeof options.query === 'string') {
      return event.keywords.includes(options.query) ? true : false
    }
  })
}
// let searchResults = searchEvents({query:'art', eventType: 'courses' })
// console.log(searchResults)
let enrolledEvents: (Course | StudyGroup)[] = []
function enroll(events: (Course | StudyGroup)[]){
  //events is an array of Course or StudyGroup, but it has to be written like above (Course | StudyGroup)[]
  enrolledEvents = [...enrolledEvents, ...events]
  //add the elements of the events array into the enrolledEvents array
}

enroll(searchEvents({ query: 'art', eventType: 'courses' }))
 
console.log(enrolledEvents)

