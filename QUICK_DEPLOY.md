# ⚡ Quick Deploy Guide - 5 Minutes to Live

## ONE-TIME SETUP (First time only)

```powershell
cd c:\Coding\govSizeCharts

# Step 1: Initialize git
git init
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Step 2: Add GitHub remote
git remote add origin https://github.com/themanci/govSizeCharts.git

# Step 3: Stage all files
git add .

# Step 4: Make initial commit
git commit -m "Initial commit: Octopus Index with 15 government growth metrics"

# Step 5: Push to GitHub
git branch -M main
git push -u origin main
```

## ENABLE GITHUB PAGES (In Browser - 1 minute)

1. Go to: https://github.com/themanci/govSizeCharts
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**: Select "Deploy from a branch"
5. Select **main** branch, **/root** folder
6. Click **Save**

✨ **Your site is now LIVE at:**
```
https://themanci.github.io/govSizeCharts/
```

---

## UPDATING YOUR CHARTS (After Each Change)

```powershell
cd c:\Coding\govSizeCharts

# Check what changed
git status

# Stage changes
git add .

# Commit with description
git commit -m "Your change description"

# Push to GitHub (automatically updates live site)
git push
```

**Live updates in ~30 seconds!**

---

## KEY FILES

| File | Purpose |
|------|---------|
| `index.html` | Main page - 16 chart sections |
| `styles.css` | Professional dark theme styling |
| `charts.js` | Chart configs & copyToClipboard() |
| `chartData.txt` | Source data reference |

---

## FEATURES WORKING

✅ 16 interactive charts (Octopus Index + 15 metrics)
✅ Copy-to-clipboard buttons on all sections
✅ Professional red styling (#e74c3c)
✅ Success feedback ("✓ Copied!")
✅ Detailed source citations with URLs
✅ Responsive mobile design
✅ Dark professional theme
✅ Smooth navigation
✅ GitHub Pages hosting

---

## SHARE YOUR CHARTS

**Direct URL:** https://themanci.github.io/govSizeCharts/

**From Live Site:**
- Click any copy button (📋) 
- Button shows "✓ Copied!"
- Paste into Twitter, Reddit, LinkedIn, etc.
- Each chart section includes title + description + analysis + sources

---

## TROUBLESHOOTING

**"fatal: remote already exists"**
```powershell
git remote set-url origin https://github.com/themanci/govSizeCharts.git
```

**Site not updating?**
- Hard refresh browser: `Ctrl+F5`
- Wait 30-60 seconds after push
- Check GitHub Actions tab for deploy status

**Can't authenticate?**
- Use Personal Access Token from: https://github.com/settings/tokens
- Generate with `repo` and `workflow` scopes
- Use token as password when prompted

---

## AFTER YOU DEPLOY

1. **Test live site:** https://themanci.github.io/govSizeCharts/
2. **Click copy buttons** - verify they work
3. **Share URL** on Twitter/Reddit/LinkedIn/email
4. **Celebrate!** You've published a data visualization dashboard

---

**That's it! Your government growth charts are now live and shareable. 🎉**

For detailed help, see `GIT_SETUP_INSTRUCTIONS.md`
