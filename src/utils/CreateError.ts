

interface CustomErr {
    status:number,
    message:{message:string}
}

const CreateError = (status : number , message:{message:string} ):CustomErr =>{
    
    const err:CustomErr ={
        status:status,
        message:message
    }

    return err;

}

export default CreateError;