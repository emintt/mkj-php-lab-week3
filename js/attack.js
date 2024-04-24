const url = 'http://localhost/week3/operations/login.php';

const testData = [
    'password',
    '123456',
    'password123',
    'admin',
    'qwerty',
    'password1234',
    'password12345',
];

const login = async (password) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'username=admin&password=' + password,
        });
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

testData.forEach(data => login(data));
