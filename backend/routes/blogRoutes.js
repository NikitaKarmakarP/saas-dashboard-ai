const express = require('express');
const router = express.Router();
const { generateBlog, getBlogs } = require('../controllers/blogController');

router.post('/generate', generateBlog);
router.get('/', getBlogs);

module.exports = router;
