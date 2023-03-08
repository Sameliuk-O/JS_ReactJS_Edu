import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";
import {Types} from "mongoose";

@modelOptions({
    schemaOptions: {
        versionKey: false,
        timestamps: true,
    }
})
export class Post {
    @prop({id: true})
    id!: Types.ObjectId
    @prop({required: true})
    owner!: Types.ObjectId;
    @prop({required: true})
    title!: string;
    @prop({required: true})
    body!: string;
}

export const PostModel = getModelForClass(Post)

