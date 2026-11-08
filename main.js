/**
 * macOS Classic Theme — PI-Desktop plugin entry.
 *
 * The theme itself is pure CSS (`contributes.themes` → themes/*.css); the host
 * registers and injects it, so nothing here touches the stylesheets. This entry
 * only adds the two commands that switch the host's appearance preference to
 * one of the contributed themes, because PI-Desktop stores a single preference
 * (`plugin:<pluginId>:<themeId>`) rather than a light/dark pair.
 *
 * Every call is gated by the permissions declared in manifest.json; widening
 * what this file does means widening `permissions` too.
 *
 * The plugin keeps no state: no settings writes, no private files, no data
 * directory. The client removes installed code, plugin-private data and logs on
 * uninstall, so nothing of this plugin survives its removal.
 */

const LIGHT_THEME = "macos-classic-light";
const DARK_THEME = "macos-classic-dark";

/** Namespaced id the host uses for one of this plugin's themes. */
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