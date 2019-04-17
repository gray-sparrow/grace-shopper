/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchRice} from './allRiceReducer'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

const initialState = {
    rice: {}
}

const store = mockStore(initialState);


describe('All Rice - Redux', () => {

    const rice = {
        name: 'Jasmine Rice',
        price: 2,
        type: 'White Jasmine Rice',
        img: '/jasminerice.jpg',
        description: 'White jasmine rice is white, has a jasmine flower aroma and, when cooked, a slightly sticky texture. The aroma is caused by the evaporation of 2-Acetyl-1-pyrroline.'
      }

    let mock;
    beforeEach(() => {
      mock = new MockAdapter(axios)
    })

    afterEach(() => {
      mock.reset();
    })

    describe('setting all rice', () => {

      describe('`fetchRice` thunk creator', () => {
        // defined in ../client/store/allRiceReducer.js

        it('returns a thunk to fetch all rice from the backend and dispatch a SET_RICE action', async () => {
          mock.onGet('/api/allproducts').replyOnce(200, rice);
          await store.dispatch(fetchRice())
          const actions = store.getActions();
          expect(actions[0].type).to.equal('SET_RICE');
          expect(actions[0].rice).to.deep.equal(rice);
        })
      })

    })

  })