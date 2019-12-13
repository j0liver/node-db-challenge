
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').insert([
    {
      project_id: 1,
      resource_name: "VS Code",
      description: "Excellent coding program"
    },
    {
      project_id: 1,
      resource_name: "Lambda Training Kit",
      description: "Excellent source for definitions and coding examples"
    },
    {
      project_id: 2,
      resource_name: "Vacuum",
      description: "Lives in the laundry room"
    },
    {
      project_id: 2,
      resource_name: "Broom",
      description: "Blue and white and can be found in kitchen pantry"
    }
  ])
    
};
