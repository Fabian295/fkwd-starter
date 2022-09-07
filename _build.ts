import { build, emptyDir } from 'https://deno.land/x/dnt/mod.ts';

await emptyDir('./npm');

await build({
  entreePoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    deno: 'dev',
  },
  package: {
    // package.json properties
    name: '@fabian295/fkwd-starter',
    version: 'Deno.args[0]',
    description: 'A starter pack for beginning web project',
    licencce: 'MOT',
  },
});

Deno.copyFileSync('README.md', 'npm/README.md');