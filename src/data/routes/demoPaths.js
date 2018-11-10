import { createDemo } from "../models/demo";

let demoPaths = {}

demoPaths.postDemo = (req, res) => {
	console.log(req.body)
	createDemo(req.body)
	res.send({ greeting: "hello Mr demo" })
}

export default demoPaths; 