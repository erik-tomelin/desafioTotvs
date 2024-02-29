import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseHttp } from '../../shared/base-http';
import { DetalhesDialog } from './dialogs/detalhes/detalhes-dialog.component';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrl: './desafio.component.scss'
})
export class DesafioComponent extends BaseHttp implements OnInit {
  @ViewChild(DetalhesDialog) modal!: DetalhesDialog;

  public modalAberta = false;

  constructor(
    public dialog: MatDialog,
    public override http: HttpClient
  ) {
    super(http);
  }

  ngOnInit(): void {
    console.log('a');
  }

  openModal(): void {
    this.modalAberta = true;
    this.modal.open();
  }

  closeModal(): void {
    this.modalAberta = false;
    this.modal.close();
  }
}
