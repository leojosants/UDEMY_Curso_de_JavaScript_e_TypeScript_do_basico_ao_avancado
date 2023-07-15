function exemplo_03() {

    const { html } = require('../base');

    console.log(html, '\n');
    console.log(html.match(/<.+>.+<\/.+>/g));       // greedy
    console.log(html.match(/<.+?>.+?<\/.+?>/g));    // non-greedy

}
exemplo_03();

function exemplo_02() {

    const { html } = require('../base');

    console.log(html, '\n');
    console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy

    // exemplo_02();
}

function exemplo_01() {

    const { html } = require('../base');

    console.log(html, '\n');
    console.log(html.match(/<.+>.+<\/.+>/g)); // greedy

    // exemplo_01();
}