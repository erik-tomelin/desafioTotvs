import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DetalhesDialog } from '../detalhes-dialog/detalhes-dialog.component';
import { ISupplier } from '../../../enumeration/supplierType';
import { BaseHttp } from '../../../shared/base-http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { enumCrudOperations } from '../../../enumeration/crudOperations';

@Component({
  selector: 'app-header-grid',
  templateUrl: './header-grid.component.html',
  styleUrls: ['./header-grid.component.scss'],
})
export class HeaderGridComponent extends BaseHttp implements OnInit {
  @ViewChild(DetalhesDialog) modal!: DetalhesDialog;

  @Input() listSelected: ISupplier[] = [];
  @Output() refresh = new EventEmitter<void>();

  public modalAberta: boolean = false;
  public disabled: boolean = true;

  public enumCrudOperation = enumCrudOperations;

  constructor(public override http: HttpClient) {
    super(http);
  }

  ngOnInit() {}

  openModal(crudOperation: enumCrudOperations): void {
    if (crudOperation == enumCrudOperations.add) {
      this.listSelected = [];
    }

    this.modalAberta = true;
    if (this.modal) {
      this.modal.open();
    }
  }

  closeModal(): void {
    this.modalAberta = false;
    if (this.modal) {
      this.modal.close();
      if (!this.disabled) {
        this.refresh.emit();
      }
    }
  }

  enabledButton(enable: boolean): void {
    this.disabled = !enable;
  }

  deleteSupplier() {
    if (this.listSelected.length > 0) {
      this.listSelected.forEach((selected) => {
        super.delete(
          `${environment.urlServer}/fornecedores/${selected.id}`,
          (response) => {
            this.refresh.emit();
          }
        );
      });
    }
  }
}
