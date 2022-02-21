function verificar(){
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    var data = new Date()
    var ano = data.getFullYear()
    if (fano.value.length == 0  || Number(fano.value) > ano) {
        window.alert ('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute ('src','kid-m.png')
            } else if (idade < 50){
                img.setAttribute ('src','adu-m.png')
            } else {
                img.setAttribute ('src','old-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute ('src','kid-f.png')
            } else if (idade < 50){
                img.setAttribute ('src','adu-f.png')
            } else {
                img.setAttribute ('src','old-f.png')
            }
        }  
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos `  
        res.appendChild (img)
    }


}