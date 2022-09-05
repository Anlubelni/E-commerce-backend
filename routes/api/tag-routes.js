const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Gets all tags and associated Product info
router.get('/', async (req, res) => {
  try {
    const tagInfo = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tag_id' }]
    });

    res.status(200).json(tagInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Gets a single tag and associated Product info based on id provided
router.get('/:id', async (req, res) => {
  try {
    const tagInfo = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tag_id' }]
    });

    if (!tagInfo) {
      res.status(404).json({ message: 'Tag with id ' + req.params.id + ' not found.' });
      return;
    }

    res.status(200).json(tagInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Creates a new tag based on tag_name provided
router.post('/', async (req, res) => {
  try {
    const tagInfo = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json(tagInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Updates a tag name based on the body and id provided
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagInfo = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!tagInfo) {
      res.status(404).json({ message: 'Tag with id ' + req.params.id + ' not found.' });
      return;
    }

    res.status(200).json(tagInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Deletes a tag based on the id provided
router.delete('/:id', async (req, res) => {
  try {
    const tagInfo = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagInfo) {
      res.status(404).json({ message: 'Tag with id ' + req.params.id + ' not found.' });
      return;
    }

    res.status(200).json(tagInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
//done