class Element {
    constructor(font_size, color, background_color, font_family, padding, margin){
        this.font_size = font_size;
        this.color = color;
        this.background_color = background_color;
        this.font_family = font_family;
        this.padding = padding;
        this.margin = margin;
    }
}

let h1 = new Element(14, 'red', 'yellow', 'sans-sarif', 10, 15);
console.log();