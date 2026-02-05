let color = ["White", "Red", "Green", "Yellow", "Blue"];
let mycolor = "";
for (let i=0; i<color.length; i++){
    mycolor += color[i];
    if (i < color.length-1){
        mycolor += ", ";
    }
}
console.log(mycolor);