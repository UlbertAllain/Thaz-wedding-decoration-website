import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { regions } from "../src/modules/portfolio/data/regions";
import { projects } from "../src/modules/portfolio/data/projects";
import { getProject, getProjectsByRegion, getRegion } from "../src/modules/portfolio/lib/portfolio";

describe("static portfolio integrity", () => {
  it("uses unique, safe city slugs", () => {
    const slugs = regions.map((region) => region.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBe(true);
  });

  it("uses unique project slugs and never invents unknown city relationships", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBe(true);
    expect(projects.every((project) => project.regionSlug === null || Boolean(getRegion(project.regionSlug)))).toBe(true);
  });

  it("keeps all image references local and available", () => {
    for (const project of projects) {
      for (const src of [project.coverImage, ...project.images]) {
        expect(src.startsWith("/images/")).toBe(true);
        expect(existsSync(join(process.cwd(), "public", src.slice(1)))).toBe(true);
      }
    }
  });

  it("filters only projects with a verified region", () => {
    for (const region of regions) {
      expect(getProjectsByRegion(region.slug).every((project) => project.regionSlug === region.slug)).toBe(true);
    }
  });

  it("returns undefined for unknown routes", () => {
    expect(getProject("does-not-exist")).toBeUndefined();
    expect(getRegion("unknown-city")).toBeUndefined();
  });
});
