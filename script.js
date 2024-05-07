function calculate_box(i) {
    const dropdown = document.getElementById(`calculatebox-${i}-codec`);
    let codec = dropdown.options[dropdown.selectedIndex].value;
    const minutes = document.getElementById(`calculatebox-${i}-minutes`).value;
    const framerate = document.querySelector(`input[name=calculatebox-${i}-frequenz]:checked`).value;
    const quanity = document.getElementById(`calculatebox-${i}-streams`).value;
    const result = document.getElementById(`calculatebox-${i}-result`);
    
    result.innerHTML = calculate(codec,minutes,framerate,quanity);
}

function calculate(codec,minutes,framerate,quantity) {
    let calculate;
    if (framerate == 'i') {
        calculate = (bitrateOf(codec) * 60 * minutes) / 8
    } else if (framerate == 'p') {
        calculate = (bitrateOf(codec) * 60 * minutes) / 8
        calculate = calculate * 2;
    }

    calculate = calculate * quantity;
    calculate = calculate / 1000;
    calculate = calculate.toFixed();
    
    return calculate;
}

function bitrateOf(value) {
    for (let i = 0; i < codecs.length; i++) {
        const element = codecs[i];
        if (element.name == value) {
            return element.bitrate;
        }
    }
}