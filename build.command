#!/bin/zsh
set -euo pipefail
cd "${0:A:h}"
stage=$(mktemp -d /private/tmp/trailbook.XXXXXX)
trap 'rm -rf "$stage"' EXIT
app="$stage/Trailbook.app/Contents"
mkdir -p "$app/MacOS" "$app/Resources" "work/swift-modules"
python3 macos/bundle.py "$app/Resources/Planner.html"
cp Info.plist "$app/Info.plist"
cp macos/Trailbook.icns vendor/*txt "$app/Resources/"
xcrun swiftc -O -swift-version 5 -parse-as-library -target "$(uname -m)-apple-macosx14.0" \
  -module-cache-path work/swift-modules Trailbook.swift -o "$app/MacOS/Trailbook"
codesign --force --sign - "$stage/Trailbook.app"
codesign --verify --deep --strict "$stage/Trailbook.app"
destination="${1:-$PWD/build/Trailbook.app}"
mkdir -p "${destination:h}"
# A rebuild replaces only this project's own product.
if [[ -e "$destination" ]]; then
    [[ -d "$destination" && ! -L "$destination" && "$destination" == */Trailbook.app ]]
    [[ "$(/usr/libexec/PlistBuddy -c 'Print CFBundleIdentifier' "$destination/Contents/Info.plist")" == local.trailbook.planner ]]
    mv "$destination" "$stage/previous.app"
fi
if ! ditto --norsrc --noextattr "$stage/Trailbook.app" "$destination"; then
    if [[ -d "$stage/previous.app" ]]; then mv "$stage/previous.app" "${destination:h}/Trailbook-previous.app"; fi
    exit 1
fi
codesign --verify --deep "$destination"
echo "Built $destination"
