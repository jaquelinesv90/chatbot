const qrcode = require("qrcode-terminal")
const { Client, Buttons, List, MessageMedia, LocalAuth } = require("whatsapp-web.js") // Mudança Buttons
const client = new Client({
  auth: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--single-process"],
  },
})

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true })
})

client.on("ready", () => {
  console.log("Tudo certo! WhatsApp conectado.")
})

client.on("disconnected", (reason) => {
  console.log("Desconectado. Tentando reconectar...", reason)
  client.initialize()
})

client.initialize()

const delay = (ms) => new Promise((res) => setTimeout(res, ms)) // Função que usamos para criar o delay entre uma ação e outra

client.on("message", async (msg) => {
  if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat()

    await delay(3000) //delay de 3 segundos
    await chat.sendStateTyping() // Simulando Digitação
    await delay(3000) //Delay de 3000 milisegundos mais conhecido como 3 segundos

    const hora = new Date().getHours()
    let saudacao
    if (hora >= 5 && hora < 12) {
      saudacao = "Bom dia"
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde"
    } else {
      saudacao = "Boa noite"
    }

    await client.sendMessage(
      msg.from,
      saudacao +
        ", sou o assistente virtual da Oficina Mecânica Leonildo. Agradecemos seu contato.",
    )

     await delay(3000); // delay de 3 segundos
     await client.sendMessage(msg.from, 'Informamos que nosso horário de atendimento é de segunda a sexta, das 08:00 às 12:00 e das 13:00 às 17:00. Sábados, domingos e feriados estamos fechados.');
     await delay(3000); // delay de 3 segundos
     await client.sendMessage(msg.from, 'Como posso te ajudar hoje? Por favor, digite uma das opções abaixo:\n\n1 - Agendar serviço\n2 - Orçamento\n3 - Informações');
    
    //   await delay(3000); //delay de 3 segundos
    //   await chat.sendStateTyping(); // Simulando Digitação
    //   await delay(5000); //Delay de 5 segundos

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

   // Opções de menu
    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); // delay de 3 segundos
        await chat.sendStateTyping(); // Simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'No momento não podemos responder, mas tentaremos o mais breve possivel. Agradecemos sua compreensão.');
    }

    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); // delay de 3 segundos
        await chat.sendStateTyping(); // Simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'O orçamento pode ser feito sem agendamento, venha até a oficina');
    }

    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); // delay de 3 segundos
        await chat.sendStateTyping(); // Simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite a sua mensagem e aguarde nosso contato, tentaremos responder o mais breve possível.');
    }

  // if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
  //    const chat = await msg.getChat();

  //const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
  //await client.sendMessage(msg.from, video1, {caption: ''});

  //    const imagem1 = MessageMedia.fromFilePath('./imagem1.png'); // arquivo em imagem, ´pode ser jpeg também
  //  await client.sendMessage(msg.from, imagem1, {caption: ''}); //Enviando a imagem

  //   await delay(3000); //delay de 3 segundos
  //   await chat.sendStateTyping(); // Simulando Digitação
  //   await delay(3000);
  //   await client.sendMessage(msg.from, 'Nosso serviço oferece consultas médicas 24 horas por dia, 7 dias por semana, diretamente pelo WhatsApp.\n\nNão há carência, o que significa que você pode começar a usar nossos serviços imediatamente após a adesão.\n\nOferecemos atendimento médico ilimitado, receitas\n\nAlém disso, temos uma ampla gama de benefícios, incluindo acesso a cursos gratuitos');

  //   await delay(3000); //delay de 3 segundos
  //   await chat.sendStateTyping(); // Simulando Digitação
  //  await delay(3000);
  //  await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro e escolha o plano que desejar.\n\n2º Passo\nApós efetuar o pagamento do plano escolhido você já terá acesso a nossa área exclusiva para começar seu atendimento na mesma hora.\n\n3º Passo\nSempre que precisar');

  // await delay(3000); //delay de 3 segundos
  //  await chat.sendStateTyping(); // Simulando Digitação
  //   await delay(3000);
  //  await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
  // }

  // if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
  //     const chat = await msg.getChat();

  // const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
  //await client.sendMessage(msg.from, video1, {caption: ''});

  //    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  //    await chat.sendStateTyping(); // Simulando Digitação
  //    await delay(3000);
  //   await client.sendMessage(msg.from, '*Plano Individual:* R$22,50 por mês.\n\n*Plano Família:* R$39,90 por mês, inclui você mais 3 dependentes.\n\n*Plano TOP Individual:* R$42,50 por mês, com benefícios adicionais como\n\n*Plano TOP Família:* R$79,90 por mês, inclui você mais 3 dependentes');

  //  await delay(3000); //delay de 3 segundos
  //  await chat.sendStateTyping(); // Simulando Digitação
  //  await delay(3000);
  //  await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
  // }

  // if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
  //     const chat = await msg.getChat();

  // const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
  // await client.sendMessage(msg.from, video1, {caption: ''});

  //   await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  //   await chat.sendStateTyping(); // Simulando Digitação
  //   await delay(3000);
  //   await client.sendMessage(msg.from, 'Sorteio de em prêmios todo ano.\n\nAtendimento médico ilimitado 24h por dia.\n\nReceitas de medicamentos');

  //  await delay(3000); //delay de 3 segundos
  //  await chat.sendStateTyping(); // Simulando Digitação
  //  await delay(3000);
  // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

  // }

  // if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
  //     const chat = await msg.getChat();

  //    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  //    await chat.sendStateTyping(); // Simulando Digitação
  //    await delay(3000);
  //    await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');
  //    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  //   await chat.sendStateTyping(); // Simulando Digitação
  //    await delay(3000);
  //   await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
  // }

  // if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
  //    const chat = await msg.getChat();

  //     await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  //    await chat.sendStateTyping(); // Simulando Digitação
  //    await delay(3000);
  //    await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');
  // }
})



