import React,{useState} from 'react';

const Button = () => {
  const [loading, setLoading] = useState(false);

  return <button onClick={()=>{
    setLoading(!loading);
    console.log(loading,'loading')
  }}>Test Button</button>
};

export default Button;
