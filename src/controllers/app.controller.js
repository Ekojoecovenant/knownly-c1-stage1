import * as AppService from '../services/app.service.js';

export function fetchHome(_req, res) {
  const data = AppService.fetchHome();

  res.status(200).send(data);
}

export function fetchStatus(_req, res) {
  const data = AppService.fetchStatus();

  res.status(200).json({
    ...data,
  });
}
