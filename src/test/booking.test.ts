import { describe, expect, it } from "vitest";

import { bookingSchema, createWhatsAppBookingUrl } from "@/lib/booking";

describe("flooring booking messages", () => {
  it("requires a name, phone number, location, and project type", () => {
    const result = bookingSchema.safeParse({
      name: "",
      phone: "",
      email: "",
      location: "",
      projectType: "",
      area: "",
      startDate: "",
      message: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path[0])).toEqual(["name", "phone", "location", "projectType"]);
    }
  });

  it("opens a prefilled booking conversation with the supplied business WhatsApp number", () => {
    const details = {
      name: "Sam Ngwenya",
      phone: "082 123 4567",
      email: "",
      location: "Fourways",
      projectType: "Patio or outdoor space",
      area: "About 30 square metres",
      startDate: "",
      message: "Please call before visiting.",
    };

    const url = new URL(createWhatsAppBookingUrl(details));
    const message = url.searchParams.get("text");

    expect(url.origin + url.pathname).toBe("https://wa.me/27796099667");
    expect(message).toContain("Name: Sam Ngwenya");
    expect(message).toContain("Project location: Fourways");
    expect(message).toContain("Space: Patio or outdoor space");
    expect(message).toContain("Please call before visiting.");
  });
});