import mongoose ,{ Schema, model, connect }  from "mongoose";

// // 1. Create an interface representing a document in MongoDB.
interface ITask {
  title: string;
  description: string;
}

// // 2. Create a Schema corresponding to the document interface.
const TopicSchema = new Schema<ITask>({
  title: { type: String },
  description: { type: String },
});

// // 3. Create a Model.
const Topic = mongoose.models.Topic || model<ITask>("Topic", TopicSchema);

export default Topic;


