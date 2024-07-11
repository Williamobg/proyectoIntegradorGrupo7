const form = document.getElementById("formulario")
const editarFormulario = document.getElementById("editarFormulario")

form.addEventListener('submit', async (e) => 
    {
        e.preventDefault();//evita qaue la pagina se actualice

        const formData = new FormData(form);

        const data = 
        {
            nombre: formData.get('name'),
            apellido: formData.get('lastname'),
            email: formData.get('email'),
            telefono: formData.get('telefono')
        };

        const response = await fetch('http://localhost:3000/usuarios',
        {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        alert(result.message);
       form.reset();
        
    });

    editarFormulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(editarFormulario);
        const id = formData.get('eID');
        const data = {
            nombre: formData.get('eName'),
            apellido: formData.get('eLastname'),
            mail: formData.get('eEmail'),
            telefono: formData.get('eTelefono')
        };

        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
        editarFormulario.reset();

    });

    document.querySelectorAll('.update').forEach(button => 
        {
            button.addEventListener('click', (e) => 
            {
                const id = e.target.getAttribute('data-id');
                const nombre = e.target.getAttribute('data-name');
                const apellido = e.target.getAttribute('data-lastname');
                const email = e.target.getAttribute('data-email');
                const telefono = e.target.getAttribute('data-telefono');


                document.getElementById('eID').value = id;
                document.getElementById('eName').value = nombre;
                document.getElementById('eLastname').value = apellido;
                document.getElementById('eEmail').value = email;
                document.getElementById('eTelefono').value = telefono;
                

            });
        });

        document.querySelectorAll('.delete').forEach(button =>
            {
                button.addEventListener('click', async (e) =>
                {
                    const id = e.target.getAttribute('data-id');
                    const response = await fetch(`http://localhost:3000/usuarios/${id}`,
                    {
                        method: 'DELETE'
                    });

                    const result = await response.json();
                    alert(result.message);
                });

                });

          

