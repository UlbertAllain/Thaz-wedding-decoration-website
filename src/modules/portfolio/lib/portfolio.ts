import { projects } from "../data/projects";
import { regions } from "../data/regions";

export const getRegion = (slug: string) => regions.find((region) => region.slug === slug);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getProjectsByRegion = (slug: string) => projects.filter((project) => project.regionSlug === slug);
