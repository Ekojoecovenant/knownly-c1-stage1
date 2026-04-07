import { Router } from 'express';
import * as AppController from '../controllers/app.controller.js';

const router = Router();

router.get('/', AppController.fetchHome);
router.get('/status', AppController.fetchStatus);

export default router;
