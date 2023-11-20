function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    
    function moveWithArrowKeys(left, bottom, handleDirection){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        setInterval(function() {
            if(direction === 'north') {
                y += 1
            }
            if(direction === 'east') {
                x += 1
            }
            if(direction === 'south') {
                y -= 1
            }
            if(direction === 'west') {
                x -= 1
            }
        
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowUp') {
                direction = 'north'
            }
            if(e.key === 'ArrowRight') {
                direction = 'east'
            }
            if(e.key === 'ArrowDown') {
                direction = 'south'
            }
            if(e.key === 'ArrowLeft') {
                direction = 'west'
            }
            handleDirection(direction)
        })

        document.addEventListener('keyup', function(e){
            direction = null
            handleDirection(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

