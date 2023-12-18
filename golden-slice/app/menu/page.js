import styles from './Menu.module.css';

function Menu() {
    return (
      <div className={styles.wholeMenu}>
        <h1 className={styles.title}>MENU</h1>
        <div className={styles.line}></div>
        <div className={styles.items}>
        </div>
      </div>
    );
  }
  
  export default Menu;