#!/usr/bin/env node

'use strict'

const boxen = require('boxen')
const { bold, blueBright: b } = require('chalk').default
const fs = require('fs')
const path = require('path')

///////////////////////////////////////////////////////////////////////////////

const title = `${bold(`     Edy Tama Kusumajaya`)} · edytk`
const subtitle = `   Yogyakarta, ID · ${b(`tama@gaptek.net`)}`
const header = `${title}\n${subtitle}`

///////////////////////////////////////////////////////////////////////////////

const list = {
  [bold(`    Work`)]: `Life-Long Learner :)`,
  [bold(`  GitHub`)]: b(`https://github.com/edytk`),
  [bold(`LinkedIn`)]: b(`https://linkedin.com/in/edytk`),
  [bold(` Twitter`)]: b(`https://twitter.com/_gaptek`),
  [bold(` Website`)]: b(`https://dev.gaptek.net`),
}

const renderedList = Object.keys(list)
  .map(l => `${l}: ${list[l]}`)
  .join('\n')

///////////////////////////////////////////////////////////////////////////////

const footer = `${bold(`    Card`)}: npx edytk`

///////////////////////////////////////////////////////////////////////////////

const cardContent = `${header}\n\n${renderedList}\n\n${footer}`

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  boxen(cardContent, {
    borderColor: 'blue',
    margin: 1,
    padding: {
      top: 1,
      bottom: 1,
      left: 6,
      right: 6,
    },
  })
)

// huge thanks to https://github.com/bnb/bitandbang
