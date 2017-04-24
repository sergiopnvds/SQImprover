/* Downloaded from http://www.codeseek.co/ */
new Vue({

  // Este es el elemento que controlará/vigilará VUE
  el: '#principal',

  // Sección de datos de la aplicación
  data: {
    contacto: {id: '', nombre: '', apellidos: '', fnacimiento: '', telefono: '' },
    agenda: [],
    contador: 0
  },

  // Cuando la aplicación está cargada se llama a esta función
  mounted: function() {
    // Cuando la aplicación se cargar, sería mas o menos como el document.ready de jquery
    this.cargarAgenda();
  },

  // Métodos que se van a utilizar en la aplicación
  methods: {
    cargarAgenda: function() {
      var agendaDatos = [
        {
          id: 1,
          nombre: 'Mario',
          apellidos: 'Suarez',
          fnacimiento: '19/01/1973',
          telefono: '3125467764'
        },
        {
          id: 2,
          nombre: 'Vicent',
          apellidos: 'Porter',
          fnacimiento: '29/11/1970',
          telefono: '3245654676'
        },
        {
          id: 3,
          nombre: 'Aiden',
          apellidos: 'Chavez',
          fnacimiento: '22/07/1983',
          telefono: '3125554781'
        }
      ];

      //Rellenar la agenda con los datos, de una vez
      this.agenda = agendaDatos;
      this.contador=agendaDatos.length;
      // ponerlos uno a uno
      // for (var i in agenda) {
      //   this.agenda.push(agendaDatos[i]);
      // }
    },

    // Adds an event to the existing events array
    addContacto: function() {
      if(this.contacto.nombre) {
        this.contador++;
        this.contacto.id=this.contador;
        this.agenda.push(this.contacto);
        this.contacto = { nombre: '', apellidos: '', fnacimiento: '', telefono: '' };
      }
    },

    borrarContacto: function(index) {
      if(confirm("Are you sure that yoy want to delete this contact?")) {
        this.agenda.splice(index, 1);
      }
    },

    openChat: function() {
      document.location.href="chat.html";
    }

  }
});
