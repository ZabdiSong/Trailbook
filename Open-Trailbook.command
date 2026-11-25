#!/bin/zsh
set -eu
cd "${0:A:h}"
if [[ ! -d build/Trailbook.app ]]; then zsh build.command; fi
open build/Trailbook.app
