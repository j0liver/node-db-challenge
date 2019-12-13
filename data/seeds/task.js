
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').insert([
    {
      project_id: 1,
      description: "Create a forked copy of this project.",
      notes: "Clone this repo: https://github.com/LambdaSchool/node-db-challenge.git",
      completed: false
    },
    {
      project_id: 1,
      description: "Install Dependencies",
      notes: "Don't forget to cd within the folder before adding package.json and npm install",
      completed: false
    },
    {
      project_id: 1,
      description: "Work with knex to create data schema",
      notes: "Make sure to install knex and use migrations and seed data",
      completed: false
    },
    {
      project_id: 2,
      description: "Sweep Tile floors",
      notes: "Need to sweep kitchen, bathroom, and laundry floors",
      completed: false
    },
    {
      project_id: 2,
      description: "Vacuum floor",
      notes: "Don't forget stairs",
      completed: false
    },
  ])
    
};
