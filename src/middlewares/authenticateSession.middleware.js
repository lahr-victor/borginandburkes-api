// VALUE IMPORTS
import { db } from "../database/database.connection.js";

// VALUE EXPORTS
export function authenticateSession(userType) {
  return async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if (!token) return res.sendStatus(401);

    try {
      const session = await db.collection('sessions').findOne({ token });
      if ((!session) || (session.userType !== userType)) {
        return res.sendStatus(401);
      }

      res.locals.session = session;
      next();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}