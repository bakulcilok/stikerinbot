let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `contoh:\n${usedPrefix + command} @6282144572368`
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
