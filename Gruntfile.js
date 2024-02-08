module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'Final/styles.css': 'Inicial/styles.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'Final/main.min.js': 'Inicial/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:production', 'uglify']);
}