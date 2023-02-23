window.addEventListener('load', solution);

function solution() {

    // Taking the input elements
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const postalCode = document.getElementById('code');
    const submitBtn = document.getElementById('submitBTN');
    const infoPreview = document.getElementById('infoPreview');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    const block = document.getElementById('block');

    // Submit information button event
    submitBtn.addEventListener('click', submitInfo);

    //Function submit inormation
    function submitInfo(ev) {
        ev.preventDefault();

        if (fname.value && email.value) {
            let liFname = document.createElement('li');
            liFname.textContent = `Full Name: ${fname.value}`;
            infoPreview.appendChild(liFname);

            let liEmail = document.createElement('li');
            liEmail.textContent = `Email: ${email.value}`;
            infoPreview.appendChild(liEmail);

            let liPhone = document.createElement('li');
            liPhone.textContent = `Phone Number: ${phone.value}`;
            infoPreview.appendChild(liPhone);

            let liAddress = document.createElement('li');
            liAddress.textContent = `Address: ${address.value}`;
            infoPreview.appendChild(liAddress);

            let liCode = document.createElement('li');
            liCode.textContent = `Postal Code: ${postalCode.value}`;
            infoPreview.appendChild(liCode);

            let tempName = fname.value;
            let tempEmail = email.value;
            let tempPhone = phone.value;
            let tempAddress = address.value;
            let tempCode = postalCode.value;

            fname.value = '';
            email.value = '';
            phone.value = '';
            address.value = '';
            postalCode.value = '';

            submitBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;

            // Edit information button event
            editBtn.addEventListener('click', editInfo);

            // Function edit information
            function editInfo(ev) {
                ev.preventDefault();

                infoPreview.innerHTML = '';

                fname.value = tempName;
                email.value = tempEmail;
                phone.value = tempPhone;
                address.value = tempAddress;
                postalCode.value = tempCode;

                submitBtn.disabled = false;
                editBtn.disabled = true;
                continueBtn.disabled = true;
            }

            // Continue button event
            continueBtn.addEventListener('click', finishInfo);

            // Function finish reservation
            function finishInfo(ev) {
                ev.preventDefault();

                block.innerHTML = '';

                let h3 = document.createElement('h3');
                h3.textContent = "Thank you for your reservation!";
                block.appendChild(h3);
            }
        }
    }
}