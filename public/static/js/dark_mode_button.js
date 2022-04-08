export function toggle_dark_mode() {
  var app = document.getElementsByTagName("HTML")[0];

  if (app.classList.contains("dark")) {
    app.classList.remove("dark");
  } else {
    app.classList.add("dark");
  }
}
