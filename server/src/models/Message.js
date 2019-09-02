import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    chat: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

const Message = mongoose.model('Message', messageSchema)

export default Message
