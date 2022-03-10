const { copyFile } = require('fs/promises');

const build = async () => {

    // Buildar para node
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts', './src/attachCSS/index.ts', './src/generateCSS/index.ts', './src/r/index.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        outdir: '/dist',
        platform: 'node',
        target: ['node10.4'],
    });

    // Buildar ECMAScript Module
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts', './src/attachCSS/index.ts', './src/generateCSS/index.ts', './src/r/index.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        outdir: '/dist/esm',
        format: 'esm',
        target: ['esnext'],
    });

    // Buildar para browser
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: true,
        sourcemap: false,
        outfile: '/dist/unpkg/vanilla-render-function.min.js',
        target: ['esnext']
    });

    copyFile('package.json', './dist/package.json');
};

build();