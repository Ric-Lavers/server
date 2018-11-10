import { Demo } from '../dbConnectors'

const createDemo = async ( body ) => {
  
  try {
    let newDemo = new Demo({
      ...body
    });
    newDemo.id = newDemo._id
    return await newDemo.save()
  }catch (err){
    return err
  }
}

export {
	createDemo,
}