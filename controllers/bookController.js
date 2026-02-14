const { validationResult } = require("express-validator");

const Book = require("../models/Book");

// Create a book
exports.createBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not found" });
    res.json(book);
  } catch {
    res.status(400).json({ msg: "Invalid ID" });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch {
    res.status(400).json({ msg: "Update failed" });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ msg: "Book deleted" });
  } catch {
    res.status(400).json({ msg: "Delete failed" });
  }
};
