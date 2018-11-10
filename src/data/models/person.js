import { Person } from '../dbConnectors'

const findPerson = async id => {
  console.log(id)
  return await Person.findById(id)
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
}