/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp        = require('gulp'),
			runSequence = require('run-sequence'),
			del					= require('del')

//import external code
const
			CompileEJS  = require('./gulp/compileEJS'),
			CompileSCSS = require('./gulp/compileSCSS')

//variables
const 
			BUILD_FOLDER = './public'
var 
			SOURCE_FOLDER = './'

//////////////////////////////////////////////////////////////////////

gulp.task('compile ejs', CompileEJS(SOURCE_FOLDER, BUILD_FOLDER))
gulp.task('clean', ()=>del(BUILD_FOLDER + '/**'))
gulp.task('compile scss', CompileSCSS(SOURCE_FOLDER, BUILD_FOLDER))

gulp.task('default', runSequence('clean', 'compile ejs', 'compile scss') )
