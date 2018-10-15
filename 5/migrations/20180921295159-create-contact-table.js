'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {

  //automatic mapping, the mapping key resolves to the column
  db.createTable( 'contacts',
  {
    id:
    {
      type: 'string',
      notNull: true,
      primaryKey: true,
      length: 32
    },
    user_id:
    {
      type: 'string',
      notNull: true,
      length: 32,
      foreignKey: {
        name: 'id_of_user',
        table: 'users',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      },
    },
    first_name:
    {
      type: 'string',
      length: 128,
      notNull: true,
    },
    last_name:
    {
      type: 'string',
      length: 128,
      notNull: false,
    },
    phone:
    {
      type: 'string',
      length: 128,
      notNull: true,
    },
    is_active:
    {
      type: 'boolean',
      notNull: true,
    },
    created:
    {
      type: 'datetime',
      notNull: true,
    },
    updated:
    {
      type: 'datetime',
      notNull: false,
    },
  }, callback );
};

exports.down = function (db, callback) {
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
