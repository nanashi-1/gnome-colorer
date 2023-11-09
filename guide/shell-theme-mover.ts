import { existsSync, renameSync, rmSync } from 'fs';

export default function moveShellTheme() {
	if (existsSync('theme-build/gnome-shell'))
		rmSync('theme-build/gnome-shell', { recursive: true });

	renameSync('theme', 'theme-build/gnome-shell');
}
