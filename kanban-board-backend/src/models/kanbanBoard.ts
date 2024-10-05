import mongoose, { Document, Schema } from 'mongoose';

export interface IKanbanBoard extends Document {
    title: string;
    description: string;
    status: 'to do' | 'in progress' | 'done';
}

const KanbanBoardSchema: Schema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        status: {
            type: String,
            enum: ['to do', 'in progress', 'done'],
            trim: true,
            default: 'to do',
        },
    },
    { collection: 'kanbanBoards', timestamps: true }
);

export default mongoose.model<IKanbanBoard>('KanbanBoard', KanbanBoardSchema);
