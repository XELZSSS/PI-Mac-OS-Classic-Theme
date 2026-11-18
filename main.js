const LIGHT_THEME = "macos-classic-light";
const DARK_THEME = "macos-classic-dark";

function themePreference(themeId) {
  return `plugin:${pi.plugin.getId()}:${themeId}`;
}

async function apply(themeId) {
  await pi.app.setTheme(themePreference(themeId));
}

async function onLoad() {
  await pi.commands.register({
    id: "macos-classic-theme.apply-light",
    title: "macOS Classic: Apply Light Theme",
    category: "Theme",
    keywords: ["theme", "macos", "classic", "light"],
    run: () => apply(LIGHT_THEME),
  });
  await pi.commands.register({
    id: "macos-classic-theme.apply-dark",
    title: "macOS Classic: Apply Dark Theme",
    category: "Theme",
    keywords: ["theme", "macos", "classic", "dark"],
    run: () => apply(DARK_THEME),
  });
}

async function onUnload() {
  await pi.commands.unregister("macos-classic-theme.apply-light");
  await pi.commands.unregister("macos-classic-theme.apply-dark");
}

module.exports = { onLoad, onUnload };
