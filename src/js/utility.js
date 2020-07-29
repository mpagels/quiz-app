export function get(selector, target = document) {
  return target.querySelector(selector)
}

export function getAll(selector, target = document) {
  return target.querySelectorAll(selector)
}

export function createElement({
  type = 'div',
  className = '',
  target = document.body,
  id = false,
}) {
  const el = document.createElement(type)
  el.className = className
  if (id) {
    el.setAttribute('data-id', id)
  }
  target.appendChild(el)
  return el
}
