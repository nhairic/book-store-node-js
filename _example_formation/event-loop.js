(function() {
    console.log('Step 0')

    setTimeout(function cb() {
        console.log('Step1 ')
    })

    console.log('Step 2')

    setTimeout(function cb() {
        console.log('Step 3' )}
        , 0)
        console.log('Step 4')
})()