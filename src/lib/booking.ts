import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(7).max(30).regex(/^[+()\d\s-]+$/),
  email: z.union([z.literal(""), z.string().trim().email().max(254)]),
  location: z.string().trim().min(1).max(120),
  projectType: z.string().trim().min(1).max(80),
  area: z.string().trim().max(40),
  startDate: z.string().max(40),
  message: z.string().trim().max(1000),
});

export type BookingDetails = z.infer<typeof bookingSchema>;

export function createWhatsAppBookingUrl(details: BookingDetails) {
  const lines = [
    "Hi Micro Screed Flooring, I’d like to talk about a flooring project.",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    ...(details.email ? [`Email: ${details.email}`] : []),
    `Project location: ${details.location}`,
    `Space: ${details.projectType}`,
    ...(details.area ? [`Approximate area: ${details.area}`] : []),
    ...(details.startDate ? [`Preferred start: ${details.startDate}`] : []),
    ...(details.message ? ["", `A little more: ${details.message}`] : []),
  ];

  return `https://wa.me/27796099667?text=${encodeURIComponent(lines.join("\n"))}`;
}