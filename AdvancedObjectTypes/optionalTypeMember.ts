interface UserNameOptions {
  firstName?: string, //optional
  lastName?: string, //optional
  username: string //required
}

function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
})
//Mr. Oshiro

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
})
//mountainClimber