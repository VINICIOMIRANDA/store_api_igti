import ClienteService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;

    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Name, CPF,Phone, Email e Address são obrigatórios.");
    }
    client = await ClienteService.createClient(client);
    res.send(client);
    global.logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClienteService.getClients());
    global.logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClienteService.getClient(req.params.id));
    global.logger.info("GET /client ID");
  } catch (err) {
    next(err);
  }
}


async function deleteClient(req, res, next) {
  try {
   await ClienteService.deleteClient(req.params.id);
    global.logger.info("DELETE /client ID");
    res.end();
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;

    if (
      !client.clientId ||
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Client ID, Name, CPF,Phone, Email e Address são obrigatórios.");
    }
    client = await ClienteService.updateClient(client);
    res.send(client);
    global.logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default { createClient, getClients, getClient, deleteClient,updateClient};
