const express = require('express');
const app = express();

const notificationRoutes = require('./routes/notification.routes');
const communityRoutes = require('./routes/community.routes');
const loginRoutes = require('./routes/login.routes');
const postRoutes = require('./routes/post.routes');

app.use(express.json());

app.use('/api', notificationRoutes);
app.use('/api', communityRoutes);
app.use('/api', loginRoutes);
app.use('/api', postRoutes);

module.exports = app;