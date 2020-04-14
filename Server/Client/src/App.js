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
      console.log(test)
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
// const Fullpage = () => (
//   <ReactFullpage
//     fullpage options
//     licenseKey = {'YOUR_KEY_HERE'}
//     scrollingSpeed = {1000} /* Options here */

//     render={(test) => {
//       console.log(test)
//       return (
//         <ReactFullpage.Wrapper>
//           <div className="section">
//             <p>Section 1 (welcome to fullpage.js)</p>
//             <button onClick={() => test.fullpageApi.moveSectionDown()}>
//               Click me to move down
//             </button>
//           </div>
//           <div className="section">
//             <p>Section 2</p>
//           </div>
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );

export default App
