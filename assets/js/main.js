var app = new Vue ({
  el: '#root',
  data: {
    contacts: [
    	{
    		name: 'Michele',
    		avatar: '_1',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Fabio',
    		avatar: '_2',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: '_3',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Luisa',
    		avatar: '_4',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			}
    		],
    	},
    ],
    chat: 0,
    send: "",
    searchContact: "",
    menuIndex: null,
  },
  created: function(){
    this.contacts.forEach((contact, i) => {
      contact.messages.forEach((message, k) => {
        let temp = message.date.split(' ')[0];
        let temp1 = temp.split('/');
        let newDate = temp1[2] + '-' + temp1[1] + '-' + temp1[0] + ' ' + message.date.split(' ')[1];
        message.date = newDate;
      });
    });
  },
  methods: {
    open_chat: function (i) {
    this.chat = i;
    },
    getDate: function(date){
      return dayjs(date).format('hh:mm')
    },
    menu_msg: function (i) {
      if (this.menuIndex == i) {
        this.menuIndex = null;
      } else {
        this.menuIndex = i;
      }
    },
    deleteMsg: function (i) {
      this.contacts[this.chat].messages.splice(i, 1);
      this.menuIndex= -1;
    },
    send_msg: function () {
      const indexChat = this.chat;
      let obj = {
        date: dayjs().format('dddd MM/DD/YYYY HH:mm:ss'),
        text: this.send,
        status: 'sent',
      }
      this.contacts[indexChat].messages.push(obj);
      this.send = "";
      setTimeout(() => {
        let obj2 = {
          date: dayjs().format('dddd MM/DD/YYYY HH:mm:ss'),
          text: 'Ok',
          status: 'received',
        }
        this.contacts[indexChat].messages.push(obj2);
      }, 1000);
    },
  },
});
