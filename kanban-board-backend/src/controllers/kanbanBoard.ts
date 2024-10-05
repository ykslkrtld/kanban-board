import { Request, Response } from 'express';
import KanbanBoard, { IKanbanBoard } from '../models/kanbanBoard';

export const list = async (req: Request, res: Response): Promise<void> => {
    const data: IKanbanBoard[] = await KanbanBoard.find();
    res.status(200).send({ error: false, data });
};

export const create = async (req: Request, res: Response): Promise<void> => {
    const data: IKanbanBoard = await KanbanBoard.create(req.body);
    res.status(201).send({ error: false, data });
};

export const read = async (req: Request, res: Response): Promise<void> => {
    const data: IKanbanBoard | null = await KanbanBoard.findById(req.params.id);
    res.status(200).send({ error: false, data });
};

export const update = async (req: Request, res: Response): Promise<void> => {
    const data = await KanbanBoard.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
    const updatedData = await KanbanBoard.findById(req.params.id);
    res.status(202).send({ error: false, data, new: updatedData });
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const data = await KanbanBoard.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
        error: !data.deletedCount,
        data,
    });
};
