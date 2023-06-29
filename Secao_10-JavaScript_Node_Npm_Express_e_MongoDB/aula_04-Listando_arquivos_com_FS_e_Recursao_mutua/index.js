
exemplo04 = () => {

    const fs = require('fs').promises;
    const path = require('path');

    async function readdir(rootDir) {
        rootDir = rootDir || path.resolve(__dirname);
        const files = await fs.readdir(rootDir);
        walk(files, rootDir);
    };

    async function walk(files, rootDir) {
        for (let file of files) {
            const fileFullPath = path.resolve(rootDir, file);
            const stats = await fs.stat(fileFullPath);

            if (/\.git/g.test(fileFullPath)) continue;
            if (/\node_modules/g.test(fileFullPath)) continue;

            if (stats.isDirectory()) {
                readdir(fileFullPath);
                continue;
            }

            console.log(fileFullPath);
        }
    };

    readdir('/REPOSITORIO_GITHUB_DESKTOP/UDEMY_Curso_de_JavaScript_e_TypeScript_do_basico_ao_avancado');

};
exemplo04();

/* exemplo03 = () => {

    const fs = require('fs').promises;
    const path = require('path');

    async function readdir(rootDir) {
        rootDir = rootDir || path.resolve(__dirname);
        const files = await fs.readdir(rootDir);
        walk(files, rootDir);
    };

    async function walk(files, rootDir) {
        for (let file of files) {
            const fileFullPath = path.resolve(rootDir, file);
            const stats = await fs.stat(fileFullPath);

            console.log(file, stats.isDirectory());
        }
    };

    readdir('/REPOSITORIO_GITHUB_DESKTOP/UDEMY_Curso_de_JavaScript_e_TypeScript_do_basico_ao_avancado');

    exemplo03();
};
*/

/* exemplo02 = () => {

    const fs = require('fs').promises;
    const path = require('path');

    async function readdir(rootDir) {

        rootDir = rootDir || path.resolve(__dirname);

        const files = await fs.readdir(rootDir);

        walk(files);
    };

    function walk(files) {
        for (let file of files) {
            console.log(file);
        }
    };

    readdir('/REPOSITORIO_GITHUB_DESKTOP/UDEMY_Curso_de_JavaScript_e_TypeScript_do_basico_ao_avancado');

    exemplo02();
};
*/

/* exemplo01 = () => {

    const fs = require('fs').promises;
    const path = require('path');

    fs.readdir(path.resolve(__dirname))
        .then(files => console.log(files))
        .catch(e => console.log(e));

        exemplo01();
};
*/