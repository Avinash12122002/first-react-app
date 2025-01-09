import styles from './FoodInput.module.css';

const FoodInput = ({handleKeyDown}) => {

return (
<input className={styles.foodInput} type = "text" placeholder='Enter Food Item Here'
onKeyDown={handleKeyDown}></input>
);
};
export default FoodInput;