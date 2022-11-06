/*
export const isBrowser = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
)
*/
export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
