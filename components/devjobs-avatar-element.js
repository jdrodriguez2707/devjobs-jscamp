class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "jdrodriguez2707";
    const size = this.getAttribute("size") ?? "4.8";
    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}rem;
          height: ${size}rem;
          border-radius: 50%;
        }
      </style>
      <img 
        src="${url}"
        alt="Avatar de ${username}"
      >
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
