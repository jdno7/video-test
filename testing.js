const audioBtn = document.querySelector('button')

audioBtn.addEventListener('click',function (){
  const video = document.querySelector('video')
  if (video.muted){
    video.muted = false
  }
  else {
    video.muted = true
  }
})