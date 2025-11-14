# GitHub Setup & Git Workflow Instructions

This guide will walk you through setting up your `govSizeCharts` project on GitHub and pushing it live for public access.

## Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name:** `govSizeCharts`
   - **Description:** "Interactive Chart.js dashboard visualizing 50+ years of U.S. government growth across 15 metrics. Includes the Octopus Index - a libertarian super-metric tracking the concentration of federal power from 1975-2025."
   - **Visibility:** Select **Public** (so anyone can see and access your charts)
   - **Initialize this repository with:** Leave unchecked (we'll add files locally)
3. Click **Create repository**
4. **Copy the repository URL** - it should look like: `https://github.com/themanci/govSizeCharts.git`

## Step 2: Initialize Git in Your Local Project

Open PowerShell and navigate to your project folder:

```powershell
cd c:\Coding\govSizeCharts
```

Initialize a new git repository:

```powershell
git init
```

## Step 3: Configure Git (First Time Only)

Set your git identity (replace with your actual name and email):

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

To verify your settings:

```powershell
git config --global user.name
git config --global user.email
```

## Step 4: Add Your Remote Repository

Link your local repository to the GitHub remote:

```powershell
git remote add origin https://github.com/themanci/govSizeCharts.git
```

Verify the remote was added:

```powershell
git remote -v
```

You should see:
```
origin  https://github.com/themanci/govSizeCharts.git (fetch)
origin  https://github.com/themanci/govSizeCharts.git (push)
```

## Step 5: Stage Your Files

Stage all files for commit:

```powershell
git add .
```

Verify what's staged (should show all your project files in green):

```powershell
git status
```

## Step 6: Create Your Initial Commit

```powershell
git commit -m "Initial commit: Octopus Index charts with 15 government growth metrics (1975-2025)"
```

## Step 7: Push to GitHub

Push your code to GitHub (this creates the main branch):

```powershell
git branch -M main
git push -u origin main
```

You may be prompted to authenticate:
- If you're using HTTPS, GitHub will ask for a Personal Access Token (generate one at https://github.com/settings/tokens if needed)
- If you prefer SSH, set it up separately (see note below)

## Step 8: Enable GitHub Pages

Now that your code is on GitHub, you can publish it as a live website:

1. Go to your GitHub repository: https://github.com/themanci/govSizeCharts
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **Branch: main** and **/root** folder
6. Click **Save**

GitHub will process this (takes ~30 seconds - 2 minutes). Your site will be live at:
```
https://themanci.github.io/govSizeCharts/
```

## Step 9: Update Your Domain/README

Create a `README.md` file to document your project:

```powershell
# In your govSizeCharts directory, create a new file
New-Item -Path README.md -ItemType File
```

Add this content to `README.md`:

```markdown
# Octopus Index: Government Power Concentration (1975-2025)

An interactive Chart.js dashboard visualizing 50+ years of U.S. government growth across 15 metrics.

## Features

- **Octopus Index**: Weighted super-metric tracking federal power concentration
- **15 Government Metrics**: Spending, regulations, employment, transfers, lobbying, debt, and dependency
- **Interactive Charts**: Hover, zoom, and export chart data
- **Copy-to-Clipboard**: Share chart data directly to social media
- **Responsive Design**: Works on desktop, tablet, and mobile

## View Live

**https://themanci.github.io/govSizeCharts/**

## Metrics Included

1. Federal Outlays / GDP
2. Direct Transfers to Individuals / GDP
3. Pages in the Federal Register
4. Code of Federal Regulations (CFR) Pages
5. Restrictive Terms in CFR (RegData)
6. Federal Civilian Employment per 100k Population
7. Federal vs Private Wage Premium
8. Federal Assistance Programs
9. Federal Grants to State/Local / GDP
10. Federal Subsidies to Private Sector
11. Federal Criminal Statutes + Regulatory Crimes
12. Lobbying Expenditures (Real Dollars)
13. Public Debt / GDP
14. Major Rules (Costing >$100M)
15. Government Dependency Index

## Data Sources

All data sourced from official government repositories including:
- OMB Historical Tables (whitehouse.gov/omb/budget)
- Federal Reserve Economic Data - FRED (fred.stlouisfed.org)
- Federal Register Statistics (federalregister.gov)
- QuantGov RegData (quantgov.org)
- OpenSecrets (opensecrets.org)
- And more (see individual charts for specific sources)

## Technology

- Chart.js v4.4.1
- chartjs-plugin-datalabels v2.2.0
- HTML5 / CSS3 / Vanilla JavaScript
- GitHub Pages hosting

## License

Public Domain / Open Source
```

Then commit and push this:

```powershell
git add README.md
git commit -m "Add README documentation"
git push
```

## Ongoing Workflow: How to Update Your Charts

After you make changes locally, follow this workflow:

### 1. Check Your Changes

```powershell
git status
```

This shows which files have been modified (they'll appear in red).

### 2. Stage Changes

```powershell
git add .
```

Or stage specific files:

```powershell
git add styles.css
```

### 3. Commit with Descriptive Message

```powershell
git commit -m "Update copy button styling and improve mobile responsiveness"
```

### 4. Push to GitHub

```powershell
git push
```

GitHub Pages automatically updates within a few seconds!

## Useful Git Commands

**View commit history:**
```powershell
git log --oneline
```

**View differences in a file:**
```powershell
git diff filename.css
```

**Undo last commit (but keep changes):**
```powershell
git reset --soft HEAD~1
```

**Undo all changes in a file:**
```powershell
git checkout -- filename.js
```

**Create a new branch for experimental changes:**
```powershell
git checkout -b feature/experimental-charts
```

**Switch back to main:**
```powershell
git checkout main
```

## Troubleshooting

### "fatal: remote already exists"
If you see this when adding origin, use:
```powershell
git remote set-url origin https://github.com/themanci/govSizeCharts.git
```

### Authentication Issues
If GitHub asks for authentication repeatedly, set up a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` and `workflow`
4. Copy the token and use it when GitHub prompts for password

### Site Not Updating
After pushing, GitHub Pages needs ~30 seconds to rebuild. Hard refresh your browser (Ctrl+F5).

### Want to Use SSH Instead of HTTPS?
1. Generate SSH key (if you don't have one): https://docs.github.com/en/authentication/connecting-to-github-with-ssh
2. Add key to GitHub: https://github.com/settings/ssh/new
3. Change your remote URL:
```powershell
git remote set-url origin git@github.com:themanci/govSizeCharts.git
```

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Basics: https://git-scm.com/doc
- Troubleshooting GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages

---

**Your site will be live at: https://themanci.github.io/govSizeCharts/**

Share it on Twitter, LinkedIn, Reddit, or any social media platform. The copy-to-clipboard buttons make it easy for viewers to share individual charts!
