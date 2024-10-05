import mongoose from 'mongoose';

export const dbConnection = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB as string);
        console.log('* DB Connected *');
    } catch (err) {
        console.log('* DB Not Connected *', err);
    }
};
