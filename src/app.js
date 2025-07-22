const express = require('express');
const app = express();

// const userRoutes = require('./routes/user.routes');
const communityRoutes = require('./routes/community.routes');
const loginRoutes = require('./routes/login.routes');
const postRoutes = require('./routes/post.routes');

app.use(express.json()); // Middleware to parse JSON bodies

// app.use('/api', userRoutes);
app.use('/api', communityRoutes);
app.use('/api', loginRoutes);
app.use('/api', postRoutes);


module.exports = app; // export the app to use in server.js