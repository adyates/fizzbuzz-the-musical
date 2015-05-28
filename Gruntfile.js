module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		shell: {
			travisLint: {
				command: 'travis-lint ./travis.yml'
			},
			javaTest: {
				command: 'gradle test',
				options: { execOptions: { cwd: 'java'}}
			},
			nodejsTest: {
				command: 'gulp',
				options: { execOptions: { cwd: 'nodejs'}}
			}
		}
	});
	
	grunt.registerTask('default', ['shell:javaTest', 'shell:nodejsTest', 'test-web']);

	grunt.registerTask('test-web', 'Tests the HTML5/CSS3 version', function() {
		grunt.log.writeln('Still need to implement a test process for web/...');
	});
	
};