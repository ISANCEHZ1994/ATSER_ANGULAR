import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() category: Category;
  
  @Output() onUpdateCategory: EventEmitter<Category> = new EventEmitter();

  @Input() name: string; // this is to show example of the modal - so the word 'World' appears! /// NOW replaced with data
  @Input() shortName: string;
  @Input() code: string;

  @Input() object; // this is to show example of the modal => so the object known as user can be used


  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    // console.log(this.object)
  }

  onUpdate(){

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

    const editedCategory = {
      code: this.code,
      name: this.name,
      shortName: this.shortName,
    }


    this.onUpdateCategory.emit(editedCategory);

    // this.code = '';
    // this.name = '';
    // this.shortName = '';
    
    console.log(editedCategory, 'this category was updated!')
    // console.log(category, 'this category was updated!')
  };



}
