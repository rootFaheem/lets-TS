function controlMe(isTrue: boolean, somethingElse: string) {
    let result: number;
    somethingElse = "Hi";
    if (isTrue) {
        result = 12;
    }
    // following line will show warning bcoz nullcehck is true
    result = 20;
    return { result, somethingElse };
}
