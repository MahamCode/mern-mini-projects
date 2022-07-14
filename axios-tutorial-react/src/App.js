import Title from './components/Title';
import Setup from './examples/2-headers';
import './axios/global'
import GlobalInstance from './examples/4-global-instance';
import CustomInstance from './examples/5-custom-instance';
import Interceptors from './examples/6-interceptors';

function App() {
  return (
    <main>
      <Title />
      {/* <Setup /> */}
      {/* <GlobalInstance /> */}
      {/* <CustomInstance /> */}
      <Interceptors />
    </main>
  );
}

export default App;
