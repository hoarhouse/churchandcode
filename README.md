# Church & Code - Deployment Instructions

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Upload Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**
1. Go to https://github.com/hoarhouse/churchandcode
2. Click "Add file" → "Upload files"
3. Drag and drop ALL files from this folder
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
cd /path/to/this/folder
git init
git add .
git commit -m "Initial commit - Church & Code launch"
git remote add origin https://github.com/hoarhouse/churchandcode.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source" select: **main** branch, **/ (root)** folder
4. Click Save
5. Your site will be live at: `https://hoarhouse.github.io/churchandcode/`

### Step 3: Connect Custom Domain (churchandcode.com)

**At Your Domain Registrar (where you bought churchandcode.com):**

Add these DNS records:

**A Records:**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A  
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**CNAME Record:**
```
Type: CNAME
Host: www
Value: hoarhouse.github.io
```

**Back in GitHub:**
1. Go to Settings → Pages
2. Under "Custom domain" enter: `churchandcode.com`
3. Check "Enforce HTTPS" (wait 24 hours if not available immediately)
4. Click Save

**DNS propagation takes 1-48 hours.** Your site will work at the GitHub URL immediately.

---

## 📁 Site Structure

```
churchandcode/
├── index.html                          # Homepage
├── framework.html                      # LLM citation magnet - evergreen content
├── news/
│   └── pope-leo-warns-algorithms.html  # Breaking news template
├── assets/
│   └── css/
│       └── style.css                   # Apple-inspired design system
├── CNAME                               # Custom domain config
├── sitemap.xml                         # SEO optimization
└── robots.txt                          # Crawler configuration
```

---

## ✍️ How to Add Breaking News (FAST)

### When Pope Leo Says Something About AI:

1. **Copy the template:**
   - Duplicate `news/pope-leo-warns-algorithms.html`
   - Rename to `news/your-headline-slug.html`

2. **Edit these sections ONLY:**
   ```html
   <title>Your New Headline | Church & Code</title>
   <meta name="description" content="Brief description">
   <h1 class="article-title">Your Headline</h1>
   <p class="article-meta">Pope Leo XIV • [Date] • 5 min read</p>
   ```

3. **Replace content sections:**
   - Keep the structure
   - Just swap the text
   - Add 3-5 sections max

4. **Update homepage** (`index.html`):
   - Replace the featured card with your new article
   - Link to your new file

5. **Upload to GitHub:**
   - Use web interface: Upload → Commit
   - **Your article is live in 30 seconds**

**Target: News to published in under 2 hours**

---

## 🎯 Traffic Optimization Features

### For LLM Citations:
✅ Semantic HTML structure
✅ Proper heading hierarchy (H1 → H2 → H3)
✅ Schema.org markup
✅ Comprehensive, cited content in framework.html
✅ Clean, crawl-friendly URLs

### For Social Sharing:
✅ Open Graph tags
✅ Twitter Card tags
✅ Shareable headlines
✅ Mobile-responsive design

### For SEO:
✅ Fast loading (static HTML)
✅ Mobile-first responsive
✅ Sitemap.xml
✅ Robots.txt
✅ Semantic markup

---

## 📊 What to Track

### Analytics Setup (Add to site):
1. Google Analytics 4
2. Social referral tracking
3. LLM referral detection (check referrers for "ChatGPT", "Claude", "Perplexity")

### Key Metrics:
- **Organic search traffic** for "Pope Leo XIV AI"
- **LLM citations** (check tools like Claude, ChatGPT, Perplexity)
- **Social shares** on Twitter/X, LinkedIn
- **Time on page** (engagement quality)
- **Pages per session** (content stickiness)

---

## 🔄 Content Strategy

### Week 1: Foundation
- ✅ Homepage live
- ✅ Framework page (evergreen)
- ✅ 1 breaking news article
- 🎯 Goal: Get indexed by Google

### Week 2-4: Velocity
- 📰 2-3 breaking news pieces per week
- 🎨 Create 10-15 social memes per week
- 📱 Daily social posts linking back
- 🎯 Goal: First LLM citation + 1K visitors

---

## 🎨 Design System

**Fonts:** SF Pro (Apple system fonts)
**Colors:**
- Text: #1d1d1f
- Secondary: #86868b
- Primary: #0071e3
- Background: #fbfbfd

**Philosophy:** Clean, minimal, fast-loading, Apple-inspired

---

## 🚨 Common Issues

**Site not loading after DNS change?**
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Try incognito mode

**HTTPS not available?**
- GitHub needs to provision certificate
- Takes 24 hours after domain verification
- Don't force HTTPS until certificate is ready

**Images not loading?**
- Use absolute paths: `/assets/images/file.jpg`
- Or relative from root: `../assets/images/file.jpg`

---

## 🎓 Next Steps After Launch

1. **Set up Google Search Console**
2. **Submit sitemap**
3. **Create social accounts** (@churchandcode)
4. **Prepare meme templates**
5. **Set up news monitoring** (Google Alerts for "Pope Leo XIV")

---

## 📞 Quick Reference

**Site URL (GitHub):** https://hoarhouse.github.io/churchandcode/
**Custom Domain:** https://churchandcode.com
**Repository:** https://github.com/hoarhouse/churchandcode

---

**Your site is optimized for:**
✅ Speed (static HTML loads in <1 second)
✅ LLM citations (structured, semantic content)
✅ Social sharing (Open Graph + Twitter Cards)
✅ Mobile (100% responsive)
✅ SEO (proper markup + sitemap)

**Time to first visitor: ~24 hours after DNS setup**
**Time to first LLM citation: 7-14 days with consistent content**

---

Ready to prove your traffic hypothesis. Good luck! 🚀