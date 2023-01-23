
class Engine{
    static Engine1 = "this is the first engine";
    static Engine2(){
        return "Engine2 is ready to start"
    }

    static{
        console.log("Car engines are ready");
    }
}
console.log(Engine.Engine1);
console.log(Engine.Engine2());

