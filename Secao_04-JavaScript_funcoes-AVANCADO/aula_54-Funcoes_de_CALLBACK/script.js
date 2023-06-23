//
rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
};

f1 = (callback) => {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

f2 = (callback) => {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

f3 = (callback) => {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1Callback = () => { f2(f2Callback); };

f2Callback = () => { f3(f3Callback); };

f3Callback = () => { console.log('Ola, Mundo'); };

f1(f1Callback);