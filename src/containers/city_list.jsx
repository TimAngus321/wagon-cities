import React, { Component} from 'react';

import City from '..components/city';

class CityList extends Component {
  render() {
    return (
      <div className='cities col-sm-7'>
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

flat
export default CityList;
