const { copyFile } = require('fs/promises');

const build = async () => {

    // Buildar para node
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        outfile: '/dist/vanilla-render-function.cjs.js',
        platform: 'node',
        target: ['node10.4'],
    });

    // Buildar ECMAScript Module
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        outfile: '/dist/vanilla-render-function.esm.js',
        format: 'esm',
        target: ['es2020'],
    });

    // Buildar para browser
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: true,
        sourcemap: false,
        outfile: '/dist/vanilla-render-function.min.js',
        target: ['es2020']
    });

    copyFile('package.json', './dist/package.json');
};

build();