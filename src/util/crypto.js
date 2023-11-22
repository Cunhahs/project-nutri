import bcrypt from "bcrypt";

function encode(data) {
    const encrypted = bcrypt.hashSync(data, 10);
    return encrypted;
}

async function match(data, hash) {
    return await bcrypt.compare(data, hash);
}

export const crypto = {
    encode,
    match,
};