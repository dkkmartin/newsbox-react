export const saveToStorage = (name, content) => {
  const stringContent = JSON.stringify(content)
  localStorage.setItem(name, stringContent)
}

export const loadFromStorage = (name) => {
  if (!localStorage.getItem(name)) return
  const content = JSON.parse(localStorage.getItem(name))
  return content
}
