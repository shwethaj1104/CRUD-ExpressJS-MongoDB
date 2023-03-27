const express = require('express')
const router = express.Router()
const Employees = require('../models/employeeModel')
const EmployeeService = require('../services/employeeService')

var cacheService = require("express-api-cache");
const getEmployees = require('../utils/getEmployeesByID');
var cache = cacheService.cache;

//get all
router.get('/', cache("2 minutes"),EmployeeService.getAllEmployees)

// Getting One
router.get('/:id',cache("2 minutes"), getEmployees,EmployeeService.getEmployeeByID)

// Creating one
router.post('/',EmployeeService.addEmployee)

// Updating One
router.patch('/:id', getEmployees, EmployeeService.updateEmployee)

// Deleting One
router.delete('/:id', getEmployees,EmployeeService.deleteEmployee)

module.exports = router