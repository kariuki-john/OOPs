class Car {
   

    //this is private

  #distance(millage){
        this.millage = millage
        console.log("the cars millage is 10000");
    }
    distance2(){
        this.#distance();
    }
   
  
}
const CarMillage = new Car();

CarMillage.distance2(); // output: the cars millage is 1000
CarMillage.distance();  //output: error.  






