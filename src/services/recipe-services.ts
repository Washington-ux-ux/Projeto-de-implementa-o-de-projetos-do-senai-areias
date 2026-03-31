import * as httphelper from "../utils/http-helper"
import * as repository from "../repository/recipe-repository"

export const getRecipeService = async () => {
    const data = await repository.findAllRecipe()
    let response = null

    if (data) {
        response = await httphelper.ok(data)
    }else{
        response = await httphelper.badRequest()
    }
    return response;
}

export const getRecipeByIdService = async (id: number) => {
    const data = await repository.findRecipeById(id)
    let response = null

    if (data) {
        response = await httphelper.ok(data)
    }else{
        response = await httphelper.badRequest()
    }
    return response;
}

export const getRecipeByCategoryService = async (category: string) => {
    const data = await repository.findRecipeByCategory(category)
    let response = null

    if (data) {
        response = await httphelper.ok(data)
    }else{
        response = await httphelper.badRequest()
    }
    return response;
}

export const getRecipeByIngredientService = async (ingredient: string) => {
    const data = await repository.findRecipeByIngredient(ingredient)
    let response = null

    if (data) {
        response = await httphelper.ok(data)
    }else{
        response = await httphelper.badRequest()
    }
    return response;
}