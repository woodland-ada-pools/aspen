const {src, dest, series} = require('gulp'),
      ghPages = require('gulp-gh-pages'),
      clean = require('gulp-clean');

function cleanBuild() {
	return src('./build')
		.pipe(clean());
}


function copyCname() {
	return src('./CNAME')
		.pipe(dest('./build'));
}

function deploy() {
	return src('./build/**/*')
		.pipe(ghPages());
}

exports.deploy = series(copyCname, deploy);
exports.clean = cleanBuild;
