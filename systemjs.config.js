(function(global) {

  var ngVer = '@2.0.0-rc.2';
  var routerVer = '@3.0.0-alpha.7'; 
  var formsVer = '@0.1.0'; 

  //map tells the System loader where to look for things
  var  map = {
    'app':                        'app',

    '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
    '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
    '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router-deprecated',
    'upgrade',
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
  });

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  // Forms not on rc yet
  packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);




/*

(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'dist/app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);*/