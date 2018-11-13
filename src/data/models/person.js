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

const findBedAndCar = async () => {
  const bed = await Person.find({
    bed: true
  })
  const car = await Person.find({
    car: true
  })
  return {...bed, ...car}
}

export {
  createPerson,
  findPerson,
  findPeople,
  findBedAndCar,
}