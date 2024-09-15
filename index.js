const fetch = require('node-fetch');
const chalk = require('chalk');
const fs = require('node:fs');
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
function banner(){
    console.log(chalk.magentaBright(`\n
    █▄▄▄▄ ██   ▄█ ██▄       █ ▄▄  ████▄ █    █         █▀▄▀█ ▄███▄     ▄▄▄▄▀ ▄  █ ████▄ ██▄   
    █  ▄▀ █ █  ██ █  █      █   █ █   █ █    █         █ █ █ █▀   ▀ ▀▀▀ █   █   █ █   █ █  █  
    █▀▀▌  █▄▄█ ██ █   █     █▀▀▀  █   █ █    █         █ ▄ █ ██▄▄       █   ██▀▀█ █   █ █   █ 
    █  █  █  █ ▐█ █  █      █     ▀████ ███▄ ███▄      █   █ █▄   ▄▀   █    █   █ ▀████ █  █  
    █      █  ▐ ███▀       █              ▀    ▀        █  ▀███▀    ▀        █        ███▀  
    ▀      █                 ▀                          ▀                    ▀               
        ▀   \n                                                                               
    ~ by ZenX Corp - ${chalk.white(`.gg/zCQ8jQ2GBf`)}

    `));
};
banner();
if(!fs.existsSync('by-ZenX-gg-zCQ8jQ2GBf.zx')){
    process.exit();
};
const tokens = [
    "token"
];
const channels_ids = [
    "channel_id1",
    "channel_id2",
    "channel_id3"
];
async function spam_encuesta() {
    setInterval(async () => {
        for (let token of tokens.values()) {
            for (let channel of channels_ids.values()) {
                const res = await fetch(`https://discord.com/api/v9/channels/${channel}/messages`,{
                    method:"POST",
                    headers:{
                        "Authorization":`${token}`,
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        "mobile_network_type":"unknown",
                        "content":"||@everyone||", // Contenido del mensaje .
                        "tts":false,
                        "flags":0,
                        "poll":
                        {"question":
                            {"text":"$ ZenX 0n t0p: discord.gg/zCQ8jQ2GBf"}, // Pregunta con 300 carácteres como maximo .
                            "answers":[
                                // Máximo 10 respuestas con 55 carácteres como máximo .
                                {"poll_media":{"text":"$ - $ - $ - $ - $ - $ - $ - $ - $"}}, //1
                                {"poll_media":{"text":"Invite: discord.gg/zCQ8jQ2GBf"}},     //2
                                {"poll_media":{"text":"$ ZenX Corp"}},                       //3
                                {"poll_media":{"text":"$ - $ - $ - $ - $ - $ - $ - $ - $"}}, //4
                                {"poll_media":{"text":"Invite: discord.gg/zCQ8jQ2GBf"}},     //5
                                {"poll_media":{"text":"$ ZenX Corp"}},                       //6 
                                {"poll_media":{"text":"$ - $ - $ - $ - $ - $ - $ - $ - $"}}, //7
                                {"poll_media":{"text":"Invite: discord.gg/zCQ8jQ2GBf"}},     //8
                                {"poll_media":{"text":"$ ZenX Corp"}},                       //9
                                {"poll_media":{"text":"$ - $ - $ - $ - $ - $ - $ - $ - $"}}  //10
                            ],
                            "allow_multiselect":true, // Respuesta múltiple -> true || false
                            "duration":1, // Duración en horas -> 1 || 4 || 8 || 24 || 72 || 168 || 336
                            "layout_type":1
                        }
                    })
                });
                const resJson = await res.json();
                if(res.status === 429){
                    console.log(chalk.red(`[$] Hubo un error al enviar la encuesta. Código de error: ${chalk.white(resJson['code'])} .`));
                    if(resJson['code'] === 20028){
                        await wait_ms(resJson['retry_after']);
                        console.log(chalk.cyan(`[$] Reintentando enviar la encuesta en ${chalk.white(resJson['retry_after'])} segundos...`));
                    };
                } else if(res.status === 200){
                    console.log(chalk.green(`[$] La encuesta fue enviada en el canal con ID ${chalk.white(channel)} con éxito.`));
                };
            };        
        };      
    }, 500);
};
spam_encuesta();