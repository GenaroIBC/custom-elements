class RandomImage extends HTMLElement {
  static get observedAttributes() {
    return ["size", "topic"];
  }

  #RANDOM_IMG_URL = "https://placeimg.com/30/30";

  #SIZES = {
    small: "100",
    medium: "150",
    large: "200",
    huge: "250"
  };

  constructor() {
    super();
  }

  connectedCallback() {
    const topic = this.getAttribute("topic");
    const size = this.getAttribute("size");
    const imageSrc = `${this.#RANDOM_IMG_URL}/${topic}`;

    const $image = document.createElement("img");

    $image.setAttribute("src", imageSrc);
    $image.setAttribute("width", this.#SIZES[size]);

    this.appendChild($image);
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (attributeName === "size") {
      const newSize = this.#SIZES[newValue];

      this.querySelector("img").setAttribute("width", newSize);
    }

    if (attributeName === "topic") {
      const newImageSrc = `${this.#RANDOM_IMG_URL}/${newValue}`;

      this.querySelector("img").setAttribute("src", newImageSrc);
    }
  }
}

window.customElements.define("random-image", RandomImage);
