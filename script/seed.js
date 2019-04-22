'use strict'

const db = require('../server/db')
const {User, Rice} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({ email: 'murphy@email.com', password: '123' }),
    User.create({ email: 'btan7645@gmail.com', password: '123' }),
    User.create({ email: 'jenny@gmail.com', password: '123' }),
  ])

  const rice = await Promise.all([
    Rice.create({
      name: 'Wild Rice',
      price: 1,
      type: 'Northern Wild Rice',
      origin: 'North America, India, China',
      img: '/wildrice.jpg',
      description: 'Northern wild rice (Zizania palustris) is an annual plant native to the Great Lakes region of North America, the aquatic areas of the Boreal Forest regions of Northern Ontario, Alberta, Saskatchewan and Manitoba in Canada and Minnesota, Wisconsin, Michigan and Idaho in the US.'
    }),
    Rice.create({
      name: 'Jasmine Rice',
      price: 2,
      type: 'White Jasmine Rice',
      origin: 'Thailand',
      img: '/jasminerice.jpg',
      description: 'White jasmine rice is white, has a jasmine flower aroma and, when cooked, a slightly sticky texture. The aroma is caused by the evaporation of 2-Acetyl-1-pyrroline.'
    }),
    Rice.create({
      name: 'Jasmine Rice',
      price: 2,
      type: 'Long-Grain Brown Jasmine Rice',
      origin: 'Thailand',
      img: '/brownrice.jpg',
      description: 'Brown jasmine rice retains the light tan outer layer on the rice grain. It has greater health benefits than white jasmine rice because it still has the bran.'
    }),
    Rice.create({
      name: 'Jasmine Rice',
      price: 2,
      type: 'Short-grain Brown Jasmine Rice',
      origin: 'Thailand',
      img: '/shortgrainbrownrice.jpg',
      description: 'Brown jasmine rice retains the light tan outer layer on the rice grain. It has greater health benefits than white jasmine rice because it still has the bran.'
    }),
    Rice.create({
      name: 'Black Rice',
      price: 2,
      type: 'Philippines Black Rice',
      origin: 'Philippines',
      img: '/blackrice.jpg',
      description: 'Black rice, also known as “forbidden rice” or “emperor’s rice,” was an exclusive food fed only to emperors in China. It owes its color to its high level of anthocyanin, the same antioxidant found in eggplant, blueberries, and purple corn. Rich in nutrients, this gorgeous and flavorful medium-grain rice is frequently used in Asian cuisine. You can also blend it with brown rice to make a sweet coconut rice pudding.'
    }),
    Rice.create({
      name: 'Kerala Matta Rice',
      price: 2,
      type: 'Kerala Matta Rice',
      origin: 'India',
      img: '/keralamatta.jpg',
      description: 'Grown in India, matta or rosematta rice is a medium grain with a reddish color. Its bran layer is full of natural nutrients. Known for its robust earthy flavor, this variety calls for meaty accompaniments like lamb, beef, or game. It is well suited to slow-cooking stews and rich curries.'
    })
  ])
  console.log(`seeded ${rice.length} products`)
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
