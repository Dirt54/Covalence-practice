var friends = ['Chandler', 'Sam', 'Forrest', 'Avery', 'Bailey'];

for (j = 0; j < friends.length; j++) {
    console.log(friends[j]);
    for (i = 9; i > 0; i--) {
        console.log((i + 1) + " lines of code in the file, " + (i + 1) + " lines of code; " + friends[j] + " strikes one out, clears it all out, " + i + "lines of code in the file.");
        if (i === 1) {
            console.log((i + 1) + " lines of code in the file, " + (i + 1) + " lines of code; " + friends[j] + " strikes one out, clears it all out, " + i + " line of code in the file.");
        }
    }
}