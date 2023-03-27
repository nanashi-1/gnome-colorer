import changeShellColor from './shell-color-changer';
import renderShellSASS from './shell-sass-renderer';
import parseArguments from './argument-parser';
import writeShellMetadata from './shell-metadata-writer';
import moveShellTheme from './shell-theme-mover';
import installGNOMEShell from './gnome-shell-installer';
import applyShellTheme from './shell-theme-applier';
import fetchGNOMEShellTheme from './gnome-shell-theme-fetcher';
import installGTKColor from './gtk-color-changer';

const args = parseArguments();

function processShellTheme() {
	fetchGNOMEShellTheme();
	changeShellColor(args.color);
	renderShellSASS();
	writeShellMetadata(args.shell_theme_name);
	moveShellTheme();
	installGNOMEShell(args.theme_path, args.shell_theme_name);
	applyShellTheme(args.shell_theme_name);

	console.log('GNOME shell theme installation complete');
}

function processGtKTheme() {
	installGTKColor(args.color, args.gtk4, args.gtk3);

	console.log('GTK theme installation complete');
}

processShellTheme();
processGtKTheme();
