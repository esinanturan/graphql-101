
	const express = require('express');
	const expressGraphQL = require('express-graphql');	
	const schema = require('./schemas/schema');

	const app = express();

	app.use('/graphql', expressGraphQL({
		graphiql:true,
		schema
	}))

	app.listen(4000 , () => {
		console.log('Listening on PORT 4000');
	})