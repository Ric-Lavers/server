import { Demo } from '../dbConnectors'

const createDemo = async ( body/* {input}  */) => {
  console.log(body)
  return ({ greeting: "hello Mr demo" })
  
  try {
    let newDemo = new Demo({
      ...input
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