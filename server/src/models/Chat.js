import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema(
    {
        users: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'User',
                    unique: true,
                    required: true,
                },
            ],
            required: true,
        },
    },
    {
        timestamps: { createdAt: true },
    },
)

const Chat = mongoose.model('Chat', chatSchema)

export default Chat
