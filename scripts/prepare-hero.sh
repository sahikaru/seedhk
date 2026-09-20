#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Download the licensed 3840x2160 master documented in docs/hero-media.md.
# Do not upscale the old hero.mp4 or substitute a different source.
source_video=${1:?Pass the downloaded Pexels 6899910 4K master path}
expected=b49b3eac771cd478566abf13cbfaf3cb3dc61a9445ba270dc57bca07f4b8cdcc
actual=$(shasum -a 256 "$source_video" | awk '{print $1}')
[[ "$actual" == "$expected" ]] || { echo 'Unexpected source video' >&2; exit 1; }

# Blend the last half-second into the opening half-second for an 8s loop.
loop_filter='[0:v]split[a][b];[a]trim=start=0.5:end=8.5,setpts=PTS-STARTPTS[main];[b]trim=start=0:end=0.5,setpts=PTS-STARTPTS[tail];[main][tail]xfade=transition=fade:duration=0.5:offset=7.5,format=yuv420p'
ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -filter_complex "$loop_filter[out]" -map '[out]' -an \
  -c:v libx264 -preset slow -crf 23 -movflags +faststart \
  public/assets/videos/hero-jellyfish-6899910-4k.mp4
ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -filter_complex "$loop_filter,crop=1216:2160:1640:0,scale=1080:1920:flags=lanczos[out]" \
  -map '[out]' -an -c:v libx264 -preset slow -crf 23 -movflags +faststart \
  public/assets/videos/hero-jellyfish-6899910-mobile.mp4

# VP9 is preferred where supported; MP4 remains the compatibility fallback.
ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -filter_complex "$loop_filter[out]" -map '[out]' -an \
  -c:v libvpx-vp9 -b:v 0 -crf 31 -cpu-used 3 -row-mt 1 -tile-columns 2 \
  public/assets/videos/hero-jellyfish-6899910-4k.webm
ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -filter_complex "$loop_filter,crop=1216:2160:1640:0,scale=1080:1920:flags=lanczos[out]" \
  -map '[out]' -an -c:v libvpx-vp9 -b:v 0 -crf 31 -cpu-used 3 -row-mt 1 \
  public/assets/videos/hero-jellyfish-6899910-mobile.webm

poster_temp=$(mktemp -d)
trap 'rm -f "$poster_temp/desktop.jpg" "$poster_temp/mobile.jpg"; rmdir "$poster_temp"' EXIT
ffmpeg -hide_banner -loglevel error -y \
  -i public/assets/videos/hero-jellyfish-6899910-4k.mp4 \
  -frames:v 1 -update 1 -vf scale=2560:1440 -q:v 2 "$poster_temp/desktop.jpg"
cwebp -quiet -q 88 -sharp_yuv "$poster_temp/desktop.jpg" \
  -o public/assets/videos/posters/hero-jellyfish-6899910.webp
ffmpeg -hide_banner -loglevel error -y \
  -i public/assets/videos/hero-jellyfish-6899910-mobile.mp4 \
  -frames:v 1 -update 1 -q:v 2 "$poster_temp/mobile.jpg"
cwebp -quiet -q 88 -sharp_yuv "$poster_temp/mobile.jpg" \
  -o public/assets/videos/posters/hero-jellyfish-6899910-mobile.webp
ffmpeg -hide_banner -loglevel error -y \
  -i public/assets/videos/hero-jellyfish-6899910-4k.mp4 \
  -frames:v 1 -update 1 -vf 'scale=1200:675,crop=1200:630' -q:v 3 \
  public/assets/images/backgrounds/og-jellyfish-6899910.jpg
