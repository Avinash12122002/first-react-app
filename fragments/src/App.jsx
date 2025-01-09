import './App.css';
import React, { useState } from 'react';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  // let foodItems = ['Pizza','Burger','Fries','Ice Cream'];

  // let textStatearr= useState('text to show');
  // let textToShow = textStatearr[0];
  // let setTextState = textStatearr[1];
  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItem] = useState([]);

  // console.log(`Current value of textState: ${textToShow}`);
 
  const onKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems,newFoodItem]
      setFoodItem(newItems);
      console.log(`The New Food Item is ${newFoodItem}`);

      } 
    // console.log(event.target.value)
    // setTextState(event.target.value);
  };
  return (
    <>
    <Container>
    <h1 className='food-heading'>Healthy foods</h1>
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    </Container>

    {/* <Container><p>Above is the heathy food list</p>
    </Container> */}
    </>

  )

}

export default App
