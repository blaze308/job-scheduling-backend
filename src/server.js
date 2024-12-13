const express = require('express');
const cors = require('cors');
const meetingRoutes = require('./routes/meetingRoutes');  // Import meeting routes
const userRoutes = require('./routes/userRoutes');        // Import user routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://react-schedule-app.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true                           // If you need to send cookies or headers
}));
app.use(express.json());

// Use the routes for meetings and users
app.use('/api/meetings', meetingRoutes);  // Prefix routes with /api/meetings
app.use('/api/users', userRoutes);        // Prefix routes with /api/users

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Job Matching Scheduling API',
        status: 'Running'
    });
});

// Start server
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Visit http://localhost:${PORT}`);
    });
};

// Only start server if run directly (not during testing)
if (require.main === module) {
    startServer();
}

module.exports = { app, startServer };
