const asyncHandler = require('express-async-handler')

const user = require('../models/userModel')
const ticket = require('../models/ticketModel')

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' })
})

// @desc    Create user tickets
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'CreateTickets' })
})

module.exports = {
  getTickets,
  createTicket,
}
