const ProductModel = require("../../common/models/AbsentRecord");

module.exports = {
  getAllRecords: (req, res) => {
    const { query: filters } = req;

    ProductModel.findAllAbsentRecords(filters)
      .then((records) => {
        return res.status(200).json({
          status: true,
          data: records,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getProductById: (req, res) => {
    const {
      params: { productId },
    } = req;

    ProductModel.findAllAbsentRecords({ id: productId })
      .then((product) => {
        return res.status(200).json({
          status: true,
          data: product.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createAbsentRecord: (req, res) => {
    const { body } = req;

    ProductModel.createAbsentRecord(body)
      .then((record) => {
        return res.status(200).json({
          status: true,
          data: record.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateProduct: (req, res) => {
    const {
      params: { productId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the product.",
        },
      });
    }

    ProductModel.updateProduct({ id: productId }, payload)
      .then(() => {
        return ProductModel.findProduct({ id: productId });
      })
      .then((product) => {
        return res.status(200).json({
          status: true,
          data: product.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteProduct: (req, res) => {
    const {
      params: { productId },
    } = req;

    ProductModel.deleteProduct({id: productId})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfProductsDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
};
