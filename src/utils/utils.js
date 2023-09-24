export const showPopupB = (htmlContent, event, left = 0, top = 0, width = null, time = 10) => {
    const popup = document.createElement('div')
    popup.className = 'popup'

    // Create a div element to hold the HTML content
    const contentDiv = document.createElement('div')
    contentDiv.innerHTML = htmlContent

    // Append the content div to the popup
    popup.appendChild(contentDiv)

    const rect = event.target.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const mouseY = event.clientY + window.pageYOffset

    const topPosition = mouseY - contentDiv.offsetHeight - 10 + top
    const leftPosition = centerX - contentDiv.offsetWidth / 2 + left

    popup.style.position = 'absolute'
    popup.style.top = `${topPosition}px`
    popup.style.left = `${leftPosition}px`

    if (width) {
        popup.style.width = `${width}px`
        popup.style.maxWidth = 'none'
        popup.style.wordWrap = 'break-word'
    }

    document.body.appendChild(popup)

    setTimeout(() => {
        const closePopup = () => {
            popup.remove()
            document.removeEventListener('click', closePopup)
        }

        document.addEventListener('click', closePopup)
    }, 0)

    setTimeout(() => {
        popup.remove()
    }, time * 1000)
}

