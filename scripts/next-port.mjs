import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const envPath = path.join(rootDir, '.env');

function getPortFromEnv() {
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const match = trimmed.match(/^PORT\s*=\s*(.*)$/i);
      if (match) {
        const val = match[1].trim().replace(/^['"](.*)['"]$/, '$1');
        if (val) return val;
      }
    }
  }
  return process.env.PORT || '3000';
}

const command = process.argv[2] || 'dev';
const port = getPortFromEnv();
const extraArgs = process.argv.slice(3);

console.log(`[anuj-portfolio] Starting Next.js ${command} on port ${port} (from .env)...`);

const isWin = process.platform === 'win32';
const npxCmd = isWin ? 'npx.cmd' : 'npx';

const child = spawn(npxCmd, ['next', command, '-p', port, ...extraArgs], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    PORT: port,
  },
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
