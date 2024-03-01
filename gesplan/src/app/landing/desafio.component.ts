import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseHttp } from '../shared/base-http';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrl: './desafio.component.scss'
})
export class DesafioComponent extends BaseHttp implements OnInit {
  constructor(
    public dialog: MatDialog,
    public override http: HttpClient
  ) {
    super(http);
  }

  ngOnInit(): void {
    console.log('a');
  }
}
