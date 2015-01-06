var dest = "./build";
var src = './src/project';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
    //  entries: src + '/javascript/global.coffee',
    //  dest: dest,
    //  outputName: 'global.js',
    //  // Additional file extentions to make optional
    //  extensions: ['.coffee', '.hbs'],
    //  // list of modules to make require-able externally
    //  require: ['jquery', 'underscore']
    //}, {
     {
      entries: src + '/index.js',
      dest: dest,
      outputName: 'app.js'
      // list of externally available modules to exclude from the bundle
      //external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
