const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String, // Fixed from `typeof` to `type`
        required: true,
    },
    description: {
        type: String, // Fixed from `typeof` to `type`
        required: true,
    },
    category: {
        type: String, // Fixed from `typeof` to `type`
        required: true,
    },
    trending: {
        type: Boolean, // Fixed from `typeof` to `type`
        required: true,
    },
    coverImage: {
        type: String, // Fixed from `typeof` to `type`
        required: true,
    },
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
