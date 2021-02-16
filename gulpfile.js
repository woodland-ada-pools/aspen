const {src, dest, series} = require('gulp'),
      ghPages = require('gulp-gh-pages');

function copyCname() {
	return src('./CNAME')
		.pipe(dest('./build'));
}

function deploy() {
	return src('./build/**/*')
		.pipe(ghPages());
}

exports.deploy = series(copyCname, deploy);
