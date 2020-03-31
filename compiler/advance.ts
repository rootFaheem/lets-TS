function controlMe(isTrue: boolean) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    // following line will show warning bcoz nullcehck is true
    return result;
}
