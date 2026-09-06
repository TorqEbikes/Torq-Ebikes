# TorqEbikes Shop — Updated

Open this folder in Visual Studio Code and launch `index.html` with Live Server.

## Product PNGs
Put your product images inside `images/` using these exact filenames:
- surron-light.png (the code displays this as **Led Bar**)
- cnc-throttle.png
- odi-grips.png
- front-plate.png
- foot-pegs.png (the code displays this as **CNC Foot Pegs**)
- seat.png
- eggrider-display.png
- cnc-mtb-stem.png
- 250w-sticker.png
- hero-bike.png
- build.png

The TikTok profile logo is already included as `images/torq-logo.png`.

## New features
- Product cards are clickable and open a product-detail modal.
- Product descriptions are short and product-specific.
- Variant/color buttons can be selected per product.
- `SOLD OUT` can be enabled per product with `soldOut:true` in `script.js`; the card and product modal both change to SOLD OUT.
- Product modal says **Shipping calculated at checkout.**
- Horizontal customer review marquee scrolls from right to left.
- EU-wide shipping messaging is included.
- Account icon opens a simple local account form. It stores name/email only in browser localStorage; it is not a real server account system.
- Cart supports variants and quantity changes.

## WhatsApp / Email
In `script.js`, replace `const number="491234567890"` with your WhatsApp number including country code, without + or spaces.
Replace `orders@torqebikes.com` with your real email address.

## Mark a product sold out
Example:
`soldOut:true`

## Important before selling
This is a free static storefront. The cart can create an order request through WhatsApp/email, but it does not process card payments or create real server-side customer accounts. Before launch, add your real payment provider, legal notice/imprint, privacy policy, terms, shipping/returns policy and real contact details.
