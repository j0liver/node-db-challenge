const db = require('../../data/db-config');

module.exports = {
    getProject,
    getById,
    insert
}

//RETURN!!!!!!

function getProject() {
    return db('project')
        .then(project => {
            const newProj = []
            project.forEach(proj => {
                
                if (proj.completed === 1) {
                    return proj.completed = true
                } else {
                    return proj.completed = false
                }
            })
            newProj.push(project)
            return newProj
        })
};

function getById(id) {
    return db('project')
        .where({ "project.id": id })
        .first()
        .then(proj => {
                if (proj.completed === 1) {
                    return proj.completed = true, proj
                } else {
                    return proj.completed = false , proj
                }
            })
};

function insert(project) {
    return db('project')
        .insert(project, 'id')
        .then(([id]) => getById(id))
};