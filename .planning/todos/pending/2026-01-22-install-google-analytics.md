---
created: 2026-01-22T20:44
title: Install Google Analytics
area: general
files:
  - revision:1-11
  - src/app/layout.tsx
---

## Problem

Need to add Google Analytics tracking to the site for visitor analytics and traffic monitoring. The tracking ID is G-768XTFFCSW and requires adding the gtag.js script to the site's head.

## Solution

Add Google Analytics gtag script to the Next.js app:

1. Add the gtag.js script tag with ID G-768XTFFCSW
2. Initialize dataLayer and gtag function
3. Configure gtag with the tracking ID

Script to add:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-768XTFFCSW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-768XTFFCSW');
</script>
```

For Next.js, use next/script component or add to layout.tsx with Script component.
