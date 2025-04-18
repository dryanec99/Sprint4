// Import express.js
const express = require("express");
// Get the functions in the db.js file to use
const db = require('./services/db');
// At the top of app.js, require 'path' for safer path handling
const path = require("path");

// Import route files
const reserveFoodRoutes = require('./routes/reservefood');
const manageInventoryRoutes = require('./routes/manageinventory');
const manageReservationsRoutes = require('./routes/managereservations');
const sendNotificationsRoutes = require('./routes/sendnotifications');
const volunteerRoutes = require('./routes/volunteer');
const reservationRoutes = require('./routes/reservation');
const recipientRoutes = require('./routes/recipient');
const viewFoodRoutes = require('./routes/viewfood');
const authRoutes = require('./routes/auth');
const donationsRoutes = require('./routes/donations');
const testDonationRoutes = require('./routes/test-donation');
const foodRoutes = require('./routes/food'); 
const directDonationRoutes = require('./routes/direct-donation'); 
const messagesRoutes = require('./routes/messages'); 
const fridgesRoutes = require('./routes/fridges'); 
const recipientReservationsRoutes = require('./routes/recipient-reservations'); 
const serverRenderedRoutes = require('./routes/server-rendered'); 
const pointsRoutes = require('./routes/points'); 
const recipientPointsRoutes = require('./routes/recipient-points'); 
const autoAchievementsRoutes = require('./routes/auto-achievements'); 
const feedbackRoutes = require('./routes/feedback'); 
const volunteerStatsRoutes = require('./routes/volunteer-stats');

// Create express app
var app = express();

// Add middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add static files location
app.use(express.static("static"));

// Use route files
app.use('/api/reserve-food', reserveFoodRoutes);
app.use('/api/inventory', manageInventoryRoutes);
app.use('/api/manage-reservations', manageReservationsRoutes);
app.use('/api/notifications', sendNotificationsRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/recipient', recipientRoutes);
app.use('/api/food', viewFoodRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationsRoutes);
app.use('/api/test-donation', testDonationRoutes);
app.use('/api/food', foodRoutes); 
app.use('/api/direct-donation', directDonationRoutes); 
app.use('/api/messages', messagesRoutes); 
app.use('/api/fridges', fridgesRoutes); 
app.use('/api/recipient-reservations', recipientReservationsRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/recipient-points', recipientPointsRoutes);
app.use('/api/volunteer-stats', volunteerStatsRoutes);
app.use('/api/auto-achievements', autoAchievementsRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/server', serverRenderedRoutes); 

// Create a route for root - /
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "main.html"));
});

// Test signup page
app.get("/test-signup", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "test-signup.html"));
});

// Dynamic routes for each page
app.get("/donate", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "donor.html"));
});
app.get("/receive", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "recepient.html"));
});
app.get("/volunteer", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "volunteer.html"));
});
app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "login.html"));
});
app.get("/donationguidelines", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "donationguidelines.html"));
});
app.get("/donationform", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "donationform.html"));
});
app.get("/donationhistory", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "donationhistory.html"));
});
app.get("/viewfood", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "viewfood.html"));
});
app.get("/test-donation-debug", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "test-donation-debug.html"));
});
app.get("/simple-donation", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "simple-donation.html"));
});
app.get("/working-donation", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "working-donation-form.html"));
});
app.get("/test-donation-history", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "test-donation-history.html"));
});
app.get("/reservefood", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "reservefood-fixed.html"));
});
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "reservations.html"));
});

app.get("/bob-reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "bob-reservations.html"));
});
app.get("/manageinventory", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "manageinventory.html"));
});
app.get("/managereservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "managereservations.html"));
});

app.get("/volunteer-reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "volunteer-reservations.html"));
});

app.get("/volunteer-reservations-direct", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "volunteer-reservations-direct.html"));
});

app.get("/test-reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "test-reservations.html"));
});

app.get("/volunteer-reservations-simple", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "volunteer-reservations-simple.html"));
});

app.get("/debug-reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "debug-reservations.html"));
});

app.get("/basic-reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "basic-reservations.html"));
});

app.get("/network-debug", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "network-debug.html"));
});

app.get("/debug-api", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "debug-api.html"));
});

app.get("/test-reservations-display", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "test-reservations-display.html"));
});

app.get("/simple-reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "simple-reservations.html"));
});

app.get("/find-fridge", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "find-fridge.html"));
});

app.get("/recipient-points", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "recipient-points.html"));
});

app.get("/volunteer-points", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "volunteer-points.html"));
});

app.get("/feedback", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "feedback.html"));
});

app.get("/sendnotifications", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "sendnotifications.html"));
});
app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "contact.html"));
});
app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "about.html"));
});
app.get("/messages", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", "messages.html"));
});

// Start server on port 3000
app.listen(3000, function() {
    console.log(`Server running at http://127.0.0.1:3000/`);
});
