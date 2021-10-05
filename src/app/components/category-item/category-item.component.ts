import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/interface/category';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: Category;
  @Output() onDeleteCategory: EventEmitter<Category> = new EventEmitter();
  @Output() onUpdateCategory: EventEmitter<Category> = new EventEmitter();
 
  public object = {
    name: 'Izzat Nadiri',
    age: 26
  };

  faTimes = faTimes;
  pencil = faPencilAlt;

  constructor(private modalService: NgbModal) { };

  ngOnInit(): void {
  };

  onDelete(category){
    this.onDeleteCategory.emit(category);
    console.log(category, 'this category was deleted');
  };

  onUpdate(category){
    this.onUpdateCategory.emit(category);
    console.log(category, 'this category was updated!')
  };

  // this is for MODAL
  open(category) {
    console.log("here is a specifc category!", category);
    const modalRef = this.modalService.open(ModalContentComponent);

    // how to pass information to the modal/edit form
    // modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.name = this.category.name;
    modalRef.componentInstance.shortName = this.category.shortName;
    modalRef.componentInstance.code = this.category.code;
    // .componentInstance.name => we are checking into the modal component checking if there is an input of name
    // then where ever 'name' is inside of the modal-component - the quote 'World' will be displayed
    // modalRef.componentInstance.object = this.object;
     
    
    
  };


};
