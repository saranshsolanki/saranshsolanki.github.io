AFRAME.registerComponent('markerhandler', {

    init: function() {
        const Marker = document.querySelector("#video-marker");
        var elem = document.getElementById("myvideo");
        // const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        Marker.addEventListener('click', function(ev, target){

            elem.style.display = "block";
            
            // elem.requestFullscreen();
            // elem.mozRequestFullScreen();
            elem.webkitRequestFullscreen();

            // elem.msRequestFullscreen();


            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});