function controlMe(isTrue: boolean, somethingElse: string) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    // following line will show warning bcoz nullcehck is true
    return result;
}
