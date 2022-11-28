import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
            m.reply('Proses...')
            let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
            if (res.status != 200) throw res.message;
            if (!res) throw res.message;
            let result = `${res.title}
*Author* ${res.author}
*Type NoWatemark*`
    conn.sendButtonVid(m.chat, res.video, result, '_© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝐅𝐢𝐤𝐫𝐢𝐢_', `Thanks`, `thanks ${args[0]}`, m)
        }
handler.menudownload = ['tiktok <url>']
handler.tagsdownload = ['search']
handler.command = /^(tiktok|ttdl|tt|tiktokdl)$/i
handler.limit = 3

export default handler
