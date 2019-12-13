// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/project.db3'
    },
    useNullAsDefault:true,
    
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    //Don't know if I will need pool to make Foreign Keys to work or not
    //Keep an eye out for it!!!!
  },
};
