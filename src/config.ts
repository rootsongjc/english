const isProd = Boolean(import.meta.env.PROD)

export const site = {
  url: 'https://jimmysong.io/english/',
  title: 'English Cheatsheet：实用英语速查表'
} as const

export const etc = {
  advertisedSheetCount: 357
} as const

export const disqus = {
  enabled: false,
  host: 'rootsongjc.disqus.com'
} as const

export const googleAnalytics = {
  enabled: isProd,
  measurementId: 'UA-93485976-1'
} as const

export const github = {
  repositoryUrl: 'https://github.com/rootsongjc/english',
  branch: 'master'
} as const

export const urls = {
  newCheatsheetUrl: 'https://github.com/rootsongjc/english/issues/1'
} as const

export const carbon = {
  enabled: false,
  // src: 'https://cdn.carbonads.com/carbon.js?serve=CE7IK5QM&placement=devhintsio'
  src: 'https://pubsrv.devhints.io/carbon.js?serve=CE7IK5QM&placement=devhintsio'
} as const

export const categories = [
  'Communication',
  'Workplace',
  'Public Speaking',
  'Event Staff',
  'Digital Interaction',
  'Media & Creator',
  'Travel & Survival',
  'Writing',
  'Phrases',
  'Time & Number',
  'Technical',
  'Global English',
  'Others'
] as const

export const announcement = {
  id: '2023-12-14',
  title: `We're on Twitter ♥️`,
  body: [
    `Follow [@jimmysongio](https://x.com/jimmysongio) on X/Twitter for daily "today I learned" snippets.`,
  ].join('\n')
}

export function standardizeCategoryName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
