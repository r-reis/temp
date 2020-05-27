const Case = require('../models/Case');
// const axios = require('axios');

module.exports = {
    async store(req, res) {
		const { user_email, trap_url, client_id } = req.body;
		const my_case = await Case.create({
			user_email, trap_url, client_id
		});
		return res.json({ "case": my_case});
	},
	
	async getCases(req, res) {
		const cases = await Case.find((err, cases)=>{
			return cases;
		});
		return res.json({ "cases": cases});
	},
	
	async getCase(req, res){
		const {id} = req.query;
		// const my_case = await Case.findByIdAndDelete({_id:id},(err, my_case)=>{
		const my_case = await Case.find({_id:id},(err, my_case)=>{
			// console.log(my_case[0]._id.getTimestamp());
			return my_case;
		});
		return res.json({ "case": my_case});
	},
}