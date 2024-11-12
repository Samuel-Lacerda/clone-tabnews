function status(request, response) {
  response.status(200).json({ chave: "Requisição bem-sucedida!" });
}

export default status;
