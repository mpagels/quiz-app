import { createElement } from '../utility'

export function Tag({ tag, target }) {
  const el = createElement({ type: 'li', className: 'tags', target })
  el.textContent = tag
  return { el }
}
