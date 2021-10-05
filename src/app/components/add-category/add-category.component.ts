import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  // _id: string;
  code: string;
  name: string;
  shortName: string;
  // __v: number;

  @Output() onAddCategory: EventEmitter<Category> = new EventEmitter();

  constructor() { };

  ngOnInit(): void {};

  onSubmit(){

    if(!this.code){
      alert('Please Add A CODE');
      return;
    }if(!this.name){
      alert('Please Add A NAME');
      return;
    }if(!this.shortName){
      alert('Please Add A SHORTNAME');
      return;
    };

    const newCategory = {
      code: this.code,
      name: this.name,
      shortName: this.shortName,
      
    };

    this.onAddCategory.emit(newCategory);

    this.code = '';
    this.name = '';
    this.shortName = '';

  };

};
