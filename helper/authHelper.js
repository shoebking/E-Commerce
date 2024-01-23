import bcyrpt from 'bcrypt';
export const hashedPassword=async (password)=>{
    try{
        const saltRounds = 10;
        const hpwd=await bcyrpt.hash(password,saltRounds);
        return hpwd;
    }catch(err){
        console.log(err);
    }
}

export const comparePassword=async (password,hashPassword)=>{
    return bcyrpt.compare(password,hashPassword);
};