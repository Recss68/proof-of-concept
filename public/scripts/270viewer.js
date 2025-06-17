TSDViewer.create(document.querySelector('.myOwnDiv'), {
    model: 'hva-pictureframe1-horizontal',
    width: '500px',
    height: '500px',
    onCreate: () => {
        // viewer was created
    },
    onLoadComplete: () => {
        // loaded model
    },
    onLoadFailure: () => {
        // something's wrong, load fallback
    }
})