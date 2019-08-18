import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IDay } from 'src/app/modules/shared/interfaces/day';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-school-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input() public menu: IDay;
  public isEditMode: boolean = false;
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  public ngOnInit(): void {
      const titleControlGroup = this.menu.complex
        .map((complex: IComplex) => [
          `title-${complex.id}`,
          new FormControl(complex.title)
        ]);
      const descControlGroup = this.menu.complex
        .map((complex: IComplex) => [
          `desc-${complex.id}`,
          new FormControl(complex.desc)
        ]);
      const controlsGroup = _([...titleControlGroup, ...descControlGroup])
        .fromPairs()
        .value();

      this.formGroup = this.fb.group(controlsGroup);
  }

  public save(): void {
    this.toastr.warning('К сожалению данная функция ещё не доступна');
  }

  public toggleMode(): void {
    this.isEditMode = !this.isEditMode;
  }

}
