import { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import styles from "./css/App.module.css";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr.data);
      });
  }, []);

  return (
    <div>
      <AppHeader />
      <div className={styles.main}>
        <div className={styles.left}>{items && <BurgerIngredients items={items} />}</div>
        <div className="mt-25">{items && <BurgerConstructor items={items} />}</div>
      </div>
    </div>
  );
}

export default App;
