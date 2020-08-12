import express from 'express';
import db from './connect';
import helper from './helper';

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/login', async (req, res) => {
  try {
    const users = await db.select('id').from('users');

    return helper.showServerSuccess(res, users);
  } catch (error) {
    return helper.showServerError(res, error);
  }
});

export default router;
