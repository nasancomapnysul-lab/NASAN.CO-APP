nasan Company app — source code

src/
  nasan-screens.jsx   All screens: welcome animation, Home, LCD, Brands, Search,
                      Orders, You (sign in / sign up / profile), Cart, Product,
                      Catalog, About, Contact, slide bar, language + filter sheets.
                      Also holds the translations (English / Kurdish Sorani / Arabic).
  nasan-app.jsx       Navigation between screens, cart state, back history.
  nasan-store.js      Data: products, LCDs, orders, accounts, session, language.
  nasan-admin.jsx     Admin panel (edit products, set order status).
  ios-frame.jsx       iPhone frame used for the preview only.
  android-frame.jsx   Android frame used for the preview only.

assets/
  nasan-logo.png      The logo used in the app and welcome animation.

Language: React (JSX). No build tools needed for the prototype.

Before publishing on the App Store / Google Play a developer must:
  - move nasan-store.js data to a real server/database
  - connect real email + SMS verification codes
  - add a Google sign-in client ID (GOOGLE_CLIENT_ID in nasan-screens.jsx)
  - wrap the screens as a native app (React Native, or Capacitor around the web build)
