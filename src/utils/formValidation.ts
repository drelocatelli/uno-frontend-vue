function formValidation(elements: HTMLFormControlsCollection) {
    let i = 0;
    while(i < elements.length) {
        const type = (elements[i] as HTMLInputElement).type;
        const element = elements[i] as HTMLInputElement;
        if(type != 'button') {
            const errorEl = document.querySelector(`#${element.name}Error`);
            errorEl!.innerHTML = element.validationMessage;
        }
        i++;
    }

}

export default formValidation;