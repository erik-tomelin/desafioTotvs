import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import {
  ISupplier,
  enumSupplier,
  enumSupplierLabel,
} from '../../../enumeration/supplierType';
import { BaseHttp } from '../../../shared/base-http';

@Component({
  selector: 'app-detalhes-dialog',
  templateUrl: './detalhes-dialog.component.html',
  styleUrls: ['./detalhes-dialog.component.scss'],
})
export class DetalhesDialog extends BaseHttp implements OnInit {
  @ViewChildren('phoneInput') phoneInputRefs!: QueryList<ElementRef>;
  @Input() listSelected!: ISupplier[];
  @Output() closeModal = new EventEmitter<void>();
  public modalOpen: boolean = false;
  public form!: FormGroup;
  public enumSupplierLabel = enumSupplierLabel.mapToKeyValue();
  public submitted: boolean = false;

  constructor(private fb: FormBuilder, public override http: HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    const selected =
      this.listSelected && this.listSelected.length > 0
        ? this.listSelected[0]
        : null;

    this.form = this.fb.group({
      name: [selected?.name || '', Validators.required],
      email: [selected?.email || '', [Validators.required, Validators.email]],
      supplierType: [selected?.supplierType || enumSupplier.atacadista, Validators.required],
      cellphone: [selected?.cellphone || ''],
      observacao: [selected?.observacao || ''],
    });
  }

  open(): void {
    this.modalOpen = true;
    console.log('Modal aberto!');
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
    console.log('Dados salvos!');
    this.close();
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const request = this.form.value;
    request.estrela = request.estrela ? request.estrela : false;

    if (request.id) {
      super.put(
        `${environment.urlServer}/fornecedores/${request.id}`,
        request,
        (response) => {
          this.saveAndClose();
        }
      );
    } else {
      super.post(
        `${environment.urlServer}/fornecedores`,
        request,
        (response) => {
          this.saveAndClose();
        }
      );
    }
  }
}
