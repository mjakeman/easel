const foreground_entry_point = document.createElement('div');
foreground_entry_point.id = 'easel-app';

const reactJS_script = document.createElement('script');

foreground_entry_point.appendChild(reactJS_script);
document.querySelector("body")?.appendChild(foreground_entry_point);