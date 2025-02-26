for (let numerador=0; numerador<=100; numerador++){
    for (let multiplicador = 0; multiplicador<=10; multiplicador++){
        if(numerador % 2 == 0){
            console.log(`${numerador} * {${numerador * multiplicador}}`);
        }else { console.log(`pulou porque esse multiplicador é impar`)}

    }
    console.log('')
}