import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }
  getAllFoodsByTag(tag: string): Foods[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All' },
      { name: 'FastFood' },
      { name: 'Pizza' },
      { name: 'Lunch' },
      { name: 'SlowFood' },
      { name: 'Fry' },
      { name: 'Soup' },
      { name: 'IceCream' },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Salad',
        cookTime: '10-20',
        price: 10,
        origins: ['Italy'],
        imageUrl: 'assets/card1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Malai Kofta',
        cookTime: '5-10',
        price: 8,
        origins: ['USA'],
        imageUrl: 'assets/c3.webp',
        tags: ['FastFood', 'Burger', 'Dinner'],
      },
      {
        id: 3,
        name: 'Pancake',
        cookTime: '15-25',
        price: 20,
        origins: ['Japan'],
        imageUrl: 'assets/c4.jpg',
        tags: ['Healthy', 'Sushi', 'Lunch'],
      },
      {
        id: 4,
        name: 'Burgur Fries',
        cookTime: '20-30',
        price: 12,
        origins: ['Italy'],
        imageUrl: 'assets/c5.jpg',
        tags: ['FastFood', 'Pasta', 'Dinner'],
      },
      {
        id: 5,
        name: 'Potatato Fry',
        cookTime: '5-15',
        price: 7,
        origins: ['Global'],
        imageUrl: 'assets/c6.jpg',
        tags: ['Healthy', 'Salad', 'Lunch'],
      },
      {
        id: 6,
        name: 'Chole kulcha',
        cookTime: '10-20',
        price: 9,
        origins: ['Mexico'],
        imageUrl: 'assets/c7.jpg',
        tags: ['FastFood', 'Tacos', 'Dinner'],
      },
      {
        id: 7,
        name: 'Rapen Ramen',
        cookTime: '15-25',
        price: 14,
        origins: ['Japan'],
        imageUrl: 'assets/c8.webp',
        tags: ['Healthy', 'Ramen', 'Lunch'],
      },
      {
        id: 8,
        name: 'Burgur Chicken',
        cookTime: '20-30',
        price: 25,
        origins: ['USA'],
        imageUrl: 'assets/c9.jpg',
        tags: ['FastFood', 'Steak', 'Dinner'],
      },
      {
        id: 9,
        name: 'Mint Ice Cream',
        cookTime: '5-10',
        price: 5,
        origins: ['Global'],
        imageUrl: 'assets/c10.jpg',
        tags: ['Dessert', 'Ice Cream', 'Snack'],
      },
      {
        id: 10,
        name: 'Hakka Noodles',
        cookTime: '5-15',
        price: 6,
        origins: ['Global'],
        imageUrl: 'assets/c11.avif',
        tags: ['FastFood', 'Sandwich', 'Lunch'],
      },
      {
        id: 11,
        name: 'Momos',
        cookTime: '15-25',
        price: 13,
        origins: ['USA'],
        imageUrl: 'assets/c12.jpg',
        tags: ['FastFood', 'Chicken', 'Dinner'],
      },
      {
        id: 12,
        name: 'Spring Rolls',
        cookTime: '10-20',
        price: 7,
        origins: ['USA'],
        imageUrl: 'assets/c13.jpg',
        tags: ['Breakfast', 'Pancakes', 'Snack'],
      },
    ];
  }
}
