import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Pages from './Components/Pages/Pages'

export default function App() {

  const [index, setIndex] = useState(0)

  function afterLoad(origin, destination, direction){
    setIndex(destination.index)
  }

  return (
    <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} 
    navigation={true}
    onLeave={afterLoad}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Pages
            fullpageApi={fullpageApi}
            state={state}
            index={index}
          />
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}
