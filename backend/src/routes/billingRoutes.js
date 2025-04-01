const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

// ✅ Create a new billing record
router.post('/billing', billingController.createBilling);

// ✅ Get all billing records
router.get('/billing', billingController.getAllBilling);

// ✅ Get billing records by provider ID
router.get('/billing/:provider_id', billingController.getBillingByProvider);

// ✅ Update a billing record
router.put('/billing/:id', billingController.updateBilling);

// ✅ Delete a billing record
router.delete('/billing/:id', billingController.deleteBilling);

module.exports = router;
