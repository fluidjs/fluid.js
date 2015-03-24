module.exports = function (grunt) {

    const DEFAULT_TASKS = ['browserify'];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        browserify: {
            dist: {
                files: {
                    'dist/fluid.js': ["src/**/*.js"]
                }
            }
        },

        watch: {
            options: {
                spawn: false
            }, css: {
                files: ['src/**'],
                tasks: DEFAULT_TASKS
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', DEFAULT_TASKS);
}
