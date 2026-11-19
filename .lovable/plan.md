# Micro Screed Flooring website

## What will be built
- A five-page, mobile-friendly website for Micro Screed Flooring: Home, Services, Projects, About, and Bookings.
- Use the uploaded logo first, the second photo as the home-page lead image, and flooring photos in the Projects gallery.
- Use a distinctive red, charcoal, and white visual identity with a considered display/body font pairing and natural, business-specific writing.
- Add a booking form that validates contact details and opens WhatsApp with the submitted project details prefilled.
- Store public website imagery in a public Lovable Cloud storage bucket; do not persist visitors' booking details.
- Add unique page metadata and explicitly initialize the Vite `plugins` array as requested.

## Technical details
- Keep the five pages in TanStack Start file-based routes with a shared navigation shell.
- Set a bucket-scoped public read policy and upload the supplied project images to the public bucket.
- Use the contact details shown in the supplied business screenshot for WhatsApp booking; do not expose booking submissions in public storage.