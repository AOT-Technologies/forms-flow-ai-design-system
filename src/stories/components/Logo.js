/** Logo component*/
export const createLogo = ({
    type = "formsflow-logo",
    src
}) => {
    const span = document.createElement('span')
    const link = document.createElement('a')
    const img = document.createElement('img')
    span.appendChild(link)
    link.appendChild(img)
    link.href = src
    span.className = type
    img.src = src
    img.alt = "formsflow.ai"
    return span
}