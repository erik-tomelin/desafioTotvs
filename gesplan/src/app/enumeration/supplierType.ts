import { CustomMap } from '../shared/customMap';

export enum enumSupplier {
  atacadista = 0,
  distribuidor = 1,
  fabricante = 2,
  varejista = 3,
}

export const enumSupplierLabel = new CustomMap<enumSupplier>([
  [enumSupplier.atacadista, 'Atacadista'],
  [enumSupplier.distribuidor, 'Distribuidor'],
  [enumSupplier.fabricante, 'Fabricante'],
  [enumSupplier.varejista, 'Varejista'],
]);

export interface ISupplier {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  supplierType: enumSupplier;
  observacao: string | null;
  estrela: boolean;
}
