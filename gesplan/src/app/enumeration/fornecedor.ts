import { CustomMap } from "../shared/customMap";

export enum enumTipoFornecedor {
    atacadista = 0,
    distribuidor = 1,
    fabricante = 2,
    varejista = 3,
}

export const enumTipoFornecedorLabel = new CustomMap<enumTipoFornecedor>([
    [enumTipoFornecedor.atacadista, 'Atacadista'],
    [enumTipoFornecedor.distribuidor, 'Distribuidor'],
    [enumTipoFornecedor.fabricante, 'Fabricante'],
    [enumTipoFornecedor.varejista, 'Varejista'],
]);

export interface IFornecedor {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    tipoFornecedor: enumTipoFornecedor;
    observacao: string | null;
    estrela: boolean;
}