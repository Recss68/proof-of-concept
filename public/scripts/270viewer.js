if (typeof TSDViewer !== 'undefined') {
    if(TSDViewer){
 

    let $wanttobemodel = document.querySelector('#wanttobemodel');
    $wanttobemodel.querySelector('img').setAttribute('style', 'display: none;');
    $wanttobemodel.setAttribute('style', 'border: none;')

    let paintingFullImg = document.querySelector('#wanttobemodel img');

    // Check if the image is orientation: landscape or portait, and adjust the chosen model based on that calc
    var width = paintingFullImg.naturalWidth;
    var height = paintingFullImg.naturalHeight;
    let zoomLvl;
    if (width > height){
        modelOrientation = 'hva-pictureframe3-horizontal' /* landscape */
    } else if (width < height){
        modelOrientation = 'hva-pictureframe3-vertical' /* portrait */
    } else {
        modelOrientation = 'hva-pictureframe2' /* vierkant */
    }
    if (height === undefined || width === undefined){
        modelOrientation = 'hva-pictureframe3-horizontal' /* fallback */
    }

    TSDViewer.create($wanttobemodel, {
        model: modelOrientation,
        width: '100vw',
        height: '100%',
        cameraZoomLevel: 0.5,
        cameraPosition: '0',
        plugins: 'customiser',
        onCreate: () => {
            // viewer was created
        },
        onLoadComplete: () => {
            // loaded model
            $wanttobemodel.setTexture({name: 'field1', source: document.querySelector('#wanttobemodel img'),scale: 'cover'}).then(() => { /* callback */ });
            $wanttobemodel.setBackground("#4b4c54");
            $wanttobemodel.querySelector('img').remove();
        },
        onLoadFailure: () => {
            // something's wrong, load fallback
        }   

    })

}}