const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Gets all Categories with associated Products
router.get("/", async (req, res) => {
  try {
    const catInfo = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    res.status(200).json(catInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Gets a Category with associated Products based on id provided
router.get("/:id", async (reqy, res) => {
  try {
    const catInfo = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });

    if (!catInfo) {
      res
        .status(404)
        .json({ message: "Category with id " + req.params.id + " not found." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Creates a new Category based on category_name provided
router.post("/", async (req, res) => {
  try {
    const locInfo = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(locInfo);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Updates a Category based on the body and id provided
router.put("/:id", async (req, res) => {
  try {
    const catInfo = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!catInfo) {
      res
        .status(404)
        .json({ message: "Category with id " + req.params.id + " not found." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Deletes a Category based on the id provided
router.delete("/:id", async (req, res) => {
  try {
    const locInfo = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locInfo) {
      res
        .status(404)
        .json({ message: "Category with id " + req.params.id + " not found." });
      return;
    }

    res.status(200).json(locInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
