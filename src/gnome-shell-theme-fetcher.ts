import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';

export default function fetchGNOMEShellTheme() {
	console.log('Fetching GNOME shell');

	if (existsSync('theme')) rmSync('theme', { recursive: true });

	execSync('git clone https://github.com/nanashi-1/gnome-shell-theme theme');
}
