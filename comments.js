// Create web server 
// 1) GET /comments - return all comments
// 2) POST /comments - create comment
// 3) PUT /comments/:id - update comment
// 4) DELETE /comments/:id - delete comment

const express = require('express');
const bodyParser = require('body-parser');
const { Comments } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    Comments
        .find()
        .then(comments => {
            res.json(comments.map(comment => comment.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went wrong' });
        });
});

app.post('/comments', (req, res) => {
    const requiredFields = ['title', 'content', 'author'];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Comments
        .create({
            title: req.body.title,
            content: req.body.content,