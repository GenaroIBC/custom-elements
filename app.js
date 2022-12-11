class RandomImage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const sizesMap = {
      small: "100",
      medium: "150",
      large: "200",
      huge: "250"
    };

    const image = document.createElement("img");
    const imageSrc = this.getAttribute("topic");
    const size = this.getAttribute("size");

    image.setAttribute("src", imageSrc);
    image.setAttribute("width", sizesMap[size]);

    this.appendChild(image);
  }

  disconnectedCallback() {}

  attributeChangedCallback(attributeName, oldValue, newValue) {}
}

window.customElements.define("random-image", RandomImage);
