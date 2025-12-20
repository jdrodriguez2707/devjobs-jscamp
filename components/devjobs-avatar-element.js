// Siempre se debe heredar de HTMLElement para tener disponible todo lo que tiene una etiqueta 
// HTML (métodos, propiedades, eventos etc.)
class DevJobsAvatar extends HTMLElement {
  constructor() {
    // Llamamos al constructor de HTMLElement para tener todo disponible (siempre debe ir primero)
    super(); 
    // Atamamos el componente al ShadowDOM para encapsularlo y aislarlo del DOM principal
    // mode: "open" -> controla la accesibilidad del shadow DOM
    // "open" quiere decir que será accesible por JS externo mientras que "closed" lo contrario
    this.attachShadow({ mode: "open" });
  }

  render() {
    // Insertamos el HTML en el shadowRoot que devuelve el shadowDOM (burbuja)
    this.shadowRoot.innerHTML = `
      <img 
        src="https://unavatar.io/github/jdrodriguez2707"
        alt="foto de perfil del usuario"
        style="width: 40px; height: 40px; border-radius: 50%;"
      >
    `;
  }

  // Se ejecuta cuando se añade el componente al DOM
  connectedCallback() {
    this.render();
  }
}

// Registramos el componente para poder usarlo como etiqueta HTML en el navegador
customElements.define("devjobs-avatar", DevJobsAvatar);
