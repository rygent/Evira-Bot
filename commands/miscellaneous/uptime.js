const { RichEmbed } = require('discord.js')
const { purple_medium } = require('../../colours.json')
const moment = require('moment')

module.exports = {
    config: {
        name: 'uptime',
        aliases: ['awake', 'ut'],
        category: 'miscellaneous',
        description: 'Displays the bots current uptime!',
        usage: '[uptime]',
        accessableby: 'Members'
    },
    run: async (bot, message, args) => {
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(1, '0')} hrs, ${min.padStart(1, '0')} mins, ${sec.padStart(1, '0')} secs`
        }
    
        const embed = new RichEmbed()

        .setColor(purple_medium)
        .setAuthor('Uptime')
        .setDescription(`${duration(bot.uptime)}`)
        .setFooter(`Last started on ${moment(bot.readyAt).format('ddd, DD MMMM YYYY HH:mm UTCZ')}`)

        message.channel.send(embed)
    }
}