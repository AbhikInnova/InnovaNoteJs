
function fun(data, getNextData) {
    setTimeout(() => {
        console.log("operation 1");
        if (getNextData)
            getNextData(data+1);
    }
    , 1000);
}
function fun1(data, getNextData) {
    setTimeout(() => {
        console.log("operation 2");
        if (getNextData)
            getNextData(data+1);
    }
    , 1000);
}
function fun2(data, getNextData) {
    setTimeout(() => {
        console.log("operation 3");
        if (getNextData)
            getNextData(data+1);
    }
    , 1000);
}


fun(1, (res) => {
    fun1(res, (res1) => {
        fun2(res1,(res2)=>{console.log(res2)})
    }
    )
}
)
