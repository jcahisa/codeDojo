function createPhoneNumber(arg) {
    return `(${arg.slice(0, 3).join('')}) ${arg.slice(3, 6).join('')}-${arg.slice(6).join('')}`;
}

git add .
git commit -m 'test'
