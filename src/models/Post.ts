import mongoose, {Schema, Document} from 'mongoose';

export interface IPost extends Document {
    title: string;
    content: string;
    likes: number;
    dislikes: number;
    createdAt: Date;
}

const postSchema : Schema = new Schema ({
    title : {type: String, required: true},
    content: {type: String, required: true},
    likes : {type: Number, default:0},
    dislikes : {type: Number, default:0},
    createdAt : {type: Date, default: Date.now}
})

export default mongoose.model<IPost>('Post', postSchema);