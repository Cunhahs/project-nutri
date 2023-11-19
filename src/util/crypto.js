import bcrypt from "bcrypt";

function encode(data) {
    const encrypted = bcrypt.hashSync(data, 10);
    return encrypted;
}

async function match(data, hash) {
    const match = await bcrypt.compare(data, hash);
    if (!match) throw "Unauthorized";
}

export const crypto = {
    encode,
    match,
};