sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classlist.add('btn')
    btn.innerText=sound

    document.getElementbyID('buttons').appendChild(btn)
})