export const ul = (childTag) => {
  return `
  <ul>${childTag}</ul>
  `;
}

export const component = (tagName, textNode) => {
  return `
  <${tagName}>${textNode}</${tagName}>
  `;
}