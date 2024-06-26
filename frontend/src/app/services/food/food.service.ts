import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodsByTag(tag:string): Foods[] {
    return tag === 'All' ? 
    this.getAll() : this.getAll().filter(food => food.tags?.
    includes(tag))
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'FastFood', count: 6 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 3 },
      { name: 'Fry', count: 2 },
      { name: 'Soup', count: 1 },
      { name: 'IceCream', count: 1 }
    ]
    
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Salad',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        imageUrl: 'assets/card1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Malai Kofta',
        cookTime: '5-10',
        price: 8,
        favorite: false,
        origins: ['USA'],
        imageUrl: 'assets/c3.webp',
        tags: ['FastFood', 'Burger', 'Dinner']
      },
      {
        id: 3,
        name: 'Pancake',
        cookTime: '15-25',
        price: 20,
        favorite: true,
        origins: ['Japan'],
        imageUrl: 'assets/c4.jpg',
        tags: ['Healthy', 'Sushi', 'Lunch']
      },
      {
        id: 4,
        name: 'Burgur Fries',
        cookTime: '20-30',
        price: 12,
        favorite: false,
        origins: ['Italy'],
        imageUrl: 'assets/c5.jpg',
        tags: ['FastFood', 'Pasta', 'Dinner']
      },
      {
        id: 5,
        name: 'Potatato Fry',
        cookTime: '5-15',
        price: 7,
        favorite: true,
        origins: ['Global'],
        imageUrl: 'assets/c6.jpg',
        tags: ['Healthy', 'Salad', 'Lunch']
      },
      {
        id: 6,
        name: 'Chole kulcha',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['Mexico'],
        imageUrl: 'assets/c7.jpg',
        tags: ['FastFood', 'Tacos', 'Dinner']
      },
      {
        id: 7,
        name: 'Rapen Ramen',
        cookTime: '15-25',
        price: 14,
        favorite: false,
        origins: ['Japan'],
        imageUrl: 'assets/c8.webp',
        tags: ['Healthy', 'Ramen', 'Lunch']
      },
      {
        id: 8,
        name: 'Burgur Chicken',
        cookTime: '20-30',
        price: 25,
        favorite: true,
        origins: ['USA'],
        imageUrl: 'assets/c9.jpg',
        tags: ['FastFood', 'Steak', 'Dinner']
      },
      {
        id: 9,
        name: 'Mint Ice Cream',
        cookTime: '5-10',
        price: 5,
        favorite: false,
        origins: ['Global'],
        imageUrl: 'assets/c10.jpg',
        tags: ['Dessert', 'Ice Cream', 'Snack']
      },
      {
        id: 10,
        name: 'Hakka Noodles',
        cookTime: '5-15',
        price: 6,
        favorite: false,
        origins: ['Global'],
        imageUrl: 'assets/c11.avif',
        tags: ['FastFood', 'Sandwich', 'Lunch']
      },
      {
        id: 11,
        name: 'Momos',
        cookTime: '15-25',
        price: 13,
        favorite: true,
        origins: ['USA'],
        imageUrl: 'assets/c12.jpg',
        tags: ['FastFood', 'Chicken', 'Dinner']
      },
      {
        id: 12,
        name: 'Spring Rolls',
        cookTime: '10-20',
        price: 7,
        favorite: false,
        origins: ['USA'],
        imageUrl: 'assets/c13.jpg',
        tags: ['Breakfast', 'Pancakes', 'Snack']
      }
    ];
  }
}
