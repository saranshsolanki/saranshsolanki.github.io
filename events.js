AFRAME.registerComponent('markerhandler', {

    init: function() {
        const Marker = document.querySelector("#video-marker");
        var video = document.getElementById("video");
        var ar = document.getElementById("ar");
        // const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        Marker.addEventListener('click', function(ev, target){

            console.log("here");

            video.style.display = "block";
            ar.style.display = "none";

            // elem.requestFullscreen();
            // elem.mozRequestFullScreen();
            // elem.webkitRequestFullscreen();

            // elem.msRequestFullscreen();


            // const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            // if (aEntity && intersectedElement === aEntity) {
            //     const scale = aEntity.getAttribute('scale');
            //     Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
            //     aEntity.setAttribute('scale', scale);
            // }
        });
}});