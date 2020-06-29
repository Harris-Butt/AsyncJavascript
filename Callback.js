console.log("Start")

function loginUser(email,password,callBack){
    setTimeout(()=>{
        console.log("Now we have the data");
        callBack( {"userEmail": email})
    },2000);
}
function Video(email,callBack){
    setTimeout(()=>{
        callBack(['video1','video2']);
    },2000)
   
}
function videoDetails(video,callBack){ 
    setTimeout(()=>{
        callBack(`title of the video is `);
    })
}
const user = loginUser("harr@gmail.com",
                        123456,
                        (user)=>
                        {console.log(`user is ${user.userEmail}`);
                        Video(user.userEmail,
                        (vid)=>
                        {
                            console.log(vid);
                            videoDetails(vid[0],(title=>{
                                console.log(title);
                            }))
                        }
                        )}); 

console.log("Finish");