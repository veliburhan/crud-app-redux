/* 
1.initialState oluştur.
2. reducer fonksiyorunu oluştur.
*/


const initialState = {
    start:false,
    success:false,
    students: [],
    fail : false,
    error:""
}

const studentsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_STUDENT_START":
            return{
                ...state,
                start:true
            }
            
        case "FETCH_STUDENT_SUCCESS":
            return{
                ...state,
                fail:false,
                start:false,
                success:true,
                students:action.payload
            }
        case "FETCH_STUDENT_FAIL":
            return{
                ...state,
                start:false,
                fail:true,
                error:action.payload
            } 
        case "ADD_STUDENT":
            return{
                ...state,
                students:[...state.students,action.payload]
            }            
        default:
            return state;
    }

}

export default studentsReducer