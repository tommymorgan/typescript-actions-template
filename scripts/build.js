import { mkdir, rm } from 'node:fs/promises';
import { build } from 'esbuild';

// Clean dist directory
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

// Build hello-world action
await build({
  entryPoints: ['src/hello-world.ts'],
  bundle: true,
  platform: 'node',
  target: 'node20',
  format: 'esm',
  outfile: 'dist/hello-world.js',
  external: [], // Bundle everything including @actions/core
  sourcemap: true,
  minify: false, // Keep readable for debugging
});

console.log('Build complete!');
