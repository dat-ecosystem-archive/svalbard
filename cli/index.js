var archiver = require('hypercore-archiver')
var archiverServer = require('archiver-server')
var normcore = require('normcore')
var ndjson = require('ndjson')

module.exports = function (key, opts) {
  var feed = normcore(key, opts)
  var archives = archiver('./archive')
  var datServer = archiverServer(archives, opts)
  
  feed.createReadStream()
    .pipe(ndjson.parse())
    .on('data', function (obj) {
      if (obj.type === 'add') {
        console.log('adding', obj.key)
        archives.add(obj.key, function (err) {
          if (err) console.error('error adding', err)
        })
      }
      if (obj.type === 'remove') {
        console.log('removing', obj.key)
        archives.remove(obj.key, function (err) {
          if (err) console.error('error removing', err)
        })
      }
    })
}
