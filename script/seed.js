'use strict'

const db = require('../server/db')
const {User, Rice} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const rice = await Promise.all([
    Rice.create({
      name: 'wild rice',
      price: 1,
      type: 'Northern Wild Rice',
      img: '/wildrice.jpg',
      description: 'Northern wild rice (Zizania palustris) is an annual plant native to the Great Lakes region of North America, the aquatic areas of the Boreal Forest regions of Northern Ontario, Alberta, Saskatchewan and Manitoba in Canada and Minnesota, Wisconsin, Michigan and Idaho in the US.'
    }),
    Rice.create({
      name: 'jasmine rice',
      price: 2,
      type: 'White Jasmine Rice',
      img: '/jasminerice.jpg',
      description: 'White jasmine rice is white, has a jasmine flower aroma and, when cooked, a slightly sticky texture.[9]:8-13 The aroma is caused by the evaporation of 2-Acetyl-1-pyrroline.'
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
