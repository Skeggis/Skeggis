import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Pages from './Components/Pages/Pages'

function App() {

  const [index, setIndex] = useState(0)

  function afterLoad(origin, destination, direction){
    setIndex(destination.index)
  }

  return (
    <ReactFullpage
    licenseKey = {process.env.REACT_APP_FULLPAGE_LICENSE}
    scrollingSpeed = {1000} 
    navigation={true}
    onLeave={afterLoad}

    render={(test) => {
      return (
        <ReactFullpage.Wrapper>
          <Pages
            fullpageApi={test.fullpageApi}
            state={test.state}
            index={index}
          />
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}


export default App
