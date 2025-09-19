const readLine = require('readLine').createInterFace({
      input: process.stdin,
      output: process.stdout
})

let nota1, nota2, nota3, nota4, media;

readLine.question('', (n1)  => {
      nota1 =parseFloat(n1);
      readLine.question('', (n2)  => {
      nota2 =parseFloat(n2);
      readLine.question('', (n3)  => {
      nota3 =parseFloat(n3);
      readLine.question('', (n4)  => {
      nota4 =parseFloat(n4);
      media = (nota1+nota2+nota3+nota4)/4;
      console.log(media.toFixed(2));
      readLine.close
      });
      });
      });
      });