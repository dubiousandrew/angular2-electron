# Angular 2 electron app featuring webpack

A working demo of [electron] with [angular2] using [Webpack]

This is an angular example based on the hero tutorial.  

## Run the example

```bash
$ npm install
$ npm run build
$ npm run watch
$ npm run electron
```

## Packaging

The app has support for packaging using 'electron-packager'

```bash
$ npm run package
```

Will run the package for OSX. You can also provide additional options to the package command such as

*  --name : The package name
*  --all : Will packaget the application to all the platforms
*  --arch : Arches to be provided
*  --icon : The icon for the app

## License

[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular2]: http://angular.io
[electron]: http://electron.atom.io/
[ngrx]: https://github.com/ngrx/store
[material2]: https://github.com/angular/material2
[electron-packager]: https://github.com/electron-userland/electron-packager
