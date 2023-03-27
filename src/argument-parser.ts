import { ArgumentParser } from 'argparse';
import { homedir } from 'os';
import { join } from 'path';

export default function parseArguments() {
	const homePath = homedir();

	const parser = new ArgumentParser({
		description: 'Changes the color of the GNOME shell, GTK3 and GTK4',
	});

	parser.add_argument('-v', '--version', {
		action: 'version',
		version: '1.0.0',
	});
	parser.add_argument('-c', '--color', {
		help: 'color to replace the default color of gnome (default: #3584e4)',
		default: '#3584e4',
	});
	parser.add_argument('-s', '--shell-theme-name', {
		help: 'name of the output GNOME shell theme (default: gnome-colorer)',
		default: 'gnome-colorer',
		metavar: 'NAME',
	});
	parser.add_argument('--theme-path', {
		help: 'path to install GNOME shell theme (default: ~/.themes)',
		default: join(homePath, '.themes'),
	});
	parser.add_argument('--gtk3', {
		help: 'path to GTK3 config (default: ~/.config/gtk-3.0/gtk.css)',
		default: join(homePath, '.config/gtk-3.0/gtk.css'),
		metavar: 'PATH',
	});
	parser.add_argument('--gtk4', {
		help: 'path to GTK3 config (default: ~/.config/gtk-4.0/gtk.css)',
		default: join(homePath, '.config/gtk-4.0/gtk.css'),
		metavar: 'PATH',
	});

	return parser.parse_args();
}
