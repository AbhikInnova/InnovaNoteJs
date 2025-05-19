function fun(data, getNextData) {
    setTimeout( () => {
        console.log(data);
        if (getNextData)
            getNextData();
    }
    , 1000);
}
fun(1, () => {
    fun(2, () => {
        fun(3,()=>{})
    }
    )
}
)

// ---------------------------------------------------------------------------

function getData(data) {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            console.log(data);
            res(data);
        }
        , 2000);
    }
    )
}

getData(2).then( (res) => {
    getData(res + 1).then( (res) => {
        getData(res + 1).then( (res) => {
            console.log("success")
        }
        )
    }
    )
}
)
