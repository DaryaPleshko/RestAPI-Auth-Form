const btnReg = document.querySelector('.btn-reg'),
    inpUsernameReg = document.querySelector('.Username-inp-reg'),
    inpEmailReg = document.querySelector('.E-mail-inp-reg'),
    inpPhoneReg = document.querySelector('.Phone-inp-reg'),
    inpPasswordReg = document.querySelector('.Password-inp-reg'),
    inpConfirmPasswordReg = document.querySelector('.Confirm-Password-inp-reg'),

    btnAuth = document.querySelector('.btn-auth'),
    inpEmailAuth = document.querySelector('.E-mail-inp-auth'),
    inpPasswordAuth = document.querySelector('.Password-inp-auth');

btnReg.addEventListener('click', async () => {
    const objectToSerwerReg = {
        username: inpUsernameReg.value,
        email: inpEmailReg.value,
        phone: inpPhoneReg.value,
        pwd: inpPasswordReg.value,
    };

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        body: JSON.stringify(objectToSerwerReg),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status);
    console.log(await response.json());

});

btnAuth.addEventListener('click', async () => {
    const objectToSerwerAuth = {
        email: inpEmailAuth.value,
        pwd: inpPasswordAuth.value,
    };
    const response = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        body: JSON.stringify(objectToSerwerAuth),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status);
    console.log(await response.json());
})