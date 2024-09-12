var input_ambient = window.document.getElementById('perguntas'); // Div que colocará os input
var button = window.document.getElementById('proximo'); // Butão para passar
var p_header = window.document.getElementById('p_header'); // Parágrafo do texto principal
var text = window.document.getElementById('text'); // Texto do nome e idade
var saves = []; // Salvamento das informações do text
var count = 0; // Contador de vezes do botão

// sabonetes
var argila_braca = 0; // para peles oleosas, acne, limpeza profunda, ingredientes naturais, esfoliante (para pessoas de abaixo de 30 anos)
var verde = 0; // para peles seca, ressecamento, hidratação, sem ingredientes naturais, suave (para pessoas acima de 60)
var dolomita = 0; // para peles sensiveis, nenhuma condição, suavização de linhas de expressão, ingredientes naturais, suave (para pessoas abaixo de 30)
var carvao_ativado = 0; // para peles normais, rugas, controle de oleosidade, não são produtos naturais,     esfoliante (para pessoas 45-60)
var camomila = 0; // para peles mistas, manchas, clareamento, naturais, não esfoliante (suave) (para pessoas 30-45)

function clicar() {
  count++;
  saves.push(text.value);
  if (count == 1) {
      var name = saves[0];
      if (name == "") {
          var name = "Desconhecido"
      }
      p_header.innerHTML = "Certo, " + name + "." + " Qual é a sua idade?";
      text.value = "";
  }
  
  if (count == 2) {
      saves.push(text.value);
      var old = parseInt(saves[1]); 
  
      if (Number.isInteger(old)) {
          var old = old;
      } else {
          var old = 0;
      }  
      
      if (old > 60) {
          verde++;
      } else if (old > 45 && old <= 60) {
          carvao_ativado++;
      } else if (old > 30 && old <= 45) {
          camomila++;
      } else if (old <= 30) {
          dolomita++;
          argila_braca++;
      }
  
      p_header.innerHTML = "Ótimo! Na nossa empresa, desenvolvemos produtos pensados especialmente para peles maduras, mas que também podem ser usados por todos.";
      text.value = "";
      text.style.display = "none";
  }
  
  if (count == 3) {
      p_header.innerHTML = "Temos cinco sabonetes: Argila braca, Verde, dolomita, carvão ativado e camomila";
  }
  
  if (count == 4) {
      p_header.innerHTML = "Agora vamos fazer algumas perguntas para entender qual sabonete é ideal para você.";
  }
  
  if (count == 5) {
      p_header.innerHTML = "Qual o seu tipo de pele?";
  
      var pergunta_check1 = document.createElement('input');
      pergunta_check1.type = "radio";
      pergunta_check1.value = "1"; // Oleosa
      pergunta_check1.name = "pele";
      var pergunta_check2 = document.createElement('input');
      pergunta_check2.type = "radio";
      pergunta_check2.value = "2"; // Seca 
      pergunta_check2.name = "pele";
      var pergunta_check3 = document.createElement('input');
      pergunta_check3.type = "radio";
      pergunta_check3.value = "3"; // Normal 
      pergunta_check3.name = "pele";
      var pergunta_check4 = document.createElement('input');
      pergunta_check4.type = "radio";
      pergunta_check4.value = "4" // Mista
      pergunta_check4.name = "pele";
      var pergunta_check5 = document.createElement('input');
      pergunta_check5.type = "radio";
      pergunta_check5.value = "5"; // Sensivel
      pergunta_check5.name = "pele";
  
      var rot_1 = document.createElement('label');
      rot_1.textContent = "Oleosa";
      var rot_2 = document.createElement('label');
      rot_2.textContent = "Seca";
      var rot_3 = document.createElement('label');
      rot_3.textContent = "Normal";
      var rot_4 = document.createElement('label');
      rot_4.textContent = "Mista";
      var rot_5 = document.createElement('label');
      rot_5.textContent = "Sensivel";
  
      var br = document.createElement('br');
  
      input_ambient.appendChild(rot_1);
      input_ambient.appendChild(pergunta_check1);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_2);
      input_ambient.appendChild(pergunta_check2);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_3);
      input_ambient.appendChild(pergunta_check3);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_4);
      input_ambient.appendChild(pergunta_check4);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_5);
      input_ambient.appendChild(pergunta_check5);
  }
  
  if (count == 6) {
      radios = window.document.getElementsByName('pele')
      for (var c = 0; c < radios.length; c++) {
          if (radios[c].checked) {
              var selecionado = radios[c].value;
              var selecionado = parseInt(selecionado);
          }
      }
  
      if (selecionado == 1) {
          argila_braca++;
      } else if (selecionado == 2) {
          verde++;
      } else if (selecionado == 3) {
          carvao_ativado++;
      } else if (selecionado == 4) {
          camomila++;
      } else if (selecionado == 5) {
          dolomita++;
      }
  
  
      p_header.innerHTML = "Você tem alguma condição específica na pele?";
      input_ambient.innerHTML = "";
  
      var pergunta_check1 = document.createElement('input');
      var pergunta_check2 = document.createElement('input');
      var pergunta_check3 = document.createElement('input');
      var pergunta_check4 = document.createElement('input');
      var pergunta_check5 = document.createElement('input');
      pergunta_check1.type = "radio";
      pergunta_check1.value = "1"; // Acne
      pergunta_check1.name = "condicao";
      pergunta_check2.type = "radio";
      pergunta_check2.value = "2"; // Rugas
      pergunta_check2.name = "condicao";
      pergunta_check3.type = "radio";
      pergunta_check3.value = "3"; // Manchas
      pergunta_check3.name = "condicao";
      pergunta_check4.type = "radio";
      pergunta_check4.value = "4"; // Ressecamento
      pergunta_check4.name = "condicao";
      pergunta_check5.type = "radio";
      pergunta_check5.value = "5"; // Nenhuma
      pergunta_check5.name = "condicao";
  
  
      var rot_1 = document.createElement('label');
      var rot_2 = document.createElement('label');
      var rot_3 = document.createElement('label');
      var rot_4 = document.createElement('label');
      var rot_5 = document.createElement('label');
      rot_1.textContent = "Acne";
      rot_2.textContent = "Rugas";
      rot_3.textContent = "Manhcas";
      rot_4.textContent = "Ressecamento";
      rot_5.textContent = "Nenhuma";
  
      var br = document.createElement('br');
  
      input_ambient.appendChild(rot_1);
      input_ambient.appendChild(pergunta_check1);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_2);
      input_ambient.appendChild(pergunta_check2);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_3);
      input_ambient.appendChild(pergunta_check3);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_4);
      input_ambient.appendChild(pergunta_check4);
      input_ambient.appendChild(br.cloneNode())
      input_ambient.appendChild(rot_5);
      input_ambient.appendChild(pergunta_check5);
  }
  
  if (count == 7) {
      radios = window.document.getElementsByName('condicao')
      for (var c = 0; c < radios.length; c++) {
          if (radios[c].checked) {
              var selecionado = radios[c].value;
              var selecionado = parseInt(selecionado);
          }
      }
  
      if (selecionado == 1) {
          argila_braca++;
      } else if (selecionado == 2) {
          carvao_ativado++;
      } else if  (selecionado == 3) {
          camomila++;
      } else if (selecionado == 4) {
          verde++;
      } else if (selecionado == 5) {
          dolomita++;
      }
  }
  
  if (count == 8) {
      input_ambient.style.display = "none";
      var sabonete;
      if (argila_braca > carvao_ativado && argila_braca > camomila && argila_braca > verde && argila_braca > dolomita) {
          var sabonete = "Argila Branca";
      } else if (verde > carvao_ativado && verde > camomila && verde > argila_braca && verde > dolomita) {
          var sabonete = "Verde";
      } else if  (carvao_ativado > argila_braca && carvao_ativado > camomila && carvao_ativado > verde && carvao_ativado > dolomita) {
          var sabonete = "Carvão Ativado";
      } else if (dolomita > carvao_ativado && dolomita > camomila && dolomita > verde && dolomita > argila_braca) {
          var sabonete = "Dolomita";
      } else if (camomila > carvao_ativado && camomila > argila_braca && camomila > verde && camomila > dolomita) {
          var sabonete = "Camomila"
      }
      p_header.innerHTML = `Com base nas suas respostas. Seu sabonete ideal é o ` + `<strong style="text-decoration: underline;">` + sabonete + `</strong>` ;
  }
}
