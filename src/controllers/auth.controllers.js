// PACKAGE IMPORTS
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// VALUE EXPORTS
export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const saltRounds = 10;

  try {
    const user = await db.collection('users').findOne({ email });
    if (user) return res.status(409).send('This e-mail is already in use!');

    const hash = bcrypt.hashSync(password, saltRounds);
    await db.collection('users').insertOne({ name, email, password: hash });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signUpAdmin(req, res) {
  const { name, email, password } = req.body;
  const saltRounds = 10;

  try {
    const user = await db.collection('admin').findOne({ email });
    if (user) return res.status(409).send('This e-mail is already in use!');

    const hash = bcrypt.hashSync(password, saltRounds);
    await db.collection('admin').insertOne({ name, email, password: hash });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const admin = await db.collection('admin').findOne({ email });
    const token = uuid();

    if (admin) {
      const isAdminPasswordCorrect = bcrypt.compareSync(password, admin.password);

      if (!isAdminPasswordCorrect) return res.status(401).send('Authentication failed, please check your credentials.')

      await db.collection('sessions').insertOne({ token, userId: admin._id, userType: 'admin' });
      return res.status(201).send({ token, name: admin.name, userType: 'admin' })
    }

    const user = await db.collection('users').findOne({ email });
    if (!user) return res.status(404).send('No account found with this e-mail adress!');

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) return res.status(401).send('Authentication failed, please check your credentials.');

    await db.collection('sessions').insertOne({ token, userId: user._id, userType: 'user' });
    res.status(201).send({ token, name: user.name, userType: 'user' })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function logOut(req, res) {
  const { token } = res.locals.session;
  try {
    await db.collection('sessions').deleteOne({ token });
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err.message);
  }
}