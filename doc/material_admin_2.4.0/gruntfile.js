module.exports = function(grunt) {
    var ignoreMain = [
        '**/*.html',
        '!**/node_modules/**',
        '!**/.idea/**',
        '!**/*.text**',
        '!**/*.txt**',
        '!**/.DS_Store**',
        '!.DS_Store',
        '!dist',
        '!**/__MACOSX/**',
        '!__MACOSX',
        '!**/__macosx/**',
        '!validation-report.json',
        '!validation-status.json',
        '!npm-debug.log'
    ];

    var cssFiles = ['css/**/**/*.css', '!css/app-1.css', '!css/app-2.css', '!css/app-3.css'],
        cssMain = 'css/**/**/*.css',
        scssFiles = 'scss/**/*.scss',
        htmlFiles = ['*.html', '_includes/**/*.html', 'variants/*.html'],
        jsFiles = 'js/**/*',
        miscFiles = ['gruntfile.js', 'package.json'],
        demoFiles = 'demo/**/*',
        fontFiles = 'fonts/**/*',
        imgFiles = 'img/**/*',
        distHtmlFiles = '../dist/*.html',
        vendorFiles = 'vendors/**/*',
        distPathBase = '../dist';


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile less files to css
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "css/app.css": "scss/app.scss"
                }
            }
        },

        // Minify css files
        cssmin: {
            minify: {
                options: {
                    keepSpecialComments: 0
                },
                expand: true,
                src: ['css/app.css'],
                ext: '.min.css'
            }
        },

        // This task is used to include partial files in to html. Please ignore this.
        includereplace: {
            your_target: {
                expand: true,
                cwd: '',
                src: ['*.html'],
                dest: distPathBase
            }
        },

        //This task is used to replace images sources with placehold images. Please ignore this.
        'string-replace': {
            classes: {
                files: [{
                    expand: true,
                    cwd: distPathBase,
                    src: ['**.html', 'variants/**.html'],
                    dest: distPathBase
                }],
                options: {
                    replacements: [
                        {
                            pattern: /<li .*?class="@@(.*?)">/ig,
                            replacement: '<li>'
                        },
                        {
                            pattern: /<li .*?class="navigation__sub @@(.*?)">/ig,
                            replacement: '<li class="navigation__sub">'
                        }
                    ]
                }
            }
        },

        // Minify js files
        uglify: {
            my_target: {
                files: {
                    'js/app.min.js': ['js/inc/functions/*.js', 'js/inc/actions.js']
                }
            }
        },

        // Copy files and folders to dist
        copy: {
            css: {
                expand: true,
                cwd: '',
                src: cssFiles,
                dest: distPathBase
            },
            scss: {
                expand: true,
                cwd: '',
                src: scssFiles,
                dest: distPathBase
            },
            js: {
                expand: true,
                cwd: '',
                src: jsFiles,
                dest: distPathBase
            },
            misc: {
                expand: true,
                cwd: '',
                src: miscFiles,
                dest: distPathBase
            },
            demo: {
                expand: true,
                cwd: '',
                src: demoFiles,
                dest: distPathBase
            },
            fonts: {
                expand: true,
                cwd: '',
                src: fontFiles,
                dest: distPathBase
            },
            img: {
                expand: true,
                cwd: '',
                src: imgFiles,
                dest: distPathBase
            },
            vendors: {
                expand: true,
                cwd: '',
                src: vendorFiles,
                dest: distPathBase
            }
        },

        // Clean files
        clean: {
            options: {
                force: true
            },
            idea: '**/.idea',
            ds: '**/.DS_Store',
            thumbsdb: '**/Thumbs.db',
            dist: distPathBase
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ],
                browsers: ['ie 9']
            },

            css: {
                src: cssMain
            }
        },


        // Replace markups strings (Ignore this)


        // Watch files to execute tasks
        watch: {
            includes: {
                files: htmlFiles,
                tasks: ['includereplace']
            },
            styles: {
                files: scssFiles,
                tasks: ['sass', 'postcss', 'cssmin', 'copy:css']
            },
            js: {
                files: jsFiles,
                tasks: ['uglify', 'copy:js']
            },
            misc: {
                files: miscFiles,
                tasks: ['copy:misc']
            },
            demo: {
                files: demoFiles,
                tasks: ['copy:demo']
            },
            font: {
                files: fontFiles,
                tasks: ['copy:font']
            },
            img: {
                files: imgFiles,
                tasks: ['copy:img']
            },
            vendors: {
                files: vendorFiles,
                tasks: ['copy:vendors']
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');

    // Other tasks.
    grunt.registerTask('dist', ['clean', 'sass', 'postcss', 'cssmin', 'uglify', 'copy', 'includereplace', 'string-replace']);

};