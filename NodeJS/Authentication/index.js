import * as jwt from './someplace/jwt';

const authMiddleWare = async (req, res, next) => {
	const [, token] = req.headers.authorization.split(' ');
	try {
		const payload = await jwt.verify(token);
		const user = await payload.user;
		if (!user) {
			return res.send(401);
		}
		req.auth = user;
		next();
	} catch (error) {
		res.send(401, error);
	}
};

server.get('/signup', async (req, res) => {
	try {
		const token = jwt.sign({ userId: user.id });
		rs.send({ user, token });
	} catch (error) {
		res.send(400, error);
	}
});

server.get('/login', async (req, res) => {
	const [, hash] = req.headers.authorization.split(' ');
	const [email, password] = BUffer.from(hash, 'base64')
		.toString()
		.split(':');
	try {
		const token = jwt.sign({ userId: user.id });
		rs.send({ user, token });
	} catch (error) {
		res.send(400, error);
	}
});

server.get('/users', authMiddleWare, async (req, res) => {
	try {
		const users = await SomeUserModel.GetAll();
		res.send(users);
	} catch (error) {
		res.send(error);
	}
});

server.get('/me', authMiddleWare, (req, res) => {
	res.send(req.auth);
});

server.start();
