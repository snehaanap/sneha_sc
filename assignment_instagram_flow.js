function user_registration(user, callback) {
    setTimeout(() => {
        console.log(`${user} has been register now`)
        callback()
    }, 3000);

}
function verify_otp(user, callback) {
    setTimeout(() => {
        console.log(`${user} register successfully`)
        callback()
    }, 1000)
}
function view_post(user, callback) {
    setTimeout(() => {
        callback()
        console.log(`${user} view the post`)
    },10000);
}

function search_id(user, callback) {
    setTimeout(() => {
        console.log(`${user} search id`)
        callback()
    }, 1000)
}
function see_the_reels(user, callback) {
    setTimeout(() => {
        callback()
        console.log(`${user} see the short videos`)
    },15000)
}
function profile_update(user, callback) {
    setTimeout(() => {
        console.log(`${user} EDIT profile`)
    }, 10000);
}

user_registration("sneha", () => {
    verify_otp("sneha", () => {
        view_post("sneha", () => {
            search_id("sneha", () => {
                see_the_reels("sneha", () => {
                    profile_update("sneha", () => {
                    })
                })
            })
        })
    })
})




sort=[12,3,4,5,5,3,,2,,6,]
let a=sort.sort((a,b)=>{
    console.log(a-b)
})