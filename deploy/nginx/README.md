# nginx configuration (reference copy)

These two files are a **copy of what is running on the VPS**, kept here so the
web-server layer is reviewable and survives a server rebuild. Nothing in this
directory is deployed — `.github/workflows/deploy_client.yaml` only ships the
Next.js standalone build to `/var/www/mixfood/client`. Editing a file here does
not change production, and editing production does not change these files.

| File here | Lives on the server as |
| --- | --- |
| `mixfood-ingredients.com.conf` | `/etc/nginx/sites-available/mixfood-ingredients.com` |
| `mixfood-upstreams.conf` | `/etc/nginx/sites-available/mixfood` |

Both are symlinked into `/etc/nginx/sites-enabled/`. The names differ because the
second file predates the domain move: it declares the `mixfood_nextjs` (`:3000`)
and `mixfood_api` (`:3012`) upstreams that the first one proxies to, and it also
301s the retired `mixfood.in.ua` domain. Deleting it takes the live site down.

## What the config does

- `http://` and `www.` both 301 to `https://mixfood-ingredients.com` (apex, TLS).
- `/api/contact` → Next.js; every other `/api` path → the separate API on `:3012`.
- Everything else → Next.js on `:3000`.
- Three regex `location` blocks answer scanner traffic (`*.php`, dotfiles,
  `sftp.json` and friends) with a 404 before it reaches Next. Without them Next
  renders and caches a 404 per probed path under `.next/server/app/`, which cost
  1409 cached paths and ~108 MB between two deploys. `.well-known` is deliberately
  excluded from the dotfile rule.

## Applying a change

Certificates are issued and renewed with certbot's **nginx** authenticator
(`/etc/letsencrypt/renewal/*.conf`), so certbot edits these files itself — pull a
fresh copy down before editing, or you will revert its changes.

```bash
scp deploy/nginx/mixfood-ingredients.com.conf root@134.122.62.231:/tmp/new.conf
```

Then, on the server, install it behind a syntax check that rolls back on failure:

```bash
C=/etc/nginx/sites-available/mixfood-ingredients.com; cp -a "$C" "$C.bak-$(date +%F-%H%M%S)"; cp /tmp/new.conf "$C" && if nginx -t; then systemctl reload nginx; else cp "$C".bak-* "$C"; fi
```

After any change, verify that `/uk/`, `/en/`, `/sitemap.xml`, `/robots.txt` and
`/favicon.ico` still return 200 and that `/.env` returns a 404 carrying no
`x-nextjs-*` header — that header is how you tell whether nginx or Next answered.
