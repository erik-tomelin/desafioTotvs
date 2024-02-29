import { Component, OnInit } from '@angular/core';
import { IFornecedor, enumTipoFornecedorLabel } from '../../../enumeration/fornecedor';
import { BaseHttp } from '../../../shared/base-http';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent extends BaseHttp implements OnInit {
  public fornecedores: IFornecedor[] = [];
  public enumTipoFornecedor = enumTipoFornecedorLabel.mapToKeyValue();

  constructor(
    public dialog: MatDialog,
    public override http: HttpClient
  ) {
    super(http);
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  ngOnInit() {
    super.get(environment.urlServer + '/fornecedores').subscribe(
      (result: IFornecedor[]) => {
        this.fornecedores = this.ordenarFornecedorPoEstrela(result);
      }
    );
  }

  ordenarFornecedorPoEstrela(fornecedores: IFornecedor[]): IFornecedor[] {
    return fornecedores.sort((a, b) => {
      if (a.estrela && !b.estrela) return -1;
      if (!a.estrela && b.estrela) return 1;

      return a.nome.localeCompare(b.nome);
    });
  }

  adicionarEstrela(fornecedor: IFornecedor) {
    fornecedor.estrela = !fornecedor.estrela;

    super.put(environment.urlServer + '/fornecedores/' + fornecedor.id, fornecedor,
      (response) => {
        this.ordenarFornecedorPoEstrela(this.fornecedores);
      }
    );
  }
}
