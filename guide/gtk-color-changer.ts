import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';

export default function installGTKColor(
	color: string,
	gtk4Path: string,
	gtk3Path: string
) {
	console.log('Changing theme color');
	const themePath = 'src/gtk-theme-files/gtk.css';

	let theme = readFileSync(themePath, 'utf-8');
	theme = theme.replace(/(accent_bg_color ).*(;)/, '$1' + color + '$2');

	console.log('Installing GTK theme');
	if (existsSync(gtk4Path) || existsSync(gtk3Path)) {
		rmSync(gtk4Path);
		rmSync(gtk3Path);
	}

	writeFileSync(gtk4Path, theme);
	writeFileSync(gtk3Path, theme);
}
