var table_calculos = [];

function PegarValor(numero){
    
    var valor = document.getElementById('resultado').innerHTML;
    console.log(valor); //número/operação
    document.getElementById('resultado').innerHTML = valor + numero;
    console.log(valor+numero); //conta

  }
  
 

  function Calcular() {

    var resultado = document.getElementById('resultado').innerHTML;
  
    if (resultado === ''){
      document.getElementById('resultado').innerHTML = "";
      msg = document.getElementById('msg');
      msg = '<span class="digite_num">Sem números digitados</span>';
      console.log('Sem números digitados');
      
      
    } else {
      console.log('Calculando..');
      
      //calcula o resultado das operações
      document.getElementById('resultadoconta').innerHTML = eval(resultado);
            
      
    }

    Listar();
    

}

  function Listar() {
    var resultado = document.getElementById('resultado').innerHTML;
    var conta = document.getElementById('resultadoconta').innerHTML;
      if (resultado === '') {
          // mensagem caso não tenha nenhum cadastro
        document.getElementById('tabela').innerHTML = '<div class="alert alert-danger" role="alert"> Sem nenhum cadastro! </div>';
      
      }else{

        var id = 1;
		
          for (var row = 0; row < table_calculos.length; row++) {
            id = 1 + id;
          }

          
        // objeto calculadora
          var Calculadora = {
            id:'',
            operacao:'',
            resultado: '',
          };

          Calculadora.id = id;
          Calculadora.operacao =  resultado;
          Calculadora.resultado =conta;

          console.log(Calculadora);

          table_calculos.push(Calculadora);

          // tabela com os dados
          var tableHTML = '<div class="div-result"><br><h2>Cálculos:</h2> <br>';
          tableHTML += '<table class="mb-5 mt-3 table table-striped">';

          tableHTML += '<thead><tr>';
          tableHTML += '<th scope="col">ID</th>';
          tableHTML += ' <th scope="col">OPERAÇÃO</th>';
          tableHTML += ' <th scope="col">RESULTADO</th>';
          tableHTML += ' </tr></thead><tbody>';
          

          table_calculos.forEach(function(Calculo, posicao){
            console.log('Objetos listados:');
            console.log(Calculo);
          
  
          tableHTML +=
          '<td>' +
          Calculo.id  +
          ' </td> <td>' +
          Calculo.operacao +
          ' </td> <td>' +
          Calculo.resultado;

          tableHTML += ' </tbody></td>';
          document.getElementById('tabela').innerHTML = tableHTML;
        });
        tableHTML += ' </table></div>';

      }
  
  }
  
  function OperacaoPorcentagem() {
      var resultado = document.getElementById('resultado').innerHTML;
      console.log(resultado);
      var calculo = eval(resultado) / 100;
      document.getElementById('resultado').innerHTML = calculo;
  }
  
  function OperacaoInverter() {
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result * -1;
    return result;
  }
  

  function LimparValores() {
    document.getElementById('resultado').innerHTML = "";  
    document.getElementById('msg').innerHTML = "";
    document.getElementById('resultadoconta').innerHTML = "";
    
  }
  