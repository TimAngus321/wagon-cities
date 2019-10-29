import React from 'react';

import CityList from '../containers/city_list';
import City from '../containers/city';
import ActiveCity from '../containers/active_city';

const App = () => {
  render(
    <div className='app'>
      <CityList />
      <ActiveCity />
    </div>
    );
};

export default App;
