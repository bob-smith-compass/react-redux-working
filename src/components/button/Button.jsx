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

let o = [
  {
    name: 'David',
    role: 'Solution Architect'
  },   
  {
    name: 'John',
    role: 'Developer'
  }
]

const Display = (props) => {
  return (
    <div onClick={props.onClickFunctionComesFromParent}>
      {props.count}
    </div>
  );
};

const {PI, SQRT2, E} = Math;
// const {five=5, two, three} = {'one': 1, 'two': 2, 'three': 3};
let circle = {
  radius: 2,
  name: 'Circle',
  precision: 3
}
const circleArea = ({radius}, {precision=2}) => (PI * radius * radius).toFix(precision)
      // <Display count={circleArea(circle)} />


const Button = (props) => {
  const [count, setCount] = useState(9);
  let handleClick = () => {
    setCount(count+props.incBy);
    console.log('handleClick '+count);
  }
  return (
    <div style={{border: 'solid 1px gray', padding: '5px', margin: '2px 2px 0 0'}}>

      <Display count={count} onClickFunctionComesFromParent={handleClick}/>
      <button onClick={handleClick}>{`RButton ${count}`}
      <Display count={count} />
      <Display count={PI} />
      <Display count={SQRT2} />
      <Display count={E} />
        
        
      </button>
      <button onClick={handleClick}>{`RButton ${count}`}</button>
    </div>
  );
};
class Card extends React.Component {
  
  
  render() {
    return(
      <div style={{border: 'solid 1px gray', padding: '5px', margin: '2px 2px 0 0'}}>
        <div style={{color: 'red'}}>Name: {this.props.name}</div>
        <div>Profile: {this.props.role}</div>
      </div>
    )
  }
}

export default Button;
const List = () => {
  let howMany = 5;
  return(
    <div style={{border: 'solid 1px gray', padding: '5px', margin: '2px 2px 0 0'}}>
      
      {
        // for(let i=0; i<howMany; i++){
          // return i;
          (<Button incBy={15} />)
        // } 
      }
      <Card {...o[0]}/>
      <Card {...o[1]}/>
    </div>
                    
  )
}

// ReactDOM.render(<List />, mountNode);