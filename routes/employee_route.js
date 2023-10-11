const express = require('express');
const router = express.Router();
const Employee = require('../models/employee_db');

// 3. GET - User can get all employee list
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error retrieving employees:', error);
    res.status(500).send('Error retrieving employees.');
  }
});

// 4. POST - User can create a new employee
router.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).send('Error creating employee.');
  }
});

// 5. GET - User can get employee details by employee id
router.get('/employees/:eid', async (req, res) => {
  const eid = req.params.eid;
  try {
    const employee = await Employee.findById(eid);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error('Error retrieving employee details:', error);
    res.status(500).send('Error retrieving employee details.');
  }
});

// 6. PUT - User can update employee details
router.put('/employees/:eid', async (req, res) => {
  const eid = req.params.eid;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(eid, req.body, { new: true });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee details:', error);
    res.status(500).send('Error updating employee details.');
  }
});

// 7. DELETE - User can delete an employee by employee id
router.delete('/employees/:eid', async (req, res) => {
  const eid = req.query.eid;
  try {
    const deletedEmployee = await Employee.findOneAndDelete(eid,req.body);
    console.log(`${deletedEmployee._id} is succesfully deleted`)
    if (deletedEmployee) {
      res.status(204).send();
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).send('Error deleting employee.');
  }
});

module.exports = router;
