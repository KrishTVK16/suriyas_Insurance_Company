# Git and GitHub Setup Instructions

## Step 1: Install Git
If Git is not installed on your system:

1. **Download Git for Windows**: https://git-scm.com/download/win
2. Install it with default settings
3. Restart your terminal/PowerShell after installation

## Step 2: Initialize Git Repository

Open PowerShell in your project directory and run:

```powershell
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Insurance company website with Neon Dockyards theme"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `insurancecompany` (or any name you prefer)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 4: Connect Local Repository to GitHub

After creating the repository on GitHub, copy the repository URL and run:

```powershell
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/insurancecompany.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/insurancecompany.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Future Updates

To update your GitHub repository after making changes:

```powershell
# Check status
git status

# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Alternative: Using GitHub Desktop

If you prefer a GUI:
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your project folder
5. Click "Publish repository" to push to GitHub


