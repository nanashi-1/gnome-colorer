import { copyFileSync, existsSync, rmSync } from 'fs';

export default function installGTKTheme(gtk4Path: string, gtk3Path: string) {
	console.log('Installing GTK theme');
	if (existsSync(gtk4Path) || existsSync(gtk3Path)) {
		rmSync(gtk4Path);
		rmSync(gtk3Path);
	}

	const gtkThemePath = 'src/gtk-theme-files/gtk.css';

	copyFileSync(gtkThemePath, gtk4Path);
	copyFileSync(gtkThemePath, gtk3Path);
}
