import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/Model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodService:FoodService){
    this.foods=foodService.getAll();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
