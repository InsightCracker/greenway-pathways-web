// Tiny classnames merge helper — no dependency needed for this project's scale.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
