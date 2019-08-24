// import { React, useState } from "react";

// const Button = () => {
//   const [count, setCount] = useState(9);

//   return (
//     <div>
//       <button>{`RButton ${count}`}</button>
//     </div>
//   );
// };

// export default Button;

import { React, useState } from "react";


const Display = (props) => {
  return (
    <div onClick={props.onClickFunctionComesFromParent}>
      {props.count}
    </div>
  );
};

let circle = {
  radius: 2,
  name: 'Circle',
  precision: 3
}
const circleArea = ({radius}, {precision=2}) => (PI * radius * radius).toFix(precision);



const Button = (props) => {
  const [count, setCount] = useState(9);
  let handleClick = () => {
    setCount(count+props.incBy);
    console.log('handleClick '+count);
  }
  return (
    <div>

      <Display count={count} onClickFunctionComesFromParent={handleClick}/>
      <button onClick={handleClick}>{`RButton ${count}`}
      <Display count={count} />
      <Display count={circleArea(circle)} />
        
      </button>
      <button onClick={handleClick}>{`RButton ${count}`}</button>
    </div>
  );
};
export default Button;
const List = () => {
  let howMany = 5;
  return(
    <div>
      {
        // for(let i=0; i<howMany; i++){
          // return i;
          (<Button incBy={15} />)
        // } 
      }
    </div>
                    
  )
}

// ReactDOM.render(<List />, mountNode);