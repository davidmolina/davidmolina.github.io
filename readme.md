# https://davidcmolina.com

This is the repository for my personal site https://davidcmolina.com. I’m using Jekyll with GitHub Pages for easy building and storing. I used to blog with WordPress and  Posterous, and I've posted once on Medium, but this is where I put all my stuff.

# A quick note

I'm a self-taught developer, and learn by doing. Literally. If you see something here that doesn't make sense, open an issue on GitHub.

# A special thanks
A special thanks to Chris Hough ([@chrishough](https://twitter.com/chrishough)), Fernando Paredes ([@nanoxd](https://twitter.com/nanoxd)), Nell Shamrell ([@nellshamrell](https://twitter.com/nellshamrell)), Jared Koumentis ([@shepbook](https://twitter.com/ShepBook)) for their patience, hacking w/ me and showing me the ropes, encouragement, and [hack.hands](https://www.crunchbase.com/organization/hackhands#section-overview) mentor extraordinaire, Allen Wyma for his software mentorship. Never forgetting where I come from, I'm paying it forward at [Operation Code](https://operationcode.org) helping service members, veterans and military families get coding.

## Email subscribe (SendGrid + external endpoint)

This repo includes:
- A top navigation `Subscribe` RSS link
- A footer email subscribe form
- A serverless endpoint template at `netlify/functions/subscribe.js` you can adapt to your platform

### Required environment variables

Configure these in your serverless provider secret manager:
- `SENDGRID_API_KEY` (full API key, never commit to git)
- `SENDGRID_LIST_ID` (Marketing list ID to place subscribers into)

### Secure setup checklist

1. In SendGrid, create a dedicated API key with the minimum scopes needed for Marketing Contacts.
2. In SendGrid, create or select the target marketing list and copy its list ID.
3. Deploy your endpoint on a platform that supports server-side code (for example: Cloudflare Workers, Vercel Functions, AWS Lambda/API Gateway, Render, Fly.io).
4. Set `SENDGRID_API_KEY` and `SENDGRID_LIST_ID` as environment variables in that platform.
5. Set `_config.yml` `subscribe_endpoint` to your deployed endpoint URL.
6. If `subscribe_endpoint` is empty, only RSS subscribe is shown.

### Local test

Run Jekyll as usual for the static site, and test the subscribe form against your deployed endpoint URL.
GitHub Pages only serves static files and does not execute server functions.

## License

Content: [Creative Commons, BYd-NC-SA](http://creativecommons.org/licenses/by-nc-sa/3.0/)

Code: [MIT](http://opensource.org/licenses/mit-license.php)
