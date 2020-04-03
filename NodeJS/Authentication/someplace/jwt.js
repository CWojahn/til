import jwt from 'jsonwebtoken';

const secretKey = 'yourFantasticAndSuperDificultSecretKey';

export const sign = (payload) =>
	jwt.sign(payload, secretKey, { expisesIn: 86400 });
export const verify = (token) => jwt.verify(token, secretKey);
