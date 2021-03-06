const state = {
  funds: 10000,
  stocks:[]
};

//Allows us to change our state
const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    //this will return true if the id im at in the current loop mathces the id of the stock I want to buy
    const record = state.stocks.find(element => element.id == stockId)
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;

  }
};


const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stockId,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  }
}

funds (state) {
  return state.funds;
}

export default {
  state,
  mutations,
  actions,
  getterss
}
