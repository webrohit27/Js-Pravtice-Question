// class (oops)

class Chair {
    contructor(height, width, color, weight, material){
        this.height = height;
        this.width = width;
        this.color = color;
        this.weight = weight;
        this.material = material;
    }

    seat(){
        console.log('sit');
    }

    adjust_seat(){
        console.log('adjusting seat');
    }

    rotate(){
        console.log('Rotating');
    }
     
}
 
let chair1 = new Chair(3, 2, 'purple', 9, 'fiber');

console.log(chair1);