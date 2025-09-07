#!/bin/bash

# Script om alle TBGS files naar Git repository te uploaden

echo "🚀 Uploading TBGS project to Git repository..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    git branch -M main
fi

# Add all files to git (excluding sensitive files)
echo "📦 Adding files to git..."
git add .

# Create commit
echo "💾 Creating commit..."
git commit -m "Complete TBGS website with Docker setup - $(date)"

# Instructions for user
echo ""
echo "🔗 Next steps:"
echo "1. Create a repository on GitHub/GitLab"
echo "2. Add remote origin: git remote add origin https://github.com/USERNAME/tbgs-website.git"
echo "3. Push to repository: git push -u origin main"
echo ""
echo "📋 Files ready to upload:"
git status --porcelain | wc -l | xargs echo "Total files:"

echo ""
echo "✅ Git commit created successfully!"
echo "🌐 After pushing to GitHub, update REPO_URL in docker-deploy.sh"