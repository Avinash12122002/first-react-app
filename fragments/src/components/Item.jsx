import styles from './Item.module.css';
const Item = ({foodItem,bought,handleBuyButton}) => {
  
 return (
 <li 
 className = {`${styles["food-item"]} list-group-item ${bought && 'active'}`}>
  <span className={styles["food-span"]}>{foodItem}</span>
  <button className={`${styles.button} btn btn-info`}onClick={handleBuyButton}>Buy</button>
  </li>
 );
};

export default Item;