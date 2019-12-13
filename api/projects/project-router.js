const express = require('express');
Projects = require('./project-module');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProject()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log("GET Project", err)
            res.status(500).json({ message: 'Failed to get list of projects' })
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    Projects.getById(id)
        .then(proj => {
            if(proj){
                res.status(200).json(proj)
            } else {
                res.status(404).json({message: 'Could not find the porject with the specified id'})
            }
        })
})

router.post('/', (req, res) => {
    const newProject = req.body
    Projects.insert(newProject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log("POST Project", err)
            res.status(500).json({ error: "Could not save the project to the database" })
        })

})



module.exports = router;