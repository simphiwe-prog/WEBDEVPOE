# Pumla's Eatery

A static restaurant website for a fast-food business serving burgers, chips, milkshakes, ice cream, and cold drinks.

## Overview

This project is a simple front-end website built using HTML, CSS, and JavaScript. It includes pages for:

- Home
- About Us
- Menu
- Contact
- Enquiries
- Login

## Project Structure

- `index.html` – homepage
- `about-us.html` – about the business
- `menu.html` – menu and gallery page
- `contact.html` – contact information and message form
- `enquiries.html` – customer enquiry form
- `login.html` – login page placeholder
- `css_assets/myfirststyles.css` – styling
- `script.js` – interactive behavior
- `sitemap.xml` – sitemap for search engines
- `robots.txt` – crawler instructions
- `_images/` – site images

## How to Run Locally

You can view the site by opening `index.html` directly in a browser.

For a local web server, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## SEO Included

The site includes:

- page titles
- meta descriptions
- keyword meta tags
- canonical links
- Open Graph tags
- Twitter card tags
- sitemap
- robots.txt

## Important Before Publishing

Update the domain in the following files before going live:

- `sitemap.xml`
- all `rel="canonical"` links in the HTML pages

Example:

```text
https://www.pumlas-eatery.co.za
```

Replace any placeholder domain with your actual public website URL.

## Notes

This is a static website, so there is no backend for form submissions. The contact and enquiry forms are front-end only unless connected to a live form service or backend later.

## Future Improvements

- connect forms to email or database
- add online ordering
- add product pricing
- improve mobile navigation
- add schema markup for local business SEO

## License

This project is for educational and business website use.
