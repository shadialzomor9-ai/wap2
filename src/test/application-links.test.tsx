import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Index from "../pages/Index";

describe("Application destinations", () => {
  it("uses the requested destination for all three apply links", () => {
    const page = document.createElement("div");
    page.innerHTML = renderToStaticMarkup(<Index />);
    const links = Array.from(page.querySelectorAll("a")).filter(
      (link) => link.textContent?.trim() === "قدّم الآن",
    );
    expect(links).toHaveLength(3);
    for (const link of links) {
      expect(link.href).toBe("https://ee.kobotoolbox.org/x/BDS6feIf");
    }
  });
});