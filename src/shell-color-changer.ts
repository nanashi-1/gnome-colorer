import { readFileSync, writeFileSync } from 'fs';

export default function changeShellColor(
	colorString: string,
	fgColorString: string
) {
	console.log('Changing shell color to %s', colorString);
	const colorPath = 'theme/gnome-shell-sass/_colors.scss';
	let color = readFileSync(colorPath, 'utf-8');

	color = color.replace(
		/(\$selected_bg_color: ).*(;)/,
		'$1' + colorString + '$2'
	);
	color = color.replace(
		/(\$selected_fg_color: ).*(;)/,
		'$1' + fgColorString + '$2'
	);

	writeFileSync(colorPath, color);
}
