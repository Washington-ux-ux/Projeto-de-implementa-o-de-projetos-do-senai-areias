import { Router } from "express";
import * as recipeController from "./src/controllers/recipe-controller";

const router = Router();

router.get("/recipes", recipeController.getRecipe)
router.get("/recipes/:id", recipeController.getRecipeById)
router.get("/recipes/category/:category", recipeController.getRecipeByCategory)
router.get("/recipes/ingredient/:ingredient", recipeController.getRecipeByIngredient)

export default router;