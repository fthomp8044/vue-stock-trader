import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
  //make sure you use component instead of components. Imports must be spelled correctly as well
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
]
