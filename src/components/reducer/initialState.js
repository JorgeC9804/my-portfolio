export const reducer = (state, action) => {
    switch(action.type) {
        case 0: 
            return state.map( change => change.id === action.dispatch.id ? {...change, status: true} : change );
        case 1: 
            return state.map( change => change.id === action.dispatch.id ? {...change, status: true} : change );
        case 2: 
            return state.map( change => change.id === action.dispatch.id ? {...change, status: true} : change );
        case 3: 
            return state.map( change => change.id === action.dispatch.id ? {...change, status: true} : change );
        default:
            console.log('no existe esa opcion');
    }
}

export const initialState = [
    {
        id: 0,
        conection: 'conection',
        status: false
    },
    {
        id: 1,
        conection: 'conection',
        status: false
    },
    {
        id: 2,
        conection: 'conection',
        status: false
    },
    {
        id: 3,
        conection: 'conection',
        status: false
    }
]