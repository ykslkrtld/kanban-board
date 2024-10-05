"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.update = exports.read = exports.create = exports.list = void 0;
const kanbanBoard_1 = __importDefault(require("../models/kanbanBoard"));
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield kanbanBoard_1.default.find();
    res.status(200).send({ error: false, data });
});
exports.list = list;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield kanbanBoard_1.default.create(req.body);
    res.status(201).send({ error: false, data });
});
exports.create = create;
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield kanbanBoard_1.default.findById(req.params.id);
    res.status(200).send({ error: false, data });
});
exports.read = read;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield kanbanBoard_1.default.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
    const updatedData = yield kanbanBoard_1.default.findById(req.params.id);
    res.status(202).send({ error: false, data, new: updatedData });
});
exports.update = update;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield kanbanBoard_1.default.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
        error: !data.deletedCount,
        data,
    });
});
exports.deleteTask = deleteTask;
