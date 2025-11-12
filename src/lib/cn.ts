/**
 * Conditionally concatenates class names for Tailwind-driven components.
 * @param values Potential class name fragments.
 * @returns A single space-delimited class string.
 */
export const cn = (
  ...values: Array<string | undefined | false | null>
): string => values.filter(Boolean).join(' ');
