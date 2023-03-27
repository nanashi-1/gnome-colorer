import { readFileSync, writeFileSync } from 'fs';

export default function changeGTKColor(color: string) {
	console.log('Changing theme color');
	const themePath = 'src/gtk-theme-files/gtk.css';

	let theme = readFileSync(themePath, 'utf-8');
	theme = theme.replace(/(accent_bg_color ).*(;)/, '$1' + color + '$2');

	writeFileSync(themePath, theme);
}
