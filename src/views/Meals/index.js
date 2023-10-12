import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import Meals from "../Meals/Meals";
import CartProvider from "../store/CartProvider";

function MainMeals() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCardHandle = () => {
        setCartIsShown(true);
    };
    const hideCardHandle = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCardHandle} />}
            <Header onShowCart={showCardHandle} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default MainMeals;
