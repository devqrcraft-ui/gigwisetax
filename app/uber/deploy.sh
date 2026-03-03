#!/bin/bash
# GigWiseTax — ПОВНИЙ ДЕПЛОЙ з аналітикою
# Запускай в терміналі: bash deploy.sh

PROJECT="/c/Users/RUSLAN/Desktop/gigwisetax"
APP="$PROJECT/app"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "========================================"
echo " GigWiseTax Deploy Starting..."
echo "========================================"

echo ""
echo "[1/4] Installing Vercel Analytics packages..."
cd "$PROJECT"
npm install @vercel/analytics @vercel/speed-insights

echo ""
echo "[2/4] Creating new folders..."
mkdir -p "$APP/grubhub" "$APP/walmart-spark" "$APP/turo"
mkdir -p "$APP/privacy" "$APP/terms" "$APP/about"
mkdir -p "$APP/blog/amazon-flex-taxes-2026"
mkdir -p "$APP/blog/mileage-rate-2026"
mkdir -p "$APP/blog/grubhub-vs-doordash-taxes-2026"

echo ""
echo "[3/4] Copying all new files..."
cp "$SCRIPT_DIR/layout.tsx"                                             "$APP/layout.tsx"
cp "$SCRIPT_DIR/NavClient.tsx"                                          "$APP/NavClient.tsx"
cp "$SCRIPT_DIR/privacy/page.tsx"                                       "$APP/privacy/page.tsx"
cp "$SCRIPT_DIR/terms/page.tsx"                                         "$APP/terms/page.tsx"
cp "$SCRIPT_DIR/about/page.tsx"                                         "$APP/about/page.tsx"
cp "$SCRIPT_DIR/grubhub/page.tsx"                                       "$APP/grubhub/page.tsx"
cp "$SCRIPT_DIR/walmart-spark/page.tsx"                                 "$APP/walmart-spark/page.tsx"
cp "$SCRIPT_DIR/turo/page.tsx"                                          "$APP/turo/page.tsx"
cp "$SCRIPT_DIR/blog/page.tsx"                                          "$APP/blog/page.tsx"
cp "$SCRIPT_DIR/blog/amazon-flex-taxes-2026/page.tsx"                   "$APP/blog/amazon-flex-taxes-2026/page.tsx"
cp "$SCRIPT_DIR/blog/mileage-rate-2026/page.tsx"                        "$APP/blog/mileage-rate-2026/page.tsx"
cp "$SCRIPT_DIR/blog/grubhub-vs-doordash-taxes-2026/page.tsx"          "$APP/blog/grubhub-vs-doordash-taxes-2026/page.tsx"

echo "  done copying 12 files"

echo ""
echo "[4/4] Git commit and push..."
cd "$PROJECT"
git add .
git commit -m "feat: grubhub/walmart-spark/turo calculators, privacy/terms/about, 3 blog posts, vercel analytics"
git push

echo ""
echo "========================================"
echo " DONE! Vercel is deploying (~2 min)"
echo " https://vercel.com/ruslans-projects-fff37756/gigwisetax"
echo ""
echo " New pages going live:"
echo "   gigwisetax.com/grubhub"
echo "   gigwisetax.com/walmart-spark"
echo "   gigwisetax.com/turo"
echo "   gigwisetax.com/privacy"
echo "   gigwisetax.com/terms"
echo "   gigwisetax.com/about"
echo "   gigwisetax.com/blog/mileage-rate-2026"
echo "   gigwisetax.com/blog/amazon-flex-taxes-2026"
echo "========================================"
