class SVGIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
        :host {
          display: inline-flex;
      `;
  }

  connectedCallback() {
    this.icon = this.getAttribute("icon") ?? "wifi";
    this.width = this.getAttribute("width") ? `${this.getAttribute("width")}px` : "48px";
    this.height = this.getAttribute("height") ? `${this.getAttribute("height")}px` : "48px";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${SVGIcon.styles}
          width: ${this.width};
          height: ${this.height};
        }
      </style>
      <svg role="img">
        <use xlink:href="/iconset.svg#${this.icon}"></use>
      </svg>`;
  }
}

customElements.define("svg-icon", SVGIcon);