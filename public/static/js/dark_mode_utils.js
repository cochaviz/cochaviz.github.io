export function toggle_dark_mode() {
  var app = document.getElementsByTagName("HTML")[0];
  app.classList.toggle("dark");
}

export function match_system_dark_mode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
