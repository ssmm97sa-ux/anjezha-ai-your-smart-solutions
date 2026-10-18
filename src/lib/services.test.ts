import { describe, it, expect } from "vitest";
import { allServices, creatorServices, getService, getPaymentLink } from "./services";

describe("existing service pricing and Ziina links", () => {
  it.each([
    ["cv", 19, "9urLJeWDX"], ["email", 19, "9urLJeWDX"],
    ["summary", 19, "9urLJeWDX"], ["rewrite", 15, "s9POcL8XS"],
    ["content", 29, "nLPhhC8Fv"], ["translation", 19, "9urLJeWDX"],
  ])("preserves %s price and exact checkout", (id, price, code) => {
    const service = getService(String(id));
    expect(service?.price).toBe(price);
    expect(getPaymentLink(service)).toBe(`https://pay.ziina.com/anjezha.ai/${code}?source=app`);
  });
});

describe("creator service rules", () => {
  it.each([
    ["youtube-publish", 19], ["video-ideas", 29], ["creator-pack", 49],
    ["content-plan-30", 79], ["media-kit", 59], ["customer-replies", 29],
  ])("prices %s at exactly %i AED", (id, price) => {
    expect(getService(String(id))?.price).toBe(price);
  });
  it.each(["creator-pack", "content-plan-30", "media-kit"])("does not route unconfigured %s to another price tier", id => {
    expect(getPaymentLink(getService(id))).toBe("");
  });
  it.each([
    ["youtube-publish", "9urLJeWDX"], ["video-ideas", "nLPhhC8Fv"], ["customer-replies", "nLPhhC8Fv"],
  ])("uses an existing exact-tier URL for %s", (id, code) => {
    expect(getPaymentLink(getService(id))).toBe(`https://pay.ziina.com/anjezha.ai/${code}?source=app`);
  });
  it("has six new services and unique order IDs", () => {
    expect(creatorServices).toHaveLength(6);
    expect(new Set(allServices.map(service => service.id)).size).toBe(12);
  });
  it("keeps the previous CV price at 49", () => {
    expect(getService("cv")?.previousPrice).toBe(49);
  });
});