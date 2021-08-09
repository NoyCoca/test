
const studentModel = require('../models/studentModel');

const getAllStudent = async (req, res) => {
    try {
        await studentModel.find({}, (error, result) => {
            if (error) throw error;
            console.log(result)
            res.json({ massage: "success", data: result })
        });
    }
    catch (error) {
        res.json({ massage: "database problem ", error })
    }

}

const getByName = async (req, res) => {
    try {
        const name = req.params.name;
        await studentModel.find({ firstName: name }, (error, result) => {
            if (error) throw error;
            res.send({ message: "success", data: result })
        })
    }
    catch (error) {
        res.send({ message: "filed", error })

    }
}
const createNewStudent = async (req, res) => {
    try {
        const student = new studentModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email
        })
        await studentModel.insertMany(student, (error, result) => {
            if (error) throw error;
            res.send({ massage: "user add" })
        })
    }
    catch (error) {
        res.send({ massage: "the is a problem" })
    }
}

const deleteStudentById = async (req, res) => {
    try {
        const deleteId = req.params.id;
        await studentModel.findByIdAndDelete(deleteId, (error, result) => {
            if (error) throw error;
            res.send({ massage: "delete student", details: result })
        });
    }
    catch (error) {
        res.send({ massage: "the is a problem", error })
    }
}

const updateStudentById = async (req, res) => {
    try {
        const updateId = req.params.id;
        await studentModel.findByIdAndUpdate(updateId, req.body, (error, result) => {
            if (error) throw error;
            res.send({ massage: "delete student", details: result })
        });
    }
    catch (error) {
        res.send({ massage: "the is a problem", error })
    }
}


module.exports = { getAllStudent, createNewStudent, deleteStudentById, updateStudentById, getByName };
