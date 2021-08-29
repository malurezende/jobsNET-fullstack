import { Router } from 'express';
import usersRouter from './users.routes';
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, '../../api/swagger/swagger.yaml'));

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default routes;