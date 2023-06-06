
import './App.css';
import { useState } from 'react';

// import for revise listing thorugh map()
// import Listing from '../Learnings/Module-1/Listing';

//import for revising form validation and non rfreshing forms
// import Form from '../Learnings/Module-1/Form';
// import Form2 from '../Learnings/Module-1/Form2';

import Lab_1 from '../Learnings/Module-1/Lab_1';

//import for learning contextAPI
// import Switch from './Switch';

//import for revising useState hook
// import HooksIntro from '../Learnings/Module-2/hooksIntro';

//import for: handling complex data in useState hoom
import ComplexuseStateexample from '../Learnings/Module-2/ComplexuseStateexample';

//import for : making goals app in action
import GoalsApp from '../Learnings/Module-2/GoalsApp';

//import for seeing the solution of lab 1st of module 2
import Lab_2 from '../Learnings/week-2/Lab_2';

// import for: see use of useEffect in action
import Usereducer from '../Learnings/week-2/usereducer';

// import for: see use of useRef in action
import UseRef from '../Learnings/week-2/UseRef';

// import for: see use of dialogue
import Composition from '../Learnings/week-3/Composition';

// import to: ues of React.cloneElement
// import { RadioGroup,RadioOption } from '../Learnings/week-3/ComponetLab';

import SpreadOp from '../Learnings/week-3/spreadOp';
function App() {
  const [selected, setSelected] = useState("");
  
return (
    <>
      <h1 style={{color:"red"}}>welcome to Jitubhai Bhajiya</h1>
      {/* <HooksIntro/> */}
      {/* <ComplexuseStateexample/> */}
      {/* <GoalsApp /> */}
      {/* <Lab_2/> */}
      {/* <Usereducer/> */}
      {/* <UseRef/> */}
      {/* <Composition/> */}
      {/* <h2>How did you hear about us?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button> */}
      <SpreadOp/>

    </>
  )
}

export default App
