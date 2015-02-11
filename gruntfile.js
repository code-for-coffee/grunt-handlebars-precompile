/**
 * Created by github.com/code-for-coffee on 2/11/15.
 */
grunt.initConfig({

    handlebars: {
        compile: {
            options: {
                namespace: "JST"
            },
            files: {
                "path/to/result.js": "path/to/source.hbs",
                "path/to/another.js": ["path/to/sources/*.hbs", "path/to/more/*.hbs"]
            }
        }
    }

});
grunt.loadNpmTasks('grunt-contrib-handlebars');