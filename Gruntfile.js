module.exports = function (grunt) {

    const DEFAULT_TASKS = ['webpack'];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        webpack: {
            build: {
                context: "./src",
                entry: "./fluid.js",
                output: {
                    path: "./dist/",
                    filename: "[name]-dist-[hash].js",
                    library: "fluidjs",
                    libraryTarget: "umd"

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
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', DEFAULT_TASKS);
}
