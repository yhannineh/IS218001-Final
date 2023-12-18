import styles from './Menu.module.css';

function Menu() {
    return (
      <div className={styles.wholeMenu}>
        <h1 className={styles.title}>MENU</h1>
        <div className={styles.line}></div>
            <div className={styles.items}>
                <div className={styles.oneItem}>
                    <section className={styles.itemText}>
                        <h1 className={styles.name}>CHEESE PIZZA</h1>
                        <p className={styles.desc}>Tomato sauce, Mozzarella</p>
                    </section>
                </div>
            </div>
      </div>
    );
  }
  
  export default Menu;