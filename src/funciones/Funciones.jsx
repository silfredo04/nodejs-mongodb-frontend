export const api = "https://apirestmongo-dq2g.onrender.com/api/persona/";

export const guardar = async (dato) => {
    try {
        const request = await fetch(api + "crear", {
            method: "POST",
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al guardar persona:", error);
        return { status: "error", message: "Error al guardar persona" };
    }
}

export const obtenerEmpleados = async () => {
    try {
        const request = await fetch(api + 'empleados', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener empleados:", error);
        return { status: "error", message: "Error al obtener empleados" };
    }
}

export const eliminar = async (id) => {
    try {
        const request = await fetch(api + "eliminar/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al eliminar persona:", error);
        return { status: "error", message: "Error al eliminar persona" };
    }
}

export const obtenerEmpleado = async (id) => {
    try {
        const request = await fetch(api + 'obtener/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener empleado:", error);
        return { status: "error", message: "Error al obtener empleado" };
    }
}

export const actualizar = async (dato, id) => {
    try {
        const request = await fetch(api + "actualizar/" + id, {
            method: "PATCH",
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al actualizar persona:", error);
        return { status: "error", message: "Error al actualizar persona" };
    }
}

export const actualizarAvatar = async (dato, id) => {
    try {
        const request = await fetch(api + "montarfoto/" + id, {
            method: "POST",
            body: dato,
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al actualizar avatar:", error);
        return { status: "error", message: "Error al actualizar avatar" };
    }
}
