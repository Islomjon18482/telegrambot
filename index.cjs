const { Telegraf, Markup } = require('telegraf');
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const botToken = '6250013183:AAE7MXCV1DYQ3T6jGpqOZiGD_bDqcCu_K78';
const apiKey = '58b8bbeaf4d255c5f456c30686fc4d404082df19be80ba54fbc40dbb7a28f4a0';

const bot = new Telegraf(botToken);

bot.start((ctx) => ctx.reply('Hush kelibsiz'))

bot.on('document', async (ctx) => {
    try {
        fs.mkdir("downloads")
        const document = ctx.message.document;
        const fileName = document.file_name;
        const fileId = document.file_id;
        const file = await ctx.telegram.getFile(fileId);
        const fileUrl = `https://api.telegram.org/file/bot${botToken}/${file.file_path}`;
        const response = await fetch(fileUrl);
        const buffer = await response.buffer();
        const filePath = `downloads/${document.file_name}`;
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 5);
        const formattedDate = currentDate.toISOString().replace('T', ' ').split('.')[0];

        fs.writeFileSync(filePath, buffer);

        let message = `🔖 File nomi: ${fileName}\n`;
        message += `🔒 File turi: ${getFileExtension(fileName)}\n`;
        message += `📁 File hajmi: ${file.file_size} B\n\n`;
        message += `🔬 Birinchi natijalar\n`;
        message += `• ${formattedDate}\n\n`;
        message += `🔭 So'ngi natijalar\n`;
        message += `• ${formattedDate}\n\n`;
        message += `🎉 Shifr turi\n`;
        message += `• ASCII shifri\n\n`;
        message += `🚨 Fayl haqida barcha ma'lumotlarga ega bo'lish 👇👇👇`

        const buttons1 = Markup.inlineKeyboard([
            Markup.button.callback('Tugmach 1', 'button1'),
            Markup.button.callback('Tugmach 2', 'button2'),
        ]);

        ctx.reply(message, buttons1);

        const url = 'https://www.virustotal.com/vtapi/v2/file/scan';
        const formData = new FormData();
        formData.append('apikey', apiKey);
        formData.append('file', fs.createReadStream(filePath));

        const scanResponse = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const scanData = await scanResponse.json();

        if (scanData.response_code === 1) {
            const scanReportUrl = `https://www.virustotal.com/vtapi/v2/file/report?apikey=${apiKey}&resource=${scanData.resource}`;
            const reportResponse = await fetch(scanReportUrl);
            const reportData = await reportResponse.json();
            const results = Object.entries(reportData.scans).map(([key, value]) => {
                return `${value.detected ? '❌' : '✅'} ${key}`;
            });

            ctx.reply(results.join('\n'));
        } else {
            console.log('Scan request queued for analysis');
        }

    } catch (error) {
        console.error('Xato yuz berdi:', error);
        ctx.reply('Fayl yuklashda yoki skan qilish jarayonida xato yuz berdi.');
    }
});


// "Tugmach 2" tugmasi bosilganda
bot.action('button2', (ctx) => {
    ctx.reply('Ikkinchi tugma bosildi!');
});

function getFileExtension(filename) {
    return filename.split('.').pop().toUpperCase();
}

bot.launch().then(() => {
    console.log('Bot ishga tushirildi');
}).catch(err => {
    console.error('Bot ishga tushirishda xatolik:', err);
});
