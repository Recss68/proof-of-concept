if (typeof TSDViewer !== 'undefined') {
    if(TSDViewer){
 

    let $wanttobemodel = document.querySelector('#wanttobemodel');
    $wanttobemodel.querySelector('img').setAttribute('style', 'display: none;');
    $wanttobemodel.setAttribute('style', 'border: none;')

    TSDViewer.create($wanttobemodel, {
        model: 'hva-pictureframe3-horizontal',
        width: '800px',
        height: '800px',
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