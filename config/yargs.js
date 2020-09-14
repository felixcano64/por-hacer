const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcin de la tarea'
};

const completado = {
    defoult: true,
    alias: 'c',
    desc: 'marca de completado de la tarea'
};

const argv = require('yargs')
    .command(
        'crear',
        'crear una tarea', {
            descripcion
        }
    )
    .command(
        'actualizar',
        'Actualiza una tarea', {
            descripcion,
            completado
        }
    )
    .command(
        'borrar',
        'borrar una tarea', {
            descripcion
        }
    )

.help()
    .argv

module.exports = {
    argv
}