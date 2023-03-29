import { cpSync, existsSync, rmSync } from 'fs';

export default function fetchGNOMEShellTheme() {
	console.log('Fetching GNOME shell');

	if (existsSync('theme')) rmSync('theme', { recursive: true });

	cpSync('src/gnome-shell-theme-files/gnome-shell', 'theme', {
		recursive: true,
	});
}
