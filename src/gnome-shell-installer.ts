import { existsSync, renameSync, rmSync } from 'fs';
import { join } from 'path';

export default function installGNOMEShell(path: string, name: string) {
	console.log('Installing shell theme');
	if (existsSync(join(path, name)))
		rmSync(join(path, name), { recursive: true });
	renameSync('theme-build', join(path, name));
}
