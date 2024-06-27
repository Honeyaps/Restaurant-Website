import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); // Instant load data after removing item
  }

  changeQuantity(cartItem: CartItem, quantity: number) {
    if (quantity >= 1) {
      this.cartService.changeQuantity(cartItem.food.id, quantity);
      this.setCart(); // Instant load data after changing quantity
    }
  }

  increaseQuantity(cartItem: CartItem) {
    this.changeQuantity(cartItem, cartItem.quantity + 1);
  }

  decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      this.changeQuantity(cartItem, cartItem.quantity - 1);
    }
  }
}
