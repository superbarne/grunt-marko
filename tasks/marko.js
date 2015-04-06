/*
 * grunt-marko
 * https://github.com/superbarne/grunt-marko
 *
 * Copyright (c) 2015 Barne Jürgensen
 * Licensed under the MIT license.
 */
'use strict';

var marko = require('marko');

module.exports = function(grunt) {

	grunt.registerMultiTask('marko', 'Simple marko template inegration', function() {
		var options = this.options({
		});

		var	dest = this.data.dest,
			data = this.data.data || {},
			template = this.data.template

		template = marko.load(template);
		template.render(data,function(err,output){
			if(!err)
				grunt.file.write(dest,output);
			else
				grunt.log.error(err);
		});

	});
};
