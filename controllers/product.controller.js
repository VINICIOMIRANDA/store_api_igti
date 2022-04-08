import ProductService from "../services/product.service.js";

async function createProduct(req, res, next) {
  try {
    let product = req.body;

    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "Name, Descrição, Valor, Estoque, Codigo do Fornecedor e Address são obrigatórios."
      );
    }
    product = await ProductService.createProduct(product);
    res.send(product);
    global.logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await ProductService.getProducts());
    global.logger.info("GET /product");
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await ProductService.getProduct(req.params.id));
    global.logger.info("GET /product ID");
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    await ProductService.deleteProduct(req.params.id);
    global.logger.info("DELETE /product ID");
    res.end();
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;

    if (
      !product.productId ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "Product ID, Name, Descrição, Valor, Estoque, Codigo do Fornecedor e Address são obrigatórios."
      );
    }
    product = await ProductService.updateProduct(product);
    res.send(product);
    global.logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function createProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error("product Id é obrigatorio");
    }
    await ProductService.createProductInfo(productInfo);
    res.end();
    global.logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);

    // res.send(productInfo)
  } catch (err) {
    next(err);
  }
}


async function updateProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error("product Id é obrigatorio");
    }
    await ProductService.updateProductInfo(productInfo);
    res.end();
    global.logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);

    // res.send(productInfo)
  } catch (err) {
    next(err);
  }
}

async function createReview(req, res, next){
  try {
    let params = req.body;
    if (!params.productId || !params.review){
    
      throw new Error("Product Id e Review são obrigatorios");
     
    }
     await ProductService.createReview(params.review, params.productId );
    res.end();
    global.logger.info(`POST CREATE REVIEW /product/review`);

  } catch (err) {
    next(err);
  }
}

async function deleteReview(req, res, next){
  try {
    
     await ProductService.deleteReview(req.params.id,req.params.index );
    res.end();
    global.logger.info(`DELETE REVIEW /product/${req.params.id}/review/${req.params.index}`);

  } catch (err) {
    next(err);
  }
}
async function getProductsInfo(req, res, next) {
  try {
    res.send(await ProductService.getProductsInfo());
    global.logger.info("GET /product/info ");
  } catch (err) {
    next(err);
  }
}

async function deleteProductInfo(req, res, next) {
  try {
    res.send(await ProductService.deleteProductInfo(req.params.id));
    global.logger.info("DELETE /product/info ");
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo
};
