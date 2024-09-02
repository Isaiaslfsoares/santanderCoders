document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://dog.ceo/api/breeds/list/all';
    const breedSelect = document.getElementById('dogBreed');
    let selectedBreedImageUrl = '';

    function fetchBreeds() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                populateBreedOptions(data.message);
            })
            .catch(error => console.log('Erro ao buscar raças:', error));
    }

    function populateBreedOptions(breeds) {
        breedSelect.innerHTML = '<option selected disabled>Raça:</option>';

        for (const breed in breeds) {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
            breedSelect.appendChild(option);
        }

        breedSelect.addEventListener('change', (event) => {
            const selectedBreed = event.target.value;
            fetchBreedImage(selectedBreed);
        });
    }

    function fetchBreedImage(breed) {
        const imageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

        fetch(imageUrl)
            .then(response => response.json())
            .then(data => {
                displayBreedImage(data.message);
                selectedBreedImageUrl = data.message;
            })
            .catch(error => console.error('Erro ao buscar a imagem da raça', error));
    }

    function displayBreedImage(imageUrl) {
        const breedImage = document.getElementById('breedImage');
        breedImage.src = imageUrl;
    }

    const registerButton = document.getElementById('registerButton');
    if (registerButton) {
        registerButton.addEventListener('click', (event) => {
            event.preventDefault();

            const tutorName = document.getElementById('tutorName').value.trim();
            const contactPhone = document.getElementById('contactPhone').value.trim();
            const dogName = document.getElementById('dogName').value.trim();
            const dogBreed = breedSelect.value;
            const dogBirthDate = document.getElementById('dogBirthDate').value;
            const dogSize = document.getElementById('dogSize').value;
            const dogFur = document.getElementById('dogFur').value;

            if (!tutorName || !contactPhone || !dogName || !dogBreed || !dogBirthDate || !dogSize || !dogFur) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const dogData = {
                tutorName: tutorName,
                contactPhone: contactPhone,
                dogName: dogName,
                dogNickname: document.getElementById('dogNickname').value.trim(),
                dogAllergies: document.getElementById('dogAllergies').value.trim(),
                dogBreed: dogBreed,
                dogBirthDate: dogBirthDate,
                dogSize: dogSize,
                dogFur: dogFur,
                dogObservations: document.getElementById('dogObservations').value.trim(),
                breedImageUrl: selectedBreedImageUrl
            };

            salvarPet(dogData);

            console.log("Cachorro registrado:", dogData);
            alert(`Cachorro ${dogData.dogName} registrado com sucesso!`);

            document.querySelector('form').reset();
            document.getElementById('breedImage').src = '';
        });

        fetchBreeds();
    }

    // Código para o cadastro de atendimento
    const selectCachorro = document.getElementById('selectCachorro');
    const atendimentoForm = document.getElementById('atendimentoForm');

    function carregarCachorros() {
        const cachorros = buscarPets();
        if (selectCachorro) {
            selectCachorro.innerHTML = '<option value="" selected disabled>Selecionar Cachorro</option>';
            cachorros.forEach(cachorro => {
                const option = document.createElement('option');
                option.value = cachorro.id;
                option.textContent = `${cachorro.dogName} (${cachorro.dogBreed})`;
                selectCachorro.appendChild(option);
            });
        }
    }

    if (atendimentoForm) {
        carregarCachorros();

        atendimentoForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const atendimento = {
                cachorroId: selectCachorro.value,
                horario: document.getElementById('horarioAtendimento').value,
                tipoServico: document.getElementById('tipoServico').value,
                funcionario: document.getElementById('funcionarioResponsavel').value,
                concluido: document.getElementById('atendimentoConcluido').checked,
                valor: parseFloat(document.getElementById('valorServico').value)
            };

            salvarAtendimento(atendimento);

            console.log("Atendimento registrado:", atendimento);
            alert('Atendimento cadastrado com sucesso!');
            atendimentoForm.reset();
        });
    }
});