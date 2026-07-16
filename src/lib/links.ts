/**
 * Atribut standar untuk semua link eksternal (NFR-5):
 * buka di tab baru tanpa membocorkan opener/referrer.
 */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
