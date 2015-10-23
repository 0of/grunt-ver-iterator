var VersionIterable = require('ver-iterator');

module.exports = function (grunt) {
    /**
    * @param {Object} [options] grunt options
    * @param {Function} [options.task] the task going to run and the passing context(i.e. `this`) of the task is grunt task object
    * @param {String} [options.name] package name
    * @param {String} [options.range] iterating version ranges in semver format
    * @param {String} [options.dir] installing package directory
    * @public
    */
    function versionIterateTask () {
        var opts = this.options(),
            task = opts.task.bind(this);

        var iter = new VersionIterable(task, {name: opts.name, range: opts.range, dir: opts.dir});
        iter.on('beforeEach', function (ver) {
            grunt.log.writeln('before running task for version [' + ver + ']...'); 
        });

        iter.on('afterEach', function (ver) {
            grunt.log.writeln('after running task for version [' + ver + ']...'); 
            grunt.log.writeln(); 
        });

        iter.on('fatal', function (e) {
            grunt.log.errorln('fatal error occurred:' + e); 
        });
        
        iter.on('failed', function (e) {
            grunt.log.errorln('task error occurred:' + e); 
        });

        for (var result of iter) {
            if (result) {
                grunt.log.ok('Running task OK');
            }
        }
    }

    grunt.registerMultiTask('verIterator', 'version iterations', versionIterateTask);
}