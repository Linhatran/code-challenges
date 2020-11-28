var isOneBitCharacter = function(bits) {
    if (bits.length === 1) return true;
     if (bits.length === 0) return false;
    if (bits[0] === 0) return isOneBitCharacter(bits.slice(1))
    if (bits[0] === 1) return isOneBitCharacter(bits.slice(2))
};
