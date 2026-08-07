# Mission Admin — PDF export (Chrome)

Sale-ready **A4** premium interior PDF (cream paper edge-to-edge, web-matched print system). Uses the in-app **Save book as PDF** button (`book.html?id=sysadmin_en`).

## Steps

1. Open `book.html?id=sysadmin_en` in **Google Chrome** (local server or file origin that can load scripts).
2. Click **Save book as PDF**. A preview window opens and the print dialog appears.
3. In the print dialog:
   - Destination: **Save as PDF**
   - Paper size: **A4**
   - Margins: **Default** (CSS `@page` sets unified 14/14/16/14 mm — do not use None)
   - **Background graphics: ON** (full-page cream via fixed layer)
   - Headers and footers: **Off**
4. Save the file (e.g. `Mission-Admin.pdf`).

## What to spot-check

- Front cover art + title under the image **on one page** (no orphan blurb page)
- Legal notice page with footer near the bottom
- How to use (includes short book blurb) + Contents with Parts (chapter numbers once, not `1. 1.`)
- Part titles: Meet the Raspberry Pi → Linux → System Administrator → Networks → Your Game Server → What's Next?
- At least one part-opener page with art
- Chapter hero image larger than supporting figures
- Glossary & index near the end
- Back cover art

## Notes

- Do not rely on Chrome’s “Margins: None” for this build — Default matches the print CSS.
- KDP interior trim/bleed is a later pass (`.book-pdf--kdp` hook only).
- First export can be very large (full-resolution illustrations). For Gumroad, recompress the PDF afterward or use a dedicated image pass if needed.
