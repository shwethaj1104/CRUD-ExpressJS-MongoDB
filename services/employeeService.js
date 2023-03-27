const Employees = require('../models/employeeModel')

exports.getAllEmployees = async (req, res) => {
    try {
        const employee = await Employees.find()
        res.json(employee)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.getEmployeeByID = (req, res) => {
    res.json(res.employee) //in getSubscriber we are filtering by id
}

exports.addEmployee = async (req, res) => {
    const employee = new Employees({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await employee.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.updateEmployee = async (req, res) => {
    if (req.body.name != null) {
        res.employee.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.employee.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.employee.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        await res.employee.deleteOne()
        res.json({ message: 'Deleted Employees' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}