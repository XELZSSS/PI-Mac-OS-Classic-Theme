# PI-Mac OS Classic Theme

**English** · [简体中文](README.zh-CN.md)

A theme plugin for [PI-Desktop](https://github.com/vastsa/pi-desktop), ported from
[huacnlee/zed-theme-macos-classic](https://github.com/huacnlee/zed-theme-macos-classic),
with light and dark themes

## Architecture

```text
PI-Mac OS Classic Theme/
├── manifest.json   # plugin manifest
├── main.js         # plugin entry
├── themes/         # light + dark theme sheets
├── dist/           # packaged .piplug
├── README*.md      # docs
└── LICENSE
```

## Usage

Download the `.piplug` from [Releases](https://github.com/XELZSSS/PI-Mac-OS-Classic-Theme/releases),
then Plugins page → Install package

Switch in Settings → Appearance, or run `macOS Classic: Apply Light Theme` / `Apply Dark Theme`

## Notes

- Dark page `#050505` / panels `#1a1a1a`; light page `#f2f2f2` / panels `#e4e4e4`, white composer
- Shadows are disabled, depth comes from fills and 1px borders

## License

MIT · [LICENSE](LICENSE) · palette © Jason Lee (huacnlee)