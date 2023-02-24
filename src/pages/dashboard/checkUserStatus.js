const checkRutine = (rutine) => {
    let color;
    let title;

    switch (rutine) {
        case false:
            color = 'error';
            title = 'Sin asignar';
            break;
        case true:
            color = 'success';
            title = 'Asignada';
            break;
        case null:
            color = 'error';
            title = 'Sin asignar';
            break;
        default:
            color = null;
            title = null;
    }

    return ({
        color,
        title
    })
};

const checkDiet = (diet) => {
    let color;
    let title;

    switch (diet) {
        case false:
            color = 'error';
            title = 'Sin asignar';
            break;
        case true:
            color = 'success';
            title = 'Asignada';
            break;
        case null:
            color = 'error';
            title = 'Sin asignar';
            break;
        default:
            color = null;
            title = null;
    }

    return ({
        color,
        title
    })
}

const checkResults = (results) => {
    let color;
    let title;

    switch(results.photo) {
        case false:
            color = 'error';
            title = 'Sin asignar'
        break;
        case true:
            color = 'success';
            title = 'Asignados';
        break;
        case null:
            color = 'error';
            title = 'Sin asignar';
        break;
        default:
            color = null;
            title = null;
    }

    return({
        color,
        title
    })

}

const getSeverity = (status) => {
    console.log(status)
    switch (status) {
        case 'Sin asignar':
            return 'danger';
            break;
        case 'Asignados':
            return 'success';
            break;
        case 'Asignada':
            return 'success';
            break;
    }
};

export{
    checkDiet,
    checkRutine,
    checkResults,
    getSeverity
}
