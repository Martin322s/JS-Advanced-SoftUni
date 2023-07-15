function editElement(element, matcher, string) {
    let match = new RegExp(matcher, 'g');
    element.textContent = element.textContent.replace(match, string);
}