export function workday(data: Date) {
    const diaDaSemana = data.getDay();
    const ehDiaUtil = diaDaSemana >= 1 && diaDaSemana <= 5;
  
    // Lista de feriados nacionais no formato 'MM-DD'
    const feriadosNacionais = [
      '01-01', // Ano Novo
      '04-21', // Dia de Tiradentes
      '05-01', // Dia do Trabalho
      '09-07', // Independência do Brasil
      '10-12', // Dia de Nossa Senhora Aparecida
      '10-13', // PONTO FACULTATIVO
      '11-02', // Dia de Finados
      '11-03', // PONTO FALCULTATIVO
      '11-15', // Proclamação da República
      '12-25', // Natal
      // Adicione mais feriados conforme necessário
    ];
  
    const diaMes = `${(data.getMonth() + 1).toString().padStart(2, '0')}-${data.getDate().toString().padStart(2, '0')}`;
    const naoEhFeriado = !feriadosNacionais.includes(diaMes);
  
    return ehDiaUtil && naoEhFeriado;
  }

  export function findNextWorkDay(data: Date) {
    while (true) {
      data.setDate(data.getDate() + 1); // Adiciona 1 dia à data
  
      if (workday(data)) {
        return data; // Retorna a data quando encontrar um dia útil
      }
    }
  }

 export function formatDate(data: Date) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`;
  }