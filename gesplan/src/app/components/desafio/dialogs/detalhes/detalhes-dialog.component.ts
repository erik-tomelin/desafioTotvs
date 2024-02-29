import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { IFornecedor, enumTipoFornecedorLabel } from '../../../../enumeration/fornecedor';
import { BaseHttp } from '../../../../shared/base-http';

@Component({
  selector: 'app-detalhes-dialog',
  templateUrl: './detalhes-dialog.component.html'
})
export class DetalhesDialog extends BaseHttp implements OnInit {
  @Output() closeModal = new EventEmitter<void>();

  public modalOpen: boolean = false;

  constructor(
    public override http: HttpClient
  ) {
    super(http);
  }

  ngOnInit(): void {
    console.log('b')
  }

  open(): void {
    this.modalOpen = true;
    console.log("Modal aberto!");
  }

  close(): void {
    this.modalOpen = false;
    this.closeModal.emit();
  }

  closeOnClickOutside(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  saveAndClose(): void {
    console.log("Dados salvos!");
    this.close();
  }
}
