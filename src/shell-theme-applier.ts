import { execSync } from 'child_process';

export default function applyShellTheme(name: string) {
	console.log('Applying shell theme');
	execSync('gsettings set org.gnome.shell.extensions.user-theme name ' + name);
}
