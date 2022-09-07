import { build, emptyDir } from 'https://deno.land/x/dnt/mod.ts';

await emptyDir('./npm');

await build({
  entryPoints: ['./js/index.js', './mod.ts'],
  outDir: './npm',
  shims: {
    deno: 'dev',
  },
  package: {
    // package.json properties
    name: '@fabianx/fkwd-starter',
    version: Deno.args[0],
    description: 'A starter pack for beginning web projects',
    licence: 'MIT',
  },
});

Deno.copyFileSync('README.md', 'npm/README.md');