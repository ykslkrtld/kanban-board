import { Router } from 'express';
import { list, create, read, update, deleteTask } from '../controllers/kanbanBoard';

const router = Router();

router.route('/todos')
    .get(list)
    .post(create);

router.route('/todos/:id')
    .get(read)
    .put(update)
    .patch(update)
    .delete(deleteTask);

export default router;
