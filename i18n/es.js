const es = {
  index: {
    input: {
      label: 'Nombre',
      placeholder: 'Tu nombre:'
    },
    selector: {
      label: 'Idioma',
      detail: 'Selecciona tu idioma'
    },
    buttons: {
      start: 'Jugar',
      instructions: 'Instrucciones',
      ranking: 'Clasificación'
    },
    footer: {
      developer: 'Desarrollado por Alex Mamani 2021',
      code: 'Codigo en GitHub'
    }
  },
  instructions: {
    title: 'Instrucciones',
    paragraphs: [
      `El <span class="highlight">objectivo</span> de este juego es resolver tantos problemas matemáticos como puedas en <span class="highlight">60 segundos</span>.
    Luego, cuando el tiempo se acabe, tu podrás ver tu <span class="highlight">resultado</span>, que son, el número de preguntas que resolviste y la cantidad de respuestas correctas e incorrectas`,
    `Primero, tu necesitas clickar en <span class="btn"> Jugar </span>. Luego, tu verás una pantalla que dice <span class="highlight">Empezando en : </span>. Cuando el contador diga 0, el juego empezará.
    Dentro del juego, podrás usar los números de tu teclado para resolver los problemas.
    <span class="keybo">0</span>
    <span class="keybo">1</span>
    <span class="keybo">2</span>
    <span class="keybo">3</span>
    <span class="keybo">4</span>
    <span class="keybo">5</span>
    <span class="keybo">6</span>
    <span class="keybo">7</span>
    <span class="keybo">8</span>
    <span class="keybo">9</span>
    <br>
    Puedes usar las teclas de borrado para eliminar un número escrito
    <span class="keybo double"> &#129044; </span>
    <span class="keybo"> Supr </span>
    Puedes pulsar la tecla Enter para resolver el problema y pasar al siguiente
    <span class="keybo double"> Enter </span>`,
    `Tambien podrás usar los <span class="highlight">botones</span>, de la pantalla para hacer todo lo ya dicho.
    Sin embargo, te recomiendo que usas el teclado, utiliza los botones de la pantalla en <span class="highlight"> dispositivos móbiles</span>.
    Escribir con el teclado es <span class="highlight">más rápido</span> que escribir con los botones`,
    `Cuando el juego acabe, tu verás la sección<span class="highlight">Número total de respuestas</span>
    , allí verás la cantidad de problemas mátematicos que haz resuelto.
    Verás la sección <span class="highlight">Número de respuestas correctas</span>, aquí verás la cantidad de problemas resueltos correctamente.
    Verás la sección <span class="highlight">Número de respuestas incorrectas</span>, aquí verás la cantidad de problemas en los que te equivocaste`,
    `Finalmente, en la sección <span class="highlight">Puntaje Final</span>, tú verás tu puntaje final, este puntaje <span class="highlight">se basa en </span>the
    la cantidad de respuestas correctas e incorrectas, el tiempo que tardaste en resolver un problema y tu racha de respuestas correctas.
    Dentro del juego, verás dos botones arriba. El botón <span class="btn"> Regresar a la página principal </span> te regresará a la página que viste al inicio.
    El botón <span class="btn"> Empezar de nuevo </span>&nbsp;reiniciará el juego. Útil cuando creas que te equivocaste en demasiadas preguntas`
    ]
  },
  game: {
    start: 'Empezando en:  ',
    calculator: {
      btnReturn: 'Regresa al Inicio',
      btnStartAgain: 'Empezar denuevo',
      btnEnter: 'Enviar',
      btnErase: 'Borrar'
    },
    results: {
      details: {
        title: 'Detalles',
        details: [
          'Problema',
          'Tu respuesta',
          'Respuesta Correcta',
          'Resultado'
        ]
      },
      ranking: {
        title: 'Clasificación',
        ranking: [
          'Posición',
          'Nombre',
          'Puntaje'
        ]
      },
      explanation: [
        'Número Total de Preguntas',
        'Número de respuestas correctas',
        'Número de respuestas incorrectas',
        'Puntaje Final'
      ]
    }
  }
}

export default es
