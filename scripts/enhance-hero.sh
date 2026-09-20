#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Preserve the source's frames, timing, color and composition. This is an
# enhanced upscale of a compressed 1080p source, not native 4K footage.
source_video=public/assets/videos/feature-2.mp4
poster_temp=$(mktemp -d)
trap 'rm -f "$poster_temp/poster.jpg"; rmdir "$poster_temp"' EXIT
filter='hqdn3d=0.65:0.5:1.0:0.75,unsharp=5:5:0.45:3:3:0'
ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -vf "$filter,scale=3840:2160:flags=lanczos" -an \
  -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart \
  public/assets/videos/hero-astronaut-enhanced-2160.mp4
ffmpeg -hide_banner -loglevel error -y -i "$source_video" \
  -vf "$filter" -an -c:v libx264 -preset slow -crf 16 \
  -pix_fmt yuv420p -movflags +faststart \
  public/assets/videos/hero-astronaut-enhanced-1080.mp4
ffmpeg -hide_banner -loglevel error -y \
  -i public/assets/videos/hero-astronaut-enhanced-2160.mp4 \
  -frames:v 1 -update 1 -vf scale=1920:1080 -q:v 2 \
  "$poster_temp/poster.jpg"
cwebp -quiet -q 82 -sharp_yuv "$poster_temp/poster.jpg" \
  -o public/assets/videos/posters/hero-astronaut-enhanced.webp
ffmpeg -hide_banner -loglevel error -y \
  -i public/assets/videos/hero-astronaut-enhanced-2160.mp4 \
  -frames:v 1 -update 1 -vf 'scale=1200:675,crop=1200:630' -q:v 3 \
  public/assets/images/backgrounds/og-astronaut.jpg
