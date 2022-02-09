import './style/App.css';
import { Button } from 'antd';
import Router from './router'

function App() {
  return (
<div className="App">
    <Router/>
    <Button type="primary">Button</Button>
</div>
  );
}

export default App;
