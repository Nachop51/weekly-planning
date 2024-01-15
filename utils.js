import { DEFAULT_CONFIG } from './constants'

export function initializePlanning () {
  try {
    const planning = window.localStorage.getItem('planning')
    if (planning) {
      return JSON.parse(planning)
    }
    return DEFAULT_CONFIG
  } catch (e) {
    return DEFAULT_CONFIG
  }
}

export function createStar (w, h, c) {
  const icon = document.createElement('i')

  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 24 24"><path fill="${c}" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.437t-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15z"/></svg>`

  return icon
}
