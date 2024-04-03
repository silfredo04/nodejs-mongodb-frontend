const api = "https://apirestmongo-dq2g.onrender.com/api/persona/"

export const guardar = async (dato) =>{
    // Guardar persona en el backend
    
    const request = await fetch(api+"crear", {
        method: "POST",
        body: JSON.stringify(dato),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await request.json();
      return data;
}