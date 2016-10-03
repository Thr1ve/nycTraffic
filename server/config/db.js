module.exports = {
  DB_NAME: 'nycTraffic',
  TABLES: ['streets', 'updates'],
  SECONDARY_INDEXES: [
    { tableName: 'updates', index: 'DataAsOf' },
    { tableName: 'updates', index: 'linkName' }
  ]
}
