import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator(email) {
                    return User.doesNotExist({ email })
                },
                message() {
                    return 'EMAIL_TAKEN'
                },
            },
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

userSchema.pre('save', async function() {
    if (this.isModified('password')) {
        const password = await bcrypt.hash(this.password, 10)
        this.password = password
    }
})

userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
})

userSchema.statics.doesNotExist = async function(options) {
    const count = await this.where(options).countDocuments()
    return count === 0
}

const User = mongoose.model('User', userSchema)

export default User
