/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Rice = db.model('rice')

describe('Rice model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Validations', () => {
    it('requires `name`', async () => {
      const rice = Rice.build();

      try {
        await rice.validate()
        throw Error('validation was successful but should have failed without `name`');
      }
      catch (err) {
        expect(err.message).to.contain('name cannot be null');
      }
    })
  })
})
