import { writeFileSync } from 'fs';
import { compile } from 'sass';

export default function renderShellSASS() {
	console.log('Rendering shell SASS');
	const result = compile('theme/gnome-shell.scss');
	writeFileSync('theme/gnome-shell.css', result.css);
}
