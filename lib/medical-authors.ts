export const DAALON_B_ECHOLS_SLUG = "daalon-b-echols";
export const OCTAVIA_WYCHE_SLUG = "octavia-wyche";

export function medicalAuthorProfilePath(slug: string): string {
  return `/editorial-team/${slug}/`;
}