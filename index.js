const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')
const permalinks = require('@metalsmith/permalinks')
const assets = require('metalsmith-assets')
// const collections = require('metalsmith-collections')
// const cssPacker = require('metalsmith-css-packer')

Metalsmith(__dirname)
  .metadata({
    title: 'GeneralPelle - Modell- und Dioramabau',
    description:
      'Hallo, ich bin General Pelle. Ich baue Dioramen sowie Modelle in verschiedenen Massstäben und stelle sie auf YouTube aus. Vielen Dank fürs anschauen!',
    keywords: 'Modellbau,Diorama,Flugzeugmodellbau,Schiffsmodellbau,Sci-Fi Modellbau,1:48,1:35',
    currentYear: new Date().getFullYear(),
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(permalinks())
  .use(layouts())
  .use(
    assets({
      source: './assets',
      destination: './assets',
    }),
  )
  // .use(
  //   collections({
  //     projects: {
  //       sortBy: 'date',
  //       reverse: true,
  //     },
  //   }),
  // )
  //   .use(
  //     cssPacker({
  //       outputPath: 'assets/css/',
  //       csso: false,
  //     }),
  //   )
  .build((err) => {
    if (err) {
      throw err
    }
  })
