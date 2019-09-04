import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        chat: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: { createdAt: true },
    },
)

const Message = mongoose.model('Message', messageSchema)

export default Message
