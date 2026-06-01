# CI Business Solutions and Analytics — Website

A 5-page static website (Home, Products, Services, About, Contact). No build step —
just HTML, CSS, and JavaScript. Hosted on **Netlify** with a working email-delivered
contact form.

---

## 1. Buy a domain

You don't have one yet. Recommended options (check availability — I can't verify it):

| Candidate | Notes |
|---|---|
| `cibsa.com.au` + `cibsa.com` | Short, brandable, matches the brand initials. **Recommended.** |
| `cibusinesssolutions.com.au` | Descriptive, longer. |
| `ci-analytics.com.au` | Emphasises the analytics angle. |

- **`.com.au`** signals an Australian business and builds trust with local clients, but
  requires an **ABN/ACN** (Australian eligibility rule). Since you'll have an ABN, secure it.
- Buy **both** the `.com.au` and `.com` if budget allows, and point them at the same site.
- **Where to buy:** [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (at-cost, no markup, but `.com.au` support is limited) or an Australian registrar like
  **VentraIP**, **Crazy Domains**, or **Synergy Wholesale** for `.com.au`.

---

## 2. Publish on Netlify (one-time setup)

### Step A — Put the code on GitHub
1. Create a free account at [github.com](https://github.com).
2. Click **New repository** → name it `ci-website` → keep it **Private** → **Create**.
3. GitHub shows a "push an existing repository" snippet. Copy the two `git remote add` /
   `git push` lines and run them in this folder — **or just ask me and I'll push it for you.**

### Step B — Connect Netlify to the repo
1. Create a free account at [netlify.com](https://netlify.com) (sign in with GitHub).
2. **Add new site → Import an existing project → GitHub →** pick `ci-website`.
3. Build settings: **Build command:** (leave blank) · **Publish directory:** `.`
   (the included `netlify.toml` already sets this).
4. **Deploy.** Your site goes live in ~30 seconds at a `something.netlify.app` URL.

### Step C — Connect your domain
1. In Netlify: **Domain settings → Add a domain →** enter your purchased domain.
2. Netlify shows the DNS records to set. Easiest path: set your registrar's **nameservers**
   to Netlify's (Netlify DNS), or add the `A` / `CNAME` records they give you.
3. Netlify provisions a free **HTTPS certificate** automatically. Done.

---

## 3. Make the contact form email you

The form is already wired for **Netlify Forms** (`data-netlify="true"` on the form in
`contact.html`). After your first deploy:

1. In Netlify: **Forms** — you'll see a form named **`contact`** with submissions listed.
2. **Forms → Form notifications → Add notification → Email notification.**
3. Enter the email address that should receive enquiries. Save.

From then on, every enquiry is **stored in Netlify and emailed to you** — no server required.
(Optional: connect a Slack notification or a Zapier/webhook the same way.)

---

## 4. Streamlined updates — "just ask Claude"

This is the workflow you chose. Once Steps A–C above are done **once**, updating the live
site is effortless:

1. You tell me the change in plain English — e.g.
   *"Update the phone number to 03 1234 5678"*, *"Add a new service card for payroll integration"*,
   *"Replace the ROI placeholder with $180,000"*.
2. I edit the files and **commit + push** to GitHub.
3. Netlify **auto-deploys within ~30 seconds**. The live site updates itself.

No FTP, no drag-and-drop, no manual steps on your end. You can also preview changes locally
before they go live (the repo includes a tiny dev server under `.claude/`).

> **Tip:** keep a running list of the `[ placeholder ]` items still to fill (search the files
> for `class="ph"`). Send them to me in batches and I'll clear them out.

---

## 5. Project structure

```
index.html        Home
products.html     Products (SmartRDpro, SmartODpro, SmartWPro) + pricing
services.html     Services / implementation
about.html        About + values + team + credentials
contact.html      Contact form (Netlify-enabled)
styles.css        All styling (design system + components)
script.js         Nav, scroll reveal, form submission
netlify.toml      Deploy config (publish dir + security headers)
.gitignore        Files excluded from the repo
```

---

## Still to do before going fully live
- [ ] Replace all `[ … ]` placeholder tokens with verified content
- [ ] Confirm pricing (or switch to "Contact us for pricing")
- [ ] Add real Privacy Policy, Terms, Security, Accessibility pages
- [ ] Verify ABN, address, email, phone
- [ ] Confirm which products are live vs. "Coming soon"
- [ ] Replace the illustrative ROI figure with a defensible one
