import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

export default function writeShellMetadata(name: string) {
	let indexTheme = readFileSync(
		'src/gnome-shell-theme-files/index.theme',
		'utf-8'
	);

	indexTheme = indexTheme.replace(/(Name=).*(\n)/, '$1' + name + '$2');
	indexTheme = indexTheme.replace(/(GtkTheme=).*(\n)/, '$1' + name + '$2');
	indexTheme = indexTheme.replace(
		/(MetacityTheme=).*(\n?)/,
		'$1' + name + '$2'
	);

	if (!existsSync('theme-build')) mkdirSync('theme-build');

	writeFileSync('theme-build/index.theme', indexTheme);
}
