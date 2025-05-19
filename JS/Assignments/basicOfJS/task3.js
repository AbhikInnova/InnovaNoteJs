function fun(){
    let time=0;
    function counter(){
        setInterval(()=>{console.log(time++)},1000)
    }
    return counter();
}
fun();

