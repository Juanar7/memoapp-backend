import { compare,hash } from "bcrypt";

export const hashPassword = async (password) => {
    return await hash(password,6);
}

export const validatePassword = async (password,hashedPassword) => {
    return await compare(password,hashedPassword);
}
