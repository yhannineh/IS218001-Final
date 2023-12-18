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
                    <section className={styles.itemPrice}>
                        <h2 className={styles.singlePrice}>14 / 16 / 18</h2>
                    </section>
                </div>
                <div className={styles.oneItem}>
                    <section className={styles.itemText}>
                        <h1 className={styles.name}>PEPPERONI PIZZA</h1>
                        <p className={styles.desc}>Tomato sauce, Mozzarella, Pepperoni</p>
                    </section>
                    <section className={styles.itemPrice}>
                        <h2 className={styles.singlePrice}>14 / 16 / 18</h2>
                    </section>
                </div>
                <div className={styles.oneItem}>
                    <section className={styles.itemText}>
                        <h1 className={styles.name}>MEAT LOVERS PIZZA</h1>
                        <p className={styles.desc}>Tomato sauce, Mozzarella, Pepperoni, Sausage, Bacon, Ham, Beef</p>
                    </section>
                    <section className={styles.itemPrice}>
                        <h2 className={styles.singlePrice}>14 / 16 / 18</h2>
                    </section>
                </div>
                <div className={styles.oneItem}>
                    <section className={styles.itemText}>
                        <h1 className={styles.name}>HAWAIIAN PIZZA</h1>
                        <p className={styles.desc}>Tomato sauce, Mozzarella, Ham, Pineapple Chunks</p>
                    </section>
                    <section className={styles.itemPrice}>
                        <h2 className={styles.singlePrice}>14 / 16 / 18</h2>
                    </section>
                </div>
                <div className={styles.oneItem}>
                    <section className={styles.itemText}>
                        <h1 className={styles.name}>MARGARITA PIZZA</h1>
                        <p className={styles.desc}>Thin Crust, Tomato sauce, Fresh Mozzarella, Basil, Olive Oil</p>
                    </section>
                    <section className={styles.itemPrice}>
                        <h2 className={styles.singlePrice}>14 / 16 / 18</h2>
                    </section>
                </div>
            </div>
      </div>
    );
  }
  
  export default Menu;