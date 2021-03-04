import React from 'react'

export function getParagraph (filePath) {
  return fetch(require(`${filePath}`).default)
    .then(text => text.text()
      .then(t => t.split('\n').map(str => <p key={str}>{str}</p>)))
}

export function setTitle (page) {
  document.title = `${page} - Andrew Case`
}

export const mobileViewWidth = 620

export const HeaderBarSize = 64
