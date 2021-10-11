import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/interface/category';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
// here we imported the ModalContentComponent so that it knows which component will show as modal
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { CategoryService } from 'src/app/service/category.service';
// import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input()  category: Category;
  @Output() onDeleteCategory: EventEmitter<Category> = new EventEmitter();
  closeResult: string;
  result: boolean;

  public object = {   // this object can be seen in the console log inside of modal-content
    name: 'Izzat Nadiri',
    age: 26
  };

  faTimes = faTimes;
  pencil = faPencilAlt;

  constructor(private modalService: NgbModal, private categoryService:CategoryService) { };

  ngOnInit(): void { };

  onDelete(category){
    this.onDeleteCategory.emit(category);
    console.log(category, 'this category was deleted');
  };

  open(category){

    const passedCategory = {
      _id: category._id,
      code: category.code,
      name: category.name,
      shortName: category.shortName    
    };

    // console.log(passedCategory)
    //this.openM(passedCategory);
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.passedCategory = passedCategory;
    modalRef.componentInstance.passedResult = this.result;
    // modalRef.componentInstance.object = this.object;

    // console.log(modalRef, 'modalRef here')
    modalRef.result.then((result) => {
      console.log(result, 'result here');
      if(result === true){
        modalRef.close()
      }
    }, (reason) => {
      console.log(reason, 'reason here');
    });

  };

  updateCategory(category: Category) {
    console.log('does this show from category-item?');
    this.categoryService
      .updateCategory(category)
      .subscribe();
      console.log(category, "updating this category!");
  };

};
