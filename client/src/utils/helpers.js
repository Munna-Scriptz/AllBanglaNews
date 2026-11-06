export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const getInitials = (name = '') => {
  const cleaned = name.replace(/^the\s+/i, '').trim()
  const words = cleaned.split(/\s+/).filter(Boolean)

  if (words.length === 0) return 'BD'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}

export const scrollToId = (id) => {
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
