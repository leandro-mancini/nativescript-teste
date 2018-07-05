import { VeiculoViewModel } from "~/core/models/veiculo-view-model";
import { FuncionarioViewModel } from "~/core/models/funcionario-view-model";

export class EscalaServicoViewModel {
    idEscalaPadraoServico: number;
    idEscalaDiariaServico: number;
    id: number;
    diaria: boolean;
    grupo: number;
    codigo: string;
    horaInicio: string;
    horaFim: string;
    funcionarios: Array<FuncionarioViewModel>;
    veiculo: VeiculoViewModel;
    indisponibilidade: boolean;
}