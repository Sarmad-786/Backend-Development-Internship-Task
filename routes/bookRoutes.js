const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Create a book
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
    body("price").isNumeric().withMessage("Price must be number"),
    body("isbn").notEmpty().withMessage("ISBN required"),
  ],
  bookController.createBook
);

// Get all books
router.get("/", bookController.getAllBooks);

// Get book by ID
router.get("/:id", bookController.getBookById);

// Update book
router.put("/:id", bookController.updateBook);

// Delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;