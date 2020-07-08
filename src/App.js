import React, {PureComponent} from 'react';
import './index.css';

class App extends PureComponent {
  state = {
    modules: []
  }

  componentDidMount() {
    document.addEventListener('moduleLoaded', (event) => {
      const modules = [...this.state.modules];
      modules.push(event.detail);
      this.setState({ modules });
    });
  }

  render() {
    return(
      <div className='main'>
        {this.state.modules.map(module => React.createElement(module))}
      </div>
    )
  }
}

export default App