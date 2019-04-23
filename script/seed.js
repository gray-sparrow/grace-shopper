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
      price: 35,
      type: 'Northern Wild Rice',
      origin: 'United States',
      img: '/pictures/wildrice.jpg',
      description: 'Wild rice is actually a grass! Commonly grown in wetlands in and around lakes, rivers, and bays, this woodsy enigma has origins in the upper Great Lakes region of the United States. When cooked, the skin splits open and the grain curls up to reveal a white interior, resulting in a unique texture we can’t enough of. Wild rice boasts a toasty flavor akin to black tea. Try making a vegetable pilaf or mixing with nuts and dried fruits for an epic side dish.'
    }),
    Rice.create({
      name: 'White Jasmine Rice',
      price: 15,
      type: 'Long-Grain White Jasmine Rice',
      origin: 'Thailand',
      img: '/pictures/jasminerice.jpg',
      description: 'White jasmine rice is white, has a jasmine flower aroma and, when cooked, a slightly sticky texture. The aroma is caused by the evaporation of 2-Acetyl-1-pyrroline.'
    }),
    Rice.create({
      name: 'Brown Jasmine Rice',
      price: 18,
      type: 'Long-Grain Brown Jasmine Rice',
      origin: 'Thailand',
      img: '/pictures/brownrice.jpg',
      description: 'Brown jasmine rice retains the light tan outer layer on the rice grain. It has greater health benefits than white jasmine rice because it still has the bran.'
    }),
    Rice.create({
      name: 'White Basmati Rice',
      price: 15,
      type: 'Long-grain White Basmati Rice',
      origin: 'India',
      img: '/pictures/basmatiwhite.jpg',
      description: 'Basmati is a variety of long, slender-grained aromatic rice. Cooked grains of Basmati rice are characteristically free flowing rather than sticky. Structurally, basmati rice has the longest grains of any rice, and it is known for lengthening during cooking.'
    }),
    Rice.create({
      name: 'Brown Basmati Rice',
      price: 18,
      type: 'Long-grain Brown Basmati Rice',
      origin: 'India',
      img: '/pictures/basmatibrown.jpg',
      description: 'Basmati is a variety of long, slender-grained aromatic rice. Cooked grains of Basmati rice are characteristically free flowing rather than sticky. Brown basmati also has a more nutty flavor and a firmer texture than white.'
    }),
    Rice.create({
      name: 'Black Rice',
      price: 20,
      type: 'Philippines Black Rice',
      origin: 'Philippines',
      img: '/pictures/blackrice.jpg',
      description: 'Black rice, also known as “forbidden rice” or “emperor’s rice,” was an exclusive food fed only to emperors in China. It owes its color to its high level of anthocyanin, the same antioxidant found in eggplant, blueberries, and purple corn. Rich in nutrients, this gorgeous and flavorful medium-grain rice is frequently used in Asian cuisine. You can also blend it with brown rice to make a sweet coconut rice pudding.'
    }),
    Rice.create({
      name: 'Arborio Rice',
      price: 20,
      type: 'Italian Short-grain Rice',
      origin: 'United States',
      img: '/pictures/arborio.jpg',
      description: 'An Italian short grain, Arborio rice is large, bold, and marked with a unique white dot in the center. It is often used for risotto since it can absorb liquid and flavor over slow cooking. The result? Unmatched creamy texture with a chewy core. Since it holds its shape so well, it is also suited to making arancini, or fried rice balls. Likewise, we like the way it plumps up and naturally thickens minestrone.'
    }),
    Rice.create({
      name: 'Kerala Matta Rice',
      price: 35,
      type: 'Kerala Matta Rice',
      origin: 'India',
      img: '/pictures/keralamatta.jpg',
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
