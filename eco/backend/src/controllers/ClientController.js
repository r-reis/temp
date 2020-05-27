const Client = require('../models/Client');

module.exports = {
	async store(req, res) {
		const { user_case, client_id, client_ip } = req.body;
		let client = await Client.find({client_id:client_id, user_case:user_case},(err, client)=>{
			return client;
		});
		if(client.length == 0){
			client = await Client.create({
				user_case, client_id, client_ip
			});
		}
		return res.json({client});
	},

	async getClients(req, res) {
		const clients = await Client.find((err, clients)=>{
			return clients;
		});
		return res.json({ "clients": clients});
	},
	
	// async getClient(req, res){
	// 	const image_name = req.originalUrl.split('/')[req.originalUrl.split('/').length - 1];
	// 	// const tale = await Image.findByIdAndDelete({_id:id},(err, tale)=>{
	// 	try {
	// 		const image = await Image.find({image_name:image_name},(err, image)=>{
	// 			return image;
	// 		}).then((image)=>{
	// 			const data = image[0].image_data.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
	// 			const img = Buffer.from(data, 'base64');
	// 			res.writeHead(200, {
	// 				'Content-Type': 'image/png',
	// 				'Content-Length': img.length
	// 			});
	// 			res.end(img);
	// 		});
	// 	} catch {
	// 		// console.log(err);
	// 	}
	// },
}