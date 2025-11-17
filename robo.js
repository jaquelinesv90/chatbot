
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra



client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|opa|Nildo|nildo|Leonildo|leonildo)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação    
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ', sou o assistente virtual da Oficina Mecânica Leonildo.Como posso te ajudar hoje? Por favor, digite umas das opções abaixo:\n\n1 - Agendar serviço\n2 - Orçamento\n3 - Dúvidas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
      //  await client.sendMessage(msg.from, 'Irei te enviar um áudio');
      //  await delay(3000); //Delay de 3 segundos
     //   await chat.sendStateRecording(); //Simulando audio gravando
     //   await delay(3000); //Delay de 3 segundos
     //   const audio1 = MessageMedia.fromFilePath('./audio1.ogg'); // Arquivo de audio em ogg gravado, pode ser .opus também
     //   await client.sendMessage(msg.from, audio1, {sendAudioAsVoice: true}); // enviando o audio1

        
        //Enviar vídeo:
        
        //const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
        //await client.sendMessage(msg.from, video1, {caption: ''});

        //Enviar pdf:
        
       // const documento1 = MessageMedia.fromFilePath('./Pdf.pdf'); // pdf para ser enviado
       // await client.sendMessage(msg.from, documento1); //Enviando o pdf


    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        //const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
        //await client.sendMessage(msg.from, video1, {caption: ''});

       // const documento1 = MessageMedia.fromFilePath('./Pdf.pdf'); // pdf para ser enviado
       // await client.sendMessage(msg.from, documento1); //Enviando o pdf


    //    const imagem1 = MessageMedia.fromFilePath('./imagem1.png'); // arquivo em imagem, ´pode ser jpeg também
      //  await client.sendMessage(msg.from, imagem1, {caption: ''}); //Enviando a imagem 

     //   await delay(3000); //delay de 3 segundos
     //   await chat.sendStateTyping(); // Simulando Digitação
     //   await delay(3000);
     //   await client.sendMessage(msg.from, 'Nosso serviço oferece consultas médicas 24 horas por dia, 7 dias por semana, diretamente pelo WhatsApp.\n\nNão há carência, o que significa que você pode começar a usar nossos serviços imediatamente após a adesão.\n\nOferecemos atendimento médico ilimitado, receitas\n\nAlém disso, temos uma ampla gama de benefícios, incluindo acesso a cursos gratuitos');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'No momento não temos horários disponíveis para agendamento, agradecemos sua compreensão.');

       // await delay(3000); //delay de 3 segundos
      //  await chat.sendStateTyping(); // Simulando Digitação
     //   await delay(3000);
      //  await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

       // const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
        //await client.sendMessage(msg.from, video1, {caption: ''});

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos informe qual a marca, modelo, ano do carro, e qual o problema.');

      //  await delay(3000); //delay de 3 segundos
      //  await chat.sendStateTyping(); // Simulando Digitação
      //  await delay(3000);
      //  await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


       // const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
       // await client.sendMessage(msg.from, video1, {caption: ''});

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, ' Aguarde nosso contato, tentaremos responder o mais breve possivel.');
        
      //  await delay(3000); //delay de 3 segundos
      //  await chat.sendStateTyping(); // Simulando Digitação
      //  await delay(3000);
       // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

   }

   // if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
   //     const chat = await msg.getChat();

    //    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    //    await chat.sendStateTyping(); // Simulando Digitação
    //    await delay(3000);
    //    await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');


    //    await delay(3000); //delay de 3 segundos
     //   await chat.sendStateTyping(); // Simulando Digitação
    //    await delay(3000);
     //   await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    //}

   // if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
    //    const chat = await msg.getChat();

   //     await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    //    await chat.sendStateTyping(); // Simulando Digitação
    //    await delay(3000);
    //    await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


   // }



});