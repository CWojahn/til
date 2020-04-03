# JWT JSON Web Token

[![JWT](http://jwt.io/img/badge.svg)](http://jwt.io)

## First Thing Learned Today

A login route normally is made on /POST route but actually this not create anything, so the correct is use a /GET route, but /GET methods show the parameters on the URL, so you have to send the login and password on the authorization headers

## Installing the JWT

```sh
$ yarn add jsonwebtoken
```

## Example of uses

Example of non correct use(is a non correct use because the secretkey is always send from one side to another):

```sh
  import jwt from 'jsonwebtoken';

  server.get('/signup', async (req, res)=> {
    try(
      const token = jwt.sign({userId: user.id}, secretkey);
      rs.send({user, token});
    )catch(error){
      res.send(400,error);
    }
  });
```

Example of correct use:

Create a new file in your project with a fantastic name like 'jwt.js'.
In this file:

```sh
import jwt from 'jsonwebtoken';

const secretKey = 'yourFantasticAndSuperDificultSecretKey';

export const sign = (payload) => jwt.sign(payload, secretKey, {expisesIn: 86400});
export const verify = (token) => jwt.verify(token, secretKey);
```

> Explaining:
> First we imported the jwt method.<br>
> Then we create a const with our secretkey, this secret key need to be a very dificult string.<br>
> Then we export a method named sign, which receive a parameter named payload.<br>
> Then we call the method jwt.sign which will be the responsable to create a web token for the payload, with the secrekey and the option expiresIn which will set validate time in miliseconds that the token will be accept after the creation.<br>
> And then we export a method named verify, which receive a parameter named token and the secretKey.<br> > <br>
> Importing and usage
> <br>

```sh
import * as jwt from './someplace/jwt';
const authMiddleWare = async (req, res, next)=>{
  const [, token] = req.headers.authorization.split(' ');
  try{
    const payload = await jwt.verify(token);
    const user = await payload.user;
    if(!user){
      return res.send(401);
    }
    req.auth = user;
    next();
  }catch (error){
    res.send(401, error);
  }
}

  server.get('/signup', async (req, res)=> {
    try{
      const token = jwt.sign({userId: user.id});
      rs.send({user, token});
    }catch(error){
      res.send(400,error);
    }
  });

  server.get('/login', async (req, res)=> {
    const [, hash] = req.headers.authorization.split(' ');
    const [email, password] = BUffer.from(hash, 'base64')
      .toString()
      .split(':');
    try{
      const token = jwt.sign({userId: user.id});
      rs.send({user, token});
    }catch(error){
      res.send(400,error);
    }
  });


  server.get('/users', authMiddleWare, async (req, res)=>{
    try{
      const users = await SomeUserModel.GetAll();
      res.send(users);
    }catch (error){
      res.send(error);
    }
  });

  server.get('/me', authMiddleWare, (req, res) =>{
    res.send(req.auth);
  });

```

[JWT] - <https://jwt.io/>
