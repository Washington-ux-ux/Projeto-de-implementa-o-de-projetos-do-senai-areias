import { Request, Response } from "express"
import * as service from "../services/recipe-services"

export const getRecipe = async (req: Request, res: Response) => {
    const recipe = await service.getRecipeService()
    res.status(recipe.statusCode).json(recipe.body)
}

export const getRecipeById = async (req: Request, res: Response) => {
    const id = parseInt(Array.isArray(req.params.id) ? req.params.id[0] : req.params.id)
    const recipe = await service.getRecipeByIdService(id)
    res.status(recipe.statusCode).json(recipe.body)
}

export const getRecipeByCategory = async (req: Request, res: Response) => {
    const category = Array.isArray(req.params.category) ? req.params.category[0] : req.params.category
    const recipe = await service.getRecipeByCategoryService(category)
    res.status(recipe.statusCode).json(recipe.body)
}

export const getRecipeByIngredient = async (req: Request, res: Response) => {
    const ingredient = Array.isArray(req.params.ingredient) ? req.params.ingredient[0] : req.params.ingredient
    const recipe = await service.getRecipeByIngredientService(ingredient)
    res.status(recipe.statusCode).json(recipe.body)
}