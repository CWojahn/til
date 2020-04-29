# JWT JSON Web Token

[![JWT](http://jwt.io/img/badge.svg)](http://jwt.io)

## First Thing Learned Today

A login route normally is made on /POST route but actually this not create anything, so the correct is use a /GET route, but /GET methods show the parameters on the URL, so you have to send the login and password on the authorization headers

## Installing the JWT

```sh
$ yarn add jsonwebtoken
```

#### Example of use:

Create a new file in your project with a fantastic name like 'jwt.js'.
In this file:

##### JWT module

```js
const jwt = require('jsonwebtoken');

module.exports = {
	async sign(payload) {
		return jwt.sign(payload, process.env.SECRET, { expiresIn: 84600 });
	},

	async verify(token) {
		return jwt.verify(token, process.env.SECRET);
	},
};
```

> Explaining:
> First we imported the jwt method.<br>
> Then we export two functions fro this module they are named below.<br>
> A function named sign, which receive a parameter named payload, payload it the data which will be encrypt and will used on authenticated routes, normally is the user id.<br>
> It will return the web token for the payload, with the secrekey and the option expiresIn which will set validate time in miliseconds that the token will be accept after the creation (84600 = 24h).<br>
> A function named verify, which receive a parameter named token and the secretKey.<br>
> It will decode the token and will show the payload data.

##### Authentication Middleware

```js
const jwt = require('../utils/jwt');
const connection = require('../database/connection');

const authMiddleWare = async (request, response, next) => {
	token = request.headers['x-access-token'];
	try {
		const payload = await jwt.verify(token);
		const user = await connection('usertable')
			.innerJoin(
				'functiontable',
				'functiontable.functionid',
				'usertable.fuction',
			)
			.select('userid', 'name', 'email', 'phone', 'photo', 'accesslevel')
			.where('userid', payload.userId)
			.first();

		if (!user) {
			return response.sendStatus(401);
		}
		request.auth = user;
		next();
	} catch (error) {
		return response.status(401).send(error);
	}
};

module.exports = authMiddleWare;
```

> Explaining:
> Note: In this example we're using Knex like a SQL query build;
> First we need to import the jwt file, created before;<br>
> Import the connection module;<br>
> Then we receive the token in the header request.
> We send the token to the jwt verify function to decode and verify if the token is valid, saving the result in the payload variable;<br>
> Then we select the first registry for some data from the user in some database;<br>
> With innerJoin to verify the access level for this user;<br>
> And save the result in the user variable;<br>
> If user is empty the return status 401 Unauthorized;<br>
> If some user exist the pass to the next controller a request named auth with the user data;<br>
> next() call the next controller which is resposable to generate the data for this route;<br>
> if some error is catch than return 401 Unauthorized.

##### Routes file

```js
const express = require('express');
const routes = express.Router();
const authMiddleWare = require('./controllers/authMiddleware');
const userProfileController = require('./controllers/userProfileController');
const userActivitiesController = require('./controllers/userActivitiesController');
const userBuildsController = require('./controllers/userBuildsController');

routes.get('/login', userProfileController.index);

routes.get('/activity', authMiddleWare, userActivitiesController.index);

module.exports = routes;
```

#### User Profile Controller file (Login function)

```js
const connection = require('../database/connection');
const crypto = require('crypto');
const jwt = require('../utils/jwt');
module.exports = {
	async index(request, response) {
		const [, hash] = request.headers.authorization.split(' ');
		const [username, password] = Buffer.from(hash, 'base64')
			.toString()
			.split(':');
		try {
			const user = await connection('usertable')
				.where('username', username)
				.andWhere(
					'password',
					crypto.createHash('md5').update(password).digest('hex'),
				)
				.select('userid')
				.first();

			if (!user) {
				return response.sendStatus(401);
			}
			const token = await jwt.sign({ userId: user.userid });
			response.status(200).send({ user, token });
		} catch (error) {
			response.status(401).send(error);
		}
	},
};
```
