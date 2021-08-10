import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from '../../index';

const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, 'The username is required'],
        unique: true,
        minlength: 8,
        maxlength: 16,
    },

    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [8, 'Password must be at least 8 characters long.']
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default UserSchema;