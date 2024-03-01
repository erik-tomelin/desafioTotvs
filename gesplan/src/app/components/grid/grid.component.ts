import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../environments/environment';
import { ISupplier, enumSupplierLabel } from '../../enumeration/supplierType';
import { BaseHttp } from '../../shared/base-http';
import { HeaderGridComponent } from './header-grid/header-grid.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent extends BaseHttp implements OnInit {
  @ViewChild(HeaderGridComponent) public childHeader?: HeaderGridComponent;

  public fornecedores: ISupplier[] = [];
  public enumSupplierLabel = enumSupplierLabel.mapToKeyValue();

  public listSelected: ISupplier[] = [];

  constructor(public dialog: MatDialog, public override http: HttpClient) {
    super(http);
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    super
      .get(environment.urlServer + '/fornecedores')
      .subscribe((result: ISupplier[]) => {
        this.fornecedores = this.ordenarFornecedorPoEstrela(result);
      });
  }

  ordenarFornecedorPoEstrela(fornecedores: ISupplier[]): ISupplier[] {
    return fornecedores.sort((a, b) => {
      if (!a || !b) return 0;

      if (!a.name && !b.name) return 0;
      if (!a.name) return -1;
      if (!b.name) return 1;

      if (a.estrela && !b.estrela) return -1;
      if (!a.estrela && b.estrela) return 1;

      return a.name.localeCompare(b.name);
    });
  }

  adicionarEstrela(fornecedor: ISupplier) {
    fornecedor.estrela = !fornecedor.estrela;

    super.put(
      environment.urlServer + '/fornecedores/' + fornecedor.id,
      fornecedor,
      (response) => {
        this.ordenarFornecedorPoEstrela(this.fornecedores);
      }
    );
  }

  checkboxCheck(supplierSelecionado: ISupplier) {
    if (this.childHeader) {
      if (!this.listSelected.find((s) => s === supplierSelecionado)) {
        this.listSelected.push(supplierSelecionado);
      } else {
        const index = this.listSelected.findIndex(
          (s) => s === supplierSelecionado
        );
        if (index !== -1) {
          this.listSelected.splice(index, 1);
        }
      }

      if (this.listSelected.length === 1) {
        this.childHeader.enabledButton(true);
      } else if (this.listSelected.length === 0) {
        this.childHeader.enabledButton(false);
      }

      this.listSelected =
        this.listSelected.length !== 0 ? this.listSelected : [];
    }
  }

  refresh() {
    window.location.reload();
  }
}
