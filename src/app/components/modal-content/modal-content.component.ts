import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Output() onUpdateCategory: EventEmitter<Category> = new EventEmitter();
  // name: string; // this is to show example of the modal - so the word 'World' appears! 
  // WAS replaced with passing data => NAME

  // had individual variables when it SHOULD BE ONE object with all varaibles!
  @Input() passedCategory: Category; // REPRESENTS OLD
 
  @Input() object; // this is to show example of the modal => 
                   // so the object known as user (from category-item) can be seen in console look below
  @Input() passedResult; // boolean

  constructor(public activeModal: NgbActiveModal,private categoryService:CategoryService) {}

  ngOnInit(): void {
    // console.log('this is the example: ', this.object) // this is to see example of how information passed from category-item COMPO!
    // console.log(this);
    console.log(this.passedCategory, "here is the OLD category (FROM category-item)")
    
  }

  onUpdate(category){
   
    // NOW an object - no longer UNDEFINED => represents a specifc CLICKED category which will be the UPDATED Category
    // can change to have new properties but where/how do we send to designated location?

    // BOTH below are doing the same!!! FOCUS
    // console.log(category, 'category pass from HTML method');
    // console.log(this.passedCategory, 'category passed FROM category-item') 

    if(!category.code){
      alert('Please Add A CODE');
      return;
    }if(!category.name){
      alert('Please Add A NAME');
      return;
    }if(!category.shortName){
      alert('Please Add A SHORTNAME');
      return;
    };

    const editedCategory = {
      id: '',
      code: '',
      name: '',
      shortName: '',
    }

    this.onUpdateCategory.emit(editedCategory);

    editedCategory.id = category._id;
    editedCategory.code = category.code;
    editedCategory.name = category.name;
    editedCategory.shortName = category.shortName;
    
    // Remember that the category that gets passed to this method will be the same as editedCategory
    console.log(editedCategory, 'this should be NEW category');
    this.categoryService
        .updateCategory(editedCategory)
        .subscribe( a => {
          console.log(a['success'], 'returns true or false: boolean');
          console.log(this.activeModal, 'activeModal? from modal-content');

          this.activeModal.close(a['success']);
          // this.activeModal.
       });
  };


};
