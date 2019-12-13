
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').insert([
    {
      project_name:'Finish Node Database Sprint', 
      description: 'Design and build a Data Model and a RESTful API that stores data into a Relational Database',
      completed:false
    },
    {
      project_name:'Clean House', 
      description: 'Complete weekly house cleaning',
      completed:false
    }

  ])
    
};
