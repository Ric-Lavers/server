import { Person } from '../dbConnectors'

const findPerson = async id => {
  return await Person.findById(id)
}
const findPeople = async () => {
  return await Person.find()
}

const createPerson = async ( input ) => {
    let newPerson = new Person({
      ...input
    });
    newPerson.id = newPerson._id
    return await newPerson.save()
}

export {
  createPerson,
  findPerson,
  findPeople,
}