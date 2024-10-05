"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kanbanBoard_1 = require("../controllers/kanbanBoard");
const router = (0, express_1.Router)();
router.route('/todos')
    .get(kanbanBoard_1.list)
    .post(kanbanBoard_1.create);
router.route('/todos/:id')
    .get(kanbanBoard_1.read)
    .put(kanbanBoard_1.update)
    .patch(kanbanBoard_1.update)
    .delete(kanbanBoard_1.deleteTask);
exports.default = router;
