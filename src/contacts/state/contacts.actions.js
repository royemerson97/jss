export const ADD_CONTACT = (contactInfo) =>{
    return {
        type : 'ADD_CONTACT',
        payload : contactInfo
    };
}
export const DELETE_CONTACT = (id) =>{
    return{
        type: 'DELETE_CONTACT',
        payload: id
    };
}
export const UPDATE_CONTACT = (contact) =>{
    return{
        type: 'UPDATE_CONTACT',
        payload: contact
    };
}