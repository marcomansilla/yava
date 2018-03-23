module.exports=function(grunt){
    grunt.initConfig({
	options: { nospawn: true },
	watch: {
	    scripts: {
		files: ['**/*.js'],
		tasks: ['uglify'],
		options: {
		    livereload:true,
		    event: ['changed', 'added', 'deleted']
		}
	    }
	},
	uglify: {
	    build: {
		files: [{
		    expand: true,
		    src: '*.js',
		    dest: '../static/vue',
		    cwd: './src/',
		    ext: '.min.js'
		}]
	    },
	    components: {
		files: [{
		    expand: true,
		    src: '*.js',
		    dest: '../static/vue/components',
		    cwd: './src/components/',
		    ext: '.min.js'
		}]
	    }
	}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);
};
